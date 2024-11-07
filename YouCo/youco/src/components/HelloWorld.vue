<template>
  <div class="youco-home">
    <div class="carousel">
      <div class="content" v-for="(card, index) in cards" :key="index" :class="{ active: currentCard === index }">
        <h1 class="title">即将开始的活动</h1>
        <div class="event-info">
          <h2>{{ card.event }}</h2>
          <p>{{ card.date }}</p>
        </div>
      </div>
      <div class="carousel-buttons">
        <button v-for="(card, index) in cards" :key="index" @click="currentCard = index" :class="{ active: currentCard === index }"></button>
      </div>
    </div>

    <!-- 修改旅行灵感部分 -->
    <div class="travel-inspiration" ref="travelInspiration">
      <h2>旅行灵感</h2>
      <div class="inspiration-carousel">
        <div class="inspiration-cards" :style="{ transform: `translateX(-${currentInspirationIndex * 100}%)` }">
          <div class="inspiration-pair" v-for="(pair, index) in inspirationPairs" :key="index">
            <div class="inspiration-card" v-for="inspiration in pair" :key="inspiration.title">
              <img :src="inspiration.image" :alt="inspiration.title">
              <div class="card-content">
                <h3>{{ inspiration.title }}</h3>
                <p>{{ inspiration.description }}</p>
                <a href="#" class="read-more" @click.prevent="showDetails(inspiration)">探索更多</a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 添加轮播控制按钮 -->
        <div class="carousel-controls">
          <button class="prev" @click="prevInspiration" :disabled="currentInspirationIndex === 0">
            <span class="mdi mdi-chevron-left"></span>
          </button>
          <div class="carousel-dots">
            <button v-for="(_, index) in inspirationPairs" 
                    :key="index"
                    :class="{ active: currentInspirationIndex === index }"
                    @click="currentInspirationIndex = index">
            </button>
          </div>
          <button class="next" @click="nextInspiration" :disabled="currentInspirationIndex === inspirationPairs.length - 1">
            <span class="mdi mdi-chevron-right"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- 修改旅行小贴士部分的结构 -->
    <div class="travel-tips-section">
      <h2>旅行小贴士</h2>
      <div class="travel-tips">
        <ul>
          <li>记得购买旅行保险，以应对突发情况。</li>
          <li>提前了解目的地的文化习俗，尊重当地传统。</li>
          <li>准备便携式充电器，保持设备电量充足。</li>
          <li>使用我们的App，随时与新朋友保持联系。</li>
          <li>尝试当地特色美食，但注意饮食卫生。</li>
          <li>保持开放心态，拥抱新的文化和体验。</li>
        </ul>
      </div>
    </div>
    <!-- 新增：模态框组件 -->
    <div class="modal" v-if="selectedInspiration" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>
        <img :src="selectedInspiration.image" :alt="selectedInspiration.title">
        <h2>{{ selectedInspiration.title }}</h2>
        <p>{{ selectedInspiration.fullDescription }}</p>
        <div class="additional-info" v-if="selectedInspiration.additionalInfo">
          <h3>推荐行程</h3>
          <ul>
            <li v-for="(info, index) in selectedInspiration.additionalInfo" :key="index">
              {{ info }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YouCoHome',
  data() {
    return {
      currentCard: 0,
      selectedInspiration: null,
      cards: [
        {
          event: '徒步长城',
          date: 'Oct 31, 2024',
          image: '@/assets/great_wall.png'
        },
        {
          event: '越秀繁华',
          date: 'Dec 15, 2024',
          image: '@/assets/guangzhou.jpg'
        },
        {
          event: '蓉城艺境',
          date: 'Jan 20, 2025',
          image: '@/assets/chengdu.jpg'
        },
        {
          event: '大唐风韵',
          date: 'Mar 5, 2025',
          image: '@/assets/xian.jpg'
        }
      ],
      currentInspirationIndex: 0,
      inspirations: [
        {
          title: '原始雨林探索',
          description: '探索亚马逊热带雨林，感受地球之肺的神秘魅力。漫步在参天古木下，聆听大自然的原始呼唤。',
          fullDescription: '亚马逊雨林是世界上最大的热带雨林，拥有数百万种动植物物种。在这里，您可以体验独特的生态系统，观察珍稀野生动物，了解原住民文化。我们精心设计的探索之旅将带您深入雨林腹地，体验夜间丛林探险，乘坐独木舟穿越河道，参观本地社区，学习雨林生存技能。',
          additionalInfo: [
            '推荐游览时间：4-7天',
            '最佳旅行季节：6-9月（旱季）',
            '必备装备：防水装备、防蚊虫用品',
            '特色体验：丛林徒步、野生动物观察、原住民文化体验',
            '住宿选择：生态度假村、丛林营地'
          ],
          image: require('../assets/forest.jpg')
        },
        {
          title: '阿拉斯加冰川',
          description: '探访北美最壮观的冰川群，体验极地风光。乘坐破冰船近距离观赏千年冰川，感受大自然的鬼斧神工。',
          fullDescription: '阿拉斯加的冰川是大自然最壮观的杰作之一。这里有北美最大的冰川群，绵延数百公里。您将有机会乘坐专业破冰船，近距离观察巍峨的冰川绝壁，聆听冰川破裂的轰鸣声，还可能看到冰川崩塌的震撼场面。冬季还有机会观赏到绚丽的北极光。',
          additionalInfo: [
            '推荐游览时间：5-10天',
            '最佳旅行季节：5-9月',
            '必备装备：保暖衣物、防水外套、专业相机',
            '特色体验：冰川徒步、破冰船巡游、极光观赏',
            '住宿选择：度假酒店、特色木屋'
          ],
          image: require('../assets/glacer.jpg')
        },
        {
          title: '托斯卡纳乡村',
          description: '漫步意大利托斯卡纳乡间，感受欧洲最美田园风光。葡萄园、橄榄树和古老农庄，演绎着完美田园生活。',
          fullDescription: '托斯卡纳是意大利最迷人的地区之一，这里有连绵起伏的丘陵、古老的葡萄园和橄榄树林。您可以参观中世纪古堡，品尝当地著名的基安蒂葡萄酒，学习意大利传统烹饪，感受真正的托斯卡纳乡村生活。每个小镇都有自己独特的魅力和历史故事。',
          additionalInfo: [
            '推荐游览时间：7-14天',
            '最佳旅行季节：4-10月',
            '特色体验：葡萄酒品鉴、烹饪课程、古堡参观',
            '美食推荐：手工意面、托斯卡纳牛排、当地橄榄油',
            '住宿选择：乡村农庄、精品酒店、古堡改建酒店'
          ],
          image: require('../assets/bruno.jpg')
        },
        {
          title: '迈阿密海滨',
          description: '体验美国最热情的海滨城市，感受迈阿密独特的拉丁文化。阳光、沙滩、艺术区，演绎着缤纷都市生活。',
          fullDescription: '迈阿密是美国最具活力的城市之一，这里完美融合了现代都市气息和拉丁美洲风情。南海滩区域的艺术装饰建筑群是世界最大的艺术装饰建筑群。温暖的气候、绵长的海滩、丰富的夜生活，以及充满活力的文化艺术区，让这里成为度假的理想之选。',
          additionalInfo: [
            '推荐游览时间：4-7天',
            '最佳旅行季节：11-4月',
            '必游景点：南海滩、小哈瓦那、温伍德墙艺术区',
            '特色体验：海滩派对、古巴美食、艺术画廊巡礼',
            '住宿选择：海滨度假酒店、精品设计酒店'
          ],
          image: require('../assets/miami.jpg')
        },
        {
          title: '益阳古城',
          description: '探访湖南千年古城，感受浓郁的湘楚文化。古街、老巷、茶馆，诉说着悠久的历史故事。',
          fullDescription: '益阳古城拥有两千多年的历史文化积淀，是湖南省重要的历史文化名城。这里保存着大量明清时期的古建筑，街巷布局保持着古城原貌。您可以漫步在青石板铺就的古街上，品尝地道的益阳美食，感受独特的茶文化，探寻古城的历史印记。',
          additionalInfo: [
            '推荐游览时间：2-3天',
            '最佳旅行季节：3-5月、9-11月',
            '必游景点：益阳古城墙、清代古街区、梓山湖',
            '特色体验：茶文化体验、湘菜品鉴、古建筑探访',
            '住宿选择：精品民宿、特色客栈'
          ],
          image: require('../assets/yiyang.jpg')
        },
        {
          title: '马尔代夫度假',
          description: '入住印度洋上的奢华水上别墅，体验世界顶级的海岛度假。水清沙白、椰林摇曳，尽享热带天堂。',
          fullDescription: '马尔代夫是世界上最著名的海岛度假胜地之一，这里有着纯净的碧海蓝天、洁白的沙滩和丰富的海洋生态。每个岛屿都是一个独立的度假村，提供私密而奢华的度假体验。您可以住在水上别墅里，随时跳入清澈的海水中，探索绚丽的珊瑚礁，与热带鱼群共舞。',
          additionalInfo: [
            '推荐游览时间：5-7天',
            '最佳旅行季节：12-4月',
            '特色体验：浮潜、深潜、SPA、日落巡游',
            '必备物品：防晒用品、水下相机、泳装',
            '住宿选择：水上别墅、沙滩别墅、豪华度假村'
          ],
          image: require('../assets/staples_center.jpg')
        }
      ]
    }
  },
  mounted() {
    // 添加滚动监听
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // 移除滚动监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    inspirationPairs() {
      const pairs = [];
      for (let i = 0; i < this.inspirations.length; i += 2) {
        pairs.push(this.inspirations.slice(i, i + 2));
      }
      return pairs;
    }
  },
  methods: {
    showDetails(inspiration) {
      this.selectedInspiration = inspiration;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    closeModal() {
      this.selectedInspiration = null;
      document.body.style.overflow = ''; // 恢复背景滚动
    },
    prevInspiration() {
      if (this.currentInspirationIndex > 0) {
        this.currentInspirationIndex--;
      }
    },
    nextInspiration() {
      if (this.currentInspirationIndex < this.inspirationPairs.length - 1) {
        this.currentInspirationIndex++;
      }
    },
    handleScroll() {
      const inspirationElement = this.$refs.travelInspiration;
      if (inspirationElement) {
        const rect = inspirationElement.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        
        // 通过事件通知父组件更新导航状态
        if (isInView) {
          this.$emit('update-nav', 'destination');
        }
      }
    }
  }
}
</script>

<style scoped>
.youco-home {
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin: 0;
  background-color: transparent;
}

.carousel {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  overflow: hidden;
  border-radius: 16px;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
  overflow: hidden;
}

.content.active {
  opacity: 1;
}

.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
}

.content:nth-child(1)::before {
  background-image: url('@/assets/great_wall.png');
}

.content:nth-child(2)::before {
  background-image: url('@/assets/guangzhou.jpg');
}

.content:nth-child(3)::before {
  background-image: url('@/assets/chengdu.jpg');
}

.content:nth-child(4)::before {
  background-image: url('@/assets/xian.jpg');
}

.title, .event-info h2, .event-info p {
  color: #ffffff;
  font-weight: bold;
  margin: 0;
  padding: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.title {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2em;
}

.event-info {
  position: absolute;
  bottom: 20px;
  left: 20px;
}

.event-info h2 {
  font-size: 2em;
  margin-bottom: 5px;
}

.event-info p {
  font-size: 1.5em;
}

.carousel-buttons {
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  z-index: 10;
}

.carousel-buttons button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-buttons button.active {
  background-color: #ffffff;
}

/* 修改旅行灵感样式 */
.travel-inspiration {
  padding: 20px 0;
  background-color: transparent;
  width: 100%;
}

.travel-inspiration h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  padding: 0 0px;
}

.inspiration-carousel {
  position: relative;
  overflow: hidden;
  padding: 0 0px;
}

.inspiration-cards {
  display: flex;
  transition: transform 0.5s ease;
}

.inspiration-pair {
  display: flex;
  gap: 16px;
  flex: 0 0 100%;
}

.inspiration-card {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.inspiration-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.read-more {
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-size: 14px;
}

@media (max-width: 768px) {
  .inspiration-card {
    width: 100%;
  }
}

/* 修改旅行小贴士样式 */
.travel-tips-section {
  padding: 0; /* 移除顶部内边距 */
  width: 100%;
  margin-top: -40px; /* 添加负的上外边距来上移整个部分 */
}

.travel-tips-section h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 16px; /* 稍微减少标题下方的间距 */
  padding: 0 0px;
}

.travel-tips {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 16px; /* 稍微减少内边距 */
  margin: 0 0px; /* 添加左右外边距以保持与其他部分的对齐 */
}

.travel-tips ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.travel-tips li {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
}

.travel-tips li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #007bff;
}

@media (max-width: 768px) {
  .travel-tips-section {
    margin-top: -10px; /* 在移动设备上稍微减少上移的距离 */
  }
  .travel-tips {
    padding: 12px; /* 在移动设备上进一步减少内边距 */
    margin: 0 12px; /* 在移动设备上调整左右外边距 */
  }
}

/* 添加页脚样式 */
.footer {
  background-color: #333;
  color: #fff;
  padding: 40px 0 20px;
  margin-top: 40px;
  width: 100%;
  box-sizing: border-box;
  /* 移除之前的定位样式 */
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px; /* 保持左右内边距 */
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin-bottom: 20px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 15px;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 8px;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-icon {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-color: #555;
  color: #fff;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  text-decoration: none;
}

.subscribe-form {
  display: flex;
  margin-top: 10px;
}

.subscribe-form input {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
}

.subscribe-form button {
  padding: 8px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #555;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    padding: 0 15px; /* 在移动设备上调整内边距 */
  }
  
  .footer-section {
    margin-bottom: 30px;
  }
}

.carousel-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
}

.carousel-controls button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #4a90e2;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.carousel-controls button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.carousel-controls button:not(:disabled):hover {
  background-color: rgba(74, 144, 226, 0.1);
}

.carousel-dots {
  display: flex;
  gap: 8px;
}

.carousel-dots button {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ccc;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.carousel-dots button.active {
  background-color: #4a90e2;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 5px;
  color: #333;
}

.modal-content img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.modal-content h2 {
  color: #333;
  margin-bottom: 15px;
}

.modal-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.additional-info {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.additional-info h3 {
  color: #333;
  margin-bottom: 15px;
}

.additional-info ul {
  list-style-type: none;
  padding: 0;
}

.additional-info li {
  color: #666;
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.additional-info li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #007bff;
}

@media (max-width: 768px) {
  .modal-content {
    padding: 20px;
    width: 95%;
  }
  
  .modal-content img {
    height: 200px;
  }
}
</style>
