<template>
  <div class="blindbox-result">
    <div class="result-content">
      <h2>盲盒交友结果</h2>
      <div class="user-profile">
        <div class="profile-header">
          <img :src="userProfile.avatar" alt="用户头像" class="avatar">
          <div class="basic-info">
            <h3>{{ userProfile.name }}, {{ userProfile.age }}岁 ({{ userProfile.gender }})</h3>
            <p>{{ userProfile.location }}</p>
          </div>
          <div class="rating">
            <span class="rating-text">{{ userProfile.rating.toFixed(1) }}</span>
            <div class="stars">
              <span v-for="i in 5" :key="i" :class="{'filled': i <= Math.round(userProfile.rating)}">★</span>
            </div>
          </div>
        </div>
        <div class="profile-details">
          <div class="detail-item">
            <h4><i class="mdi mdi-heart"></i> 爱好</h4>
            <p>{{ userProfile.hobbies.join(', ') }}</p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-airplane"></i> 旅行爱好</h4>
            <p>{{ userProfile.travelPreferences.join(', ') }}</p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-translate"></i> 语言</h4>
            <p>{{ userProfile.languages.join(', ') }}</p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-map-marker"></i> 旅行过的地方</h4>
            <p>{{ userProfile.traveledPlaces.join(', ') }}</p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-bag-personal"></i> 旅行风格</h4>
            <p>{{ userProfile.travelStyle }}</p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-account-details"></i> 个人简介</h4>
            <p>{{ userProfile.bio }}</p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-phone"></i> 联系方式</h4>
            <p v-for="(contact, index) in userProfile.contacts" :key="index">
              <i :class="contact.icon"></i> {{ contact.type }}: {{ contact.value }}
            </p>
          </div>
          <div class="detail-item">
            <h4><i class="mdi mdi-calendar-clock"></i> 最近旅行</h4>
            <p>{{ userProfile.recentTravel.join(' | ') }}</p>
          </div>
        </div>
        <div class="reviews">
          <h4><i class="mdi mdi-comment-text-multiple"></i> 驴友评价</h4>
          <div v-for="(review, index) in userProfile.reviews" :key="index" class="review-item">
            <p><strong>{{ review.name }}:</strong> {{ review.comment }}</p>
          </div>
        </div>
      </div>
      <button @click="$emit('close')" class="close-button">关闭</button>
    </div>
  </div>
</template>

<script>
import { userProfiles } from '../data/userProfiles';

export default {
  name: 'BlindboxResult',
  props: {
    blindboxData: {
      type: Object,
      required: true
    }
  },
  data() {
    // 随机选择一个用户资料
    const randomProfile = userProfiles[Math.floor(Math.random() * userProfiles.length)];
    return {
      userProfile: randomProfile
    }
  }
}
</script>

<style scoped>
.blindbox-result {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.result-content {
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  max-width: 800px;
  width: 95%;
  max-height: 70vh;
  overflow-y: auto;
}

h2 {
  color: #333;
  margin-bottom: 20px;
  text-align: center;
  font-size: 2em;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}

.user-profile {
  margin-bottom: 20px;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.basic-info {
  flex-grow: 1;
}

.basic-info h3 {
  margin: 0;
  color: #333;
  font-size: 1.5em;
}

.basic-info p {
  margin: 5px 0;
  color: #666;
  font-size: 1em;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.rating-text {
  font-size: 2em;
  font-weight: bold;
  color: #ffd700;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.stars {
  font-size: 1.2em;
  color: #ffd700;
}

.profile-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.detail-item {
  background-color: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.detail-item h4 {
  margin: 0 0 8px;
  color: #333;
  font-size: 1.1em;
  display: flex;
  align-items: center;
}

.detail-item h4 i {
  margin-right: 6px;
  color: #4a90e2;
}

.detail-item p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}

.reviews {
  margin-top: 20px;
}

.review-item {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.review-item p {
  margin: 0;
  font-size: 0.9em;
}

.close-button {
  background-color: #007AFF;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #0056b3;
}

/* 添加一些装饰性元素 */
.result-content::before,
.result-content::after {
  content: '✈';
  position: absolute;
  font-size: 2em;
  color: #4a90e2;
  opacity: 0.1;
}

.result-content::before {
  top: 10px;
  left: 10px;
  transform: rotate(-30deg);
}

.result-content::after {
  bottom: 10px;
  right: 10px;
  transform: rotate(30deg);
}
</style>
