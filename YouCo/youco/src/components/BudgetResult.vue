<template>
  <div class="budget-result-overlay">
    <div class="budget-result">
      <div class="header-actions">
        <button class="close-button-mini" @click="$emit('close')">
          <i class="mdi mdi-close"></i>
        </button>
      </div>

      <div class="result-header">
        <h2>{{ budgetData.destination }}旅行预算方案</h2>
        <div class="budget-overview">
          <div class="total-budget">
            <span class="label">总预算</span>
            <span class="amount">¥{{ budgetData.budget }}</span>
          </div>
        </div>
      </div>

      <div class="budget-details">
        <!-- 预算分配 -->
        <div class="allocation-section">
          <h3>预算分配</h3>
          <div class="allocation-items">
            <div v-for="(item, category) in plan.budgetAllocation" 
                 :key="category" 
                 class="allocation-item">
              <div class="category-header">
                <span class="category-name">{{ getCategoryName(category) }}</span>
                <span class="amount">¥{{ item.amount }}</span>
              </div>
              <div class="details">
                <p class="type">{{ item.type }}</p>
                <ul class="suggestions">
                  <li v-for="(detail, index) in item.details" 
                      :key="index">{{ detail }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 旅行方案推荐 -->
        <div class="destination-section">
          <h3>旅行方案推荐</h3>
          <div class="plan-details">
            <div class="plan-overview">
              <h4>推荐方案 - {{ plan.budgetLevel === 'free' ? '免费' : plan.budgetLevel === 'low' ? '经济' : plan.budgetLevel === 'medium' ? '舒适' : '豪华' }}型</h4>
              <p class="plan-description">{{ plan.destinationInfo.description }}</p>
            </div>
            
            <!-- 住宿推荐 -->
            <div class="accommodation-section">
              <h4>住宿推荐</h4>
              <div class="accommodation-list">
                <div v-for="(option, index) in plan.destinationInfo.accommodation.options" 
                     :key="index"
                     class="accommodation-item">
                  <div class="accommodation-header">
                    <h5>{{ option.name }}</h5>
                    <span class="price">{{ option.price }}</span>
                  </div>
                  <p class="type">{{ option.type }}</p>
                  <p class="location">位置：{{ option.location }}</p>
                  <div class="features">
                    <span v-for="(feature, idx) in option.features" 
                          :key="idx" 
                          class="feature-tag">
                      {{ feature }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="accommodation-tips">
                <h5>住宿提示</h5>
                <ul>
                  <li v-for="(tip, index) in plan.destinationInfo.accommodation.tips" 
                      :key="index">
                    {{ tip }}
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="core-attractions">
              <h4>核心景点行程</h4>
              <div class="attractions-list">
                <div v-for="(attraction, index) in plan.destinationInfo.attractions" 
                     :key="index"
                     class="attraction-item">
                  <h5>
                    {{ attraction.name }}
                    <span class="price">¥{{ attraction.price }}</span>
                  </h5>
                  <p>{{ attraction.description }}</p>
                  <p class="best-time">最佳游览时间：{{ attraction.bestTime }}</p>
                  <div class="attraction-tips">
                    <span v-for="(tip, idx) in attraction.tips" 
                          :key="idx" 
                          class="tip-tag">
                      {{ tip }}
                    </span>
                  </div>
                  <a :href="attraction.link" 
                     target="_blank" 
                     class="booking-link">
                    预订链接
                    <i class="mdi mdi-open-in-new"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="recommended-activities">
              <h4>特色体验</h4>
              <div class="activities-list">
                <div v-for="(activity, index) in plan.destinationInfo.activities" 
                     :key="index"
                     class="activity-item">
                  <h5>{{ activity.name }}</h5>
                  <p>{{ activity.description }}</p>
                  <p class="price-range">参考价格: {{ activity.priceRange }}</p>
                  <p class="duration">建议游玩时长：{{ activity.duration }}</p>
                  <p class="best-time">最佳体验时间：{{ activity.bestTime }}</p>
                  <div class="activity-tips">
                    <span v-for="(tip, idx) in activity.tips" 
                          :key="idx" 
                          class="tip-tag">
                      {{ tip }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="dining-recommendations">
              <h4>餐饮推荐</h4>
              <div class="dining-list">
                <div v-for="(dining, index) in plan.destinationInfo.dining" 
                     :key="index"
                     class="dining-item">
                  <h5>{{ dining.name }}</h5>
                  <p>{{ dining.description }}</p>
                  <p class="price-range">人均: {{ dining.averagePrice }}</p>
                  <p class="best-time">推荐用餐时间：{{ dining.bestTime }}</p>
                  <div class="recommendations">
                    <h6>推荐美食</h6>
                    <span v-for="(food, idx) in dining.recommendations" 
                          :key="idx" 
                          class="food-tag">
                      {{ food }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="travel-tips">
              <h4>实用贴士</h4>
              <ul>
                <li v-for="(tip, index) in plan.destinationInfo.tips" 
                    :key="index">{{ tip }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="action-buttons">
        <button class="save-button">保存方案</button>
        <button class="close-button" @click="$emit('close')">关闭</button>
      </div>
    </div>
  </div>
</template>

<script>
import { generatePlan } from '../data/travelPlans';

export default {
  name: 'BudgetResult',
  props: {
    budgetData: {
      type: Object,
      required: true
    }
  },
  computed: {
    plan() {
      return generatePlan(this.budgetData.destination, this.budgetData.budget);
    }
  },
  methods: {
    getCategoryName(category) {
      const names = {
        transportation: '交通',
        accommodation: '住宿',
        food: '餐饮',
        activities: '活动'
      };
      return names[category] || category;
    }
  }
}
</script>

<style scoped>
.budget-result-overlay {
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

.budget-result {
  background-color: white;
  border-radius: 12px;
  padding: 24px;
  width: 80%;
  max-width: 1200px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.header-actions {
  position: absolute;
  right: 16px;
  top: 16px;
}

.close-button-mini {
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.3s;
}


.close-button-mini:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.result-header {
  margin-bottom: 24px;
  text-align: center;
}

.budget-overview {
  margin-top: 12px;
}

.total-budget {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.total-budget .amount {
  font-size: 24px;
  font-weight: bold;
  color: #28a745;
}

.allocation-section {
  margin-bottom: 32px;
}

.allocation-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.allocation-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.category-name {
  font-weight: bold;
  color: #333;
}

.amount {
  color: #28a745;
  font-weight: bold;
}

.type {
  color: #666;
  margin-bottom: 8px;
}

.suggestions {
  list-style: none;
  padding-left: 0;
}

.suggestions li {
  color: #666;
  margin-bottom: 4px;
  font-size: 14px;
}

.destination-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
}

.plan-overview {
  margin-bottom: 24px;
}

.accommodation-section {
  margin: 24px 0;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
}

.accommodation-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.accommodation-item {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.feature-tag {
  background-color: #e9ecef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
}

.attractions-list, .activities-list, .dining-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 16px;
}

.attraction-item, .activity-item, .dining-item {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
  position: relative;
}

.best-time {
  color: #666;
  font-size: 14px;
  margin: 8px 0;
}

.tip-tag, .food-tag {
  display: inline-block;
  background-color: #e9ecef;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  color: #666;
  margin: 4px;
}

.booking-link {
  display: inline-flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  margin-top: 12px;
  font-size: 14px;
}

.booking-link i {
  margin-left: 4px;
}

.booking-link:hover {
  text-decoration: underline;
}

.recommendations {
  margin-top: 12px;
}

.recommendations h6 {
  margin-bottom: 8px;
  color: #333;
}

.travel-tips {
  margin-top: 24px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 16px;
}

.travel-tips ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.travel-tips li {
  color: #666;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.travel-tips li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #28a745;
}

.action-buttons {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.save-button, .close-button {
  flex: 1;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  transition: background-color 0.3s;
}

.save-button {
  background-color: #28a745;
  color: white;
}

.save-button:hover {
  background-color: #218838;
}

.close-button {
  background-color: #6c757d;
  color: white;
}

.close-button:hover {
  background-color: #5a6268;
}

@media (max-width: 768px) {
  .budget-result {
    width: 95%;
    padding: 16px;
  }

  .allocation-items, 
  .attractions-list, 
  .activities-list, 
  .dining-list,
  .accommodation-list {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>