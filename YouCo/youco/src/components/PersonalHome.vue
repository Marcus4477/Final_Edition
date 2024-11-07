<template>
    <div class="personal-home">
      <!-- 个人信息头部 -->
      <div class="profile-header">
        <div class="profile-cover"></div>
        <div class="profile-info">
          <div class="avatar">
            <img :src="userData.userInfo.avatar" :alt="userData.userInfo.username">
          </div>
          <div class="user-details">
            <h1>{{ userData.userInfo.username }}</h1>
            <p class="location">
              <span class="mdi mdi-map-marker"></span>
              {{ userData.userInfo.location }}
            </p>
            <p class="join-date">加入于 {{ userData.userInfo.joinDate }}</p>
          </div>
          <div class="level-badge">
            <span class="mdi mdi-star"></span>
            Level {{ userData.userInfo.level }}
          </div>
        </div>
      </div>
  
      <!-- 统计数据 -->
      <div class="stats-container">
        <div class="stat-item" v-for="(value, key) in userData.stats" :key="key">
          <div class="stat-value">{{ value }}</div>
          <div class="stat-label">{{ getStatLabel(key) }}</div>
        </div>
      </div>
  
      <!-- 成就展示 -->
      <div class="achievements-section">
        <h2>我的成就</h2>
        <div class="achievements-grid">
          <div 
            v-for="achievement in userData.achievements" 
            :key="achievement.id"
            class="achievement-card"
          >
            <span class="mdi" :class="achievement.icon"></span>
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
          </div>
        </div>
      </div>
  
      <!-- 旅行记录 -->
      <div class="travel-history">
        <h2>旅行足迹</h2>
        <div class="travel-grid">
          <div 
            v-for="trip in userData.travelHistory" 
            :key="trip.id"
            class="trip-card"
          >
            <h3>{{ trip.destination }}</h3>
            <p class="trip-date">{{ formatDate(trip.date) }}</p>
            <div class="trip-stats">
              <span><span class="mdi mdi-camera"></span> {{ trip.photos }}</span>
              <span><span class="mdi mdi-star"></span> {{ trip.rating }}</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 收藏的目的地 -->
      <div class="saved-destinations">
        <h2>收藏的目的地</h2>
        <div class="destinations-grid">
          <div 
            v-for="destination in userData.savedDestinations" 
            :key="destination.id"
            class="destination-card"
            :style="{ backgroundImage: `url(${destination.imageUrl})` }"
          >
            <div class="destination-info">
              <h3>{{ destination.name }}</h3>
              <p>{{ destination.type }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { personalHomeData } from '../data/PersonalHome'
  
  export default {
    name: 'PersonalHome',
    data() {
      return {
        userData: personalHomeData
      }
    },
    methods: {
      getStatLabel(key) {
        const labels = {
          followers: '关注者',
          following: '关注中',
          posts: '发布',
          likes: '获赞'
        }
        return labels[key]
      },
      formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .personal-home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    margin-top: 60px;
  }
  
  .profile-header {
    position: relative;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }
  
  .profile-cover {
    height: 200px;
    background: linear-gradient(135deg, #4a90e2, #87ceeb);
  }
  
  .profile-info {
    display: flex;
    align-items: flex-end;
    padding: 20px;
    margin-top: -60px;
  }
  
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 4px solid white;
    overflow: hidden;
    margin-right: 20px;
  }
  
  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .user-details {
    flex: 1;
  }
  
  .user-details h1 {
    margin: 0;
    color: #333;
    font-size: 24px;
  }
  
  .location {
    color: #666;
    margin: 5px 0;
  }
  
  .join-date {
    color: #999;
    font-size: 14px;
  }
  
  .level-badge {
    background: #4a90e2;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: bold;
  }
  
  .stats-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 20px 0;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: bold;
    color: #4a90e2;
  }
  
  .stat-label {
    color: #666;
    margin-top: 5px;
  }
  
  .achievements-section,
  .travel-history,
  .saved-destinations {
    background: white;
    padding: 20px;
    border-radius: 12px;
    margin: 20px 0;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }
  
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .achievement-card {
    padding: 20px;
    border-radius: 8px;
    background: #f8f9fa;
    text-align: center;
  }
  
  .achievement-card .mdi {
    font-size: 32px;
    color: #4a90e2;
  }
  
  .travel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .trip-card {
    padding: 15px;
    border-radius: 8px;
    background: #f8f9fa;
  }
  
  .trip-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    color: #666;
  }
  
  .destinations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }
  
  .destination-card {
    height: 200px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
  }
  
  .destination-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    color: white;
  }
  
  .destination-info h3 {
    margin: 0;
  }
  
  @media (max-width: 768px) {
    .profile-info {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
  
    .stats-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  </style>