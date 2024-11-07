<template>
  <div class="community-container">
    <!-- 顶部区域 -->
    <div class="top-section">
      <div class="title-section">
        <h2>社区动态</h2>
        <div class="post-tabs">
          <a href="#" 
             v-for="tab in tabs" 
             :key="tab.value"
             :class="['tab-item', { active: activeTab === tab.value }]"
             @click.prevent="activeTab = tab.value"
          >
            {{ tab.label }}
          </a>
        </div>
      </div>
      <button class="create-post-btn" @click="handleCreatePost">
        <span class="mdi mdi-plus"></span>
        发布动态
      </button>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <!-- 帖子列表 -->
      <div class="posts-section" v-if="activeTab !== 'hot'">
        <div class="post-list">
          <div class="post-card" v-for="post in posts" :key="post.id">
            <div class="post-header">
              <div class="user-info">
                <img :src="post.userAvatar" alt="用户头像" class="user-avatar">
                <div class="post-meta">
                  <span class="username">{{ post.username }}</span>
                  <span class="post-time">{{ post.time }}</span>
                </div>
              </div>
              <button v-if="isOwnPost(post)" 
                      class="delete-btn"
                      @click="deletePost(post.id)">
                <span class="mdi mdi-delete"></span>
              </button>
            </div>
            
            <div class="post-content">
              <p class="post-text">{{ post.content }}</p>
              <div class="post-images" v-if="post.images && post.images.length">
                <img v-for="(img, index) in post.images" 
                     :key="index" 
                     :src="img" 
                     alt="帖子图片"
                     class="post-image">
              </div>
            </div>

            <div class="post-tags" v-if="post.tags && post.tags.length">
              <span class="tag" v-for="tag in post.tags" :key="tag">#{{ tag }}</span>
            </div>
            
            <div class="post-actions">
              <div class="action-btn" 
                   :class="{ active: post.isLiked }"
                   @click="toggleLike(post)">
                <span class="mdi" :class="post.isLiked ? 'mdi-heart' : 'mdi-heart-outline'"></span>
                <span class="count">{{ post.likes }}</span>
              </div>
              <div class="action-btn" 
                   :class="{ active: post.showComments }"
                   @click="toggleComments(post)">
                <span class="mdi mdi-comment-outline"></span>
                <span class="count">{{ post.comments.length }}</span>
              </div>
              <div class="action-btn" 
                   :class="{ active: post.isCollected }"
                   @click="toggleCollect(post)">
                <span class="mdi" :class="post.isCollected ? 'mdi-bookmark' : 'mdi-bookmark-outline'"></span>
              </div>
              <div class="action-btn" @click="sharePost(post)">
                <span class="mdi mdi-share-outline"></span>
              </div>
            </div>

            <!-- 添加评论区域 -->
            <div class="comments-section" v-if="post.showComments">
              <div class="comments-list">
                <div v-for="comment in post.comments" 
                     :key="comment.id" 
                     class="comment-item">
                  <img :src="comment.userAvatar" alt="用户头像" class="comment-avatar">
                  <div class="comment-content">
                    <div class="comment-user">{{ comment.username }}</div>
                    <div class="comment-text">{{ comment.text }}</div>
                    <div class="comment-time">{{ comment.time }}</div>
                  </div>
                </div>
              </div>
              
              <div class="comment-input-area">
                <img :src="userProfile.avatar" alt="用户头像" class="comment-avatar">
                <div class="input-wrapper">
                  <input 
                    type="text" 
                    v-model="post.newComment"
                    placeholder="写下你的评论..."
                    @keyup.enter="addComment(post)"
                  >
                  <button 
                    class="send-btn"
                    :disabled="!post.newComment || !post.newComment.trim()"
                    @click="addComment(post)"
                  >
                    发送
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门排行榜 -->
      <div class="hot-ranking" v-else>
        <div class="ranking-card" v-for="(post, index) in communityData.hotRanking" :key="post.id">
          <div class="ranking-number">{{ index + 1 }}</div>
          <div class="ranking-content">
            <div class="ranking-user">
              <img :src="post.userAvatar" alt="用户头像" class="user-avatar">
              <span class="username">{{ post.username }}</span>
            </div>
            <h3 class="ranking-title">{{ post.title }}</h3>
            <div class="ranking-stats">
              <span><i class="mdi mdi-eye"></i> {{ post.views }}</span>
              <span><i class="mdi mdi-heart"></i> {{ post.likes }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧信息栏 -->
      <div class="sidebar">
        <!-- 用户信息卡片 -->
        <div class="user-card">
          <div class="user-header">
            <img :src="userProfile.avatar" alt="用户头像" class="user-avatar">
            <div class="user-info">
              <h3 class="nickname">{{ userProfile.nickname }}</h3>
              <p class="bio">{{ userProfile.bio }}</p>
            </div>
          </div>
          <div class="user-stats">
            <div class="stat-item">
              <div class="stat-value">{{ userProfile.stats.following }}</div>
              <div class="stat-label">关注</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ userProfile.stats.followers }}</div>
              <div class="stat-label">粉丝</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">{{ userProfile.stats.posts }}</div>
              <div class="stat-label">动态</div>
            </div>
          </div>
        </div>

        <!-- 热门话题 -->
        <div class="hot-topics">
          <h3 class="section-title">
            <span class="mdi mdi-fire"></span>
            热门话题
          </h3>
          <div class="topic-list">
            <div class="topic-item" v-for="topic in hotTopics" :key="topic.id">
              <div class="topic-name"># {{ topic.name }}</div>
              <div class="topic-count">{{ topic.count }}讨论</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 添加发布动态弹窗 -->
    <CreatePost 
      :show="showCreatePost"
      @close="showCreatePost = false"
      @publish="handlePublish"
    />

    <!-- 添加评论弹窗 -->
    <div class="comment-modal" v-if="showCommentModal" @click.self="closeComments">
      <div class="comment-container">
        <div class="comment-header">
          <h3>评论</h3>
          <button class="close-btn" @click="closeComments">×</button>
        </div>
        
        <div class="comment-list">
          <div v-for="comment in currentPost.comments" 
               :key="comment.id" 
               class="comment-item">
            <img :src="comment.userAvatar" alt="用户头像" class="comment-avatar">
            <div class="comment-content">
              <div class="comment-user">{{ comment.username }}</div>
              <div class="comment-text">{{ comment.text }}</div>
              <div class="comment-time">{{ comment.time }}</div>
            </div>
          </div>
        </div>
        
        <div class="comment-input">
          <textarea 
            v-model="newComment" 
            placeholder="写下你的评论..."
            @keyup.enter="addComment"
          ></textarea>
          <button 
            class="submit-comment" 
            :disabled="!newComment.trim()"
            @click="addComment"
          >
            发送
          </button>
        </div>
      </div>
    </div>

    <!-- 添加分享弹窗 -->
    <div class="share-modal" v-if="showShareModal" @click.self="closeShare">
      <div class="share-container">
        <div class="share-header">
          <h3>分享到</h3>
          <button class="close-btn" @click="closeShare">×</button>
        </div>
        <div class="share-options">
          <div class="share-option" v-for="option in shareOptions" :key="option.id">
            <span class="mdi" :class="option.icon"></span>
            <span>{{ option.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { communityData } from '../data/communityData'
import CreatePost from './CreatePost.vue'

export default {
  name: 'CommunityPage',
  components: {
    CreatePost
  },
  data() {
    return {
      activeTab: 'recommend',
      tabs: [
        { value: 'recommend', label: '推荐' },
        { value: 'latest', label: '最新' },
        { value: 'hot', label: '热门' },
        { value: 'following', label: '关注' }
      ],
      posts: [],
      hotTopics: communityData.hotTopics,
      userProfile: communityData.userProfile,
      showCreatePost: false,
      showCommentModal: false,
      showShareModal: false,
      currentPost: null,
      newComment: '',
      shareOptions: [
        { id: 1, name: '微信', icon: 'mdi-wechat' },
        { id: 2, name: '朋友圈', icon: 'mdi-account-group' },
        { id: 3, name: '微博', icon: 'mdi-sina-weibo' },
        { id: 4, name: 'QQ', icon: 'mdi-qqchat' },
        { id: 5, name: '复制链接', icon: 'mdi-link' }
      ]
    }
  },
  watch: {
    activeTab: {
      immediate: true,
      handler(newTab) {
        switch(newTab) {
          case 'recommend':
            this.posts = communityData.recommendPosts
            break
          case 'latest':
            this.posts = communityData.latestPosts
            break
          case 'following':
            this.posts = communityData.followingPosts
            break
          case 'hot':
            this.posts = communityData.hotPosts
            break
        }
      }
    }
  },
  methods: {
    handleCreatePost() {
      this.showCreatePost = true
    },
    handlePublish(post) {
      const newPost = {
        id: this.posts.length + 1,
        username: this.userProfile.nickname,
        userAvatar: this.userProfile.avatar,
        ...post
      }
      this.posts.unshift(newPost)
    },
    isOwnPost(post) {
      return post.username === this.userProfile.nickname
    },
    deletePost(postId) {
      if (confirm('确定要删除这条动态吗？')) {
        this.posts = this.posts.filter(post => post.id !== postId)
      }
    },
    toggleLike(post) {
      if (post.isLiked) {
        post.likes--
      } else {
        post.likes++
      }
      post.isLiked = !post.isLiked
    },

    toggleCollect(post) {
      post.isCollected = !post.isCollected
    },

    showComments(post) {
      this.currentPost = post
      this.showCommentModal = true
      this.newComment = ''
    },

    closeComments() {
      this.showCommentModal = false
      this.currentPost = null
    },

    addComment(post) {
      if (!post.newComment || !post.newComment.trim()) return

      const comment = {
        id: Date.now(),
        username: this.userProfile.nickname,
        userAvatar: this.userProfile.avatar,
        text: post.newComment,
        time: '刚刚'
      }

      if (!Array.isArray(post.comments)) {
        post.comments = []
      }
      post.comments.push(comment)
      post.newComment = ''
    },

    toggleComments(post) {
      post.showComments = !post.showComments
      if (!post.newComment) {
        post.newComment = ''
      }
    },

    sharePost(post) {
      this.currentPost = post
      this.showShareModal = true
    },

    closeShare() {
      this.showShareModal = false
      this.currentPost = null
    }
  }
}
</script>

<style scoped>
.community-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 60px;
}

.top-section {
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.title-section {
  display: flex;
  align-items: center;
  gap: 40px;
}

.title-section h2 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.post-tabs {
  display: flex;
  gap: 30px;
}

.tab-item {
  color: #666;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.tab-item:hover {
  color: #4a90e2;
  background: #f0f7ff;
}

.tab-item.active {
  color: #4a90e2;
  background: #f0f7ff;
  font-weight: 500;
}

.create-post-btn {
  background: linear-gradient(45deg, #4a90e2, #63b3ed);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
}

.create-post-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(74, 144, 226, 0.3);
}

.main-content {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 24px;
}

.post-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;
}

.post-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.username {
  font-weight: 600;
  color: #333;
  font-size: 16px;
}

.post-time {
  font-size: 14px;
  color: #999;
}

.post-content {
  margin: 20px 0;
}

.post-text {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.post-images {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin: 16px 0;
}

.post-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  transition: transform 0.2s;
}

.post-image:hover {
  transform: scale(1.02);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.tag {
  background: #f0f7ff;
  color: #4a90e2;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  transition: all 0.2s;
}

.tag:hover {
  background: #e1f0ff;
  transform: translateY(-1px);
}

.post-actions {
  display: flex;
  gap: 24px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #666;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  transition: all 0.2s;
}

.action-btn:hover {
  background: #f5f5f5;
  color: #4a90e2;
}

.action-btn .mdi {
  font-size: 20px;
}

/* 右侧栏样式 */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.user-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.user-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.user-stats {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.hot-topics {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.section-title .mdi {
  color: #ff6b6b;
}

.topic-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.2s;
}

.topic-item:hover {
  background: #f8f9fa;
  transform: translateX(4px);
}

.topic-name {
  color: #4a90e2;
  font-weight: 500;
}

.topic-count {
  color: #999;
  font-size: 14px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.delete-btn {
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  color: #ff4d4f;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.delete-btn:hover {
  background: rgba(255, 77, 79, 0.1);
  transform: scale(1.1);
}

.delete-btn .mdi {
  font-size: 20px;
}

.action-btn.active {
  color: #4a90e2;
}

.action-btn.active .mdi-heart {
  color: #ff4757;
}

/* 评论弹窗样式 */
.comment-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.comment-container {
  background: white;
  width: 500px;
  max-height: 80vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

.comment-header {
  padding: 16px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
}

.comment-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.comment-content {
  flex: 1;
}

.comment-user {
  font-weight: 500;
  margin-bottom: 4px;
}

.comment-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.comment-input {
  padding: 16px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 12px;
}

.comment-input textarea {
  flex: 1;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 8px;
  resize: none;
  height: 36px;
}

.submit-comment {
  padding: 8px 16px;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.submit-comment:disabled {
  background: #ccc;
}

/* 分享弹窗样式 */
.share-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.share-container {
  background: white;
  width: 400px;
  border-radius: 16px;
  padding: 20px;
}

.share-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.share-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.share-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 12px;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.share-option:hover {
  background-color: #f5f5f5;
}

.share-option .mdi {
  font-size: 24px;
  color: #4a90e2;
}

@media (max-width: 992px) {
  .main-content {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    display: none;
  }
}

.comments-section {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
}

.comments-list {
  margin-bottom: 16px;
}

.comment-item {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.comment-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-content {
  flex: 1;
}

.comment-user {
  font-weight: 500;
  font-size: 14px;
  color: #333;
  margin-bottom: 4px;
}

.comment-text {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.comment-time {
  font-size: 12px;
  color: #999;
  margin-top: 4px;
}

.comment-input-area {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.input-wrapper {
  flex: 1;
  display: flex;
  gap: 8px;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 8px 16px;
  align-items: center;
}

.input-wrapper input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
  padding: 4px 0;
}

.send-btn {
  background: #4a90e2;
  color: white;
  border: none;
  padding: 6px 16px;
  border-radius: 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.send-btn:hover:not(:disabled) {
  background: #357abd;
}

.send-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}

/* 修改评论按钮激活状态样式 */
.action-btn.active {
  color: #4a90e2;
  background: #f0f7ff;
}

/* 添加热门排行榜样式 */
.hot-ranking {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
}

.ranking-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  transition: all 0.3s;
}

.ranking-card:hover {
  background: #f8f9fa;
  transform: translateX(4px);
}

.ranking-number {
  font-size: 24px;
  font-weight: 700;
  color: #4a90e2;
  min-width: 40px;
  text-align: center;
}

.ranking-card:nth-child(1) .ranking-number {
  color: #f1c40f;
}

.ranking-card:nth-child(2) .ranking-number {
  color: #95a5a6;
}

.ranking-card:nth-child(3) .ranking-number {
  color: #d35400;
}

.ranking-content {
  flex: 1;
}

.ranking-user {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.ranking-user .user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.ranking-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.ranking-stats {
  display: flex;
  gap: 16px;
  color: #666;
  font-size: 14px;
}

.ranking-stats span {
  display: flex;
  align-items: center;
  gap: 4px;
}

.ranking-stats .mdi {
  font-size: 16px;
}
</style> 