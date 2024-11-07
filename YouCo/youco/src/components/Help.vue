<template>
    <div class="help-page">
      <div class="help-container">
        <h1>帮助中心</h1>
  
        <div class="help-section">
          <h2>常见问题</h2>
          
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="question" @click="faq.isOpen = !faq.isOpen">
              <span class="mdi mdi-help-circle"></span>
              {{ faq.question }}
              <span class="mdi" :class="faq.isOpen ? 'mdi-chevron-up' : 'mdi-chevron-down'"></span>
            </div>
            <div class="answer" v-show="faq.isOpen">
              {{ faq.answer }}
            </div>
          </div>
        </div>
  
        <div class="help-section">
          <h2>联系我们</h2>
          <div class="contact-info">
            <p><span class="mdi mdi-email"></span> 邮箱：support@youco.com</p>
            <p><span class="mdi mdi-phone"></span> 电话：400-123-4567</p>
            <p><span class="mdi mdi-clock"></span> 服务时间：周一至周日 9:00-18:00</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelpCenter',
    data() {
      return {
        faqs: [
          {
            question: '如何修改个人资料？',
            answer: '点击右上角头像 → 选择"设置" → 在"个人资料"标签页中修改相关信息。',
            isOpen: false
          },
          {
            question: '什么是盲盒交友？',
            answer: '盲盒交友是一项随机匹配同行伙伴的功能。您可以设置目的地、日期和预算，系统会为您匹配志同道合的旅伴。',
            isOpen: false
          },
          {
            question: '如何使用预算规划？',
            answer: '在首页选择"预算规划"，输入目的地和总预算，系统会为您生成合理的旅行花费方案。',
            isOpen: false
          },
          {
            question: '如何查看我的旅行足迹？',
            answer: '点击右上角头像 → 选择"个人主页" → 在页面中可以查看您的所有旅行记录。',
            isOpen: false
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .help-page {
    padding: 40px 20px;
    background-color: #f5f7fa;
    min-height: calc(100vh - 60px);
    margin-top: 60px;
  }
  
  .help-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }
  
  h1 {
    margin: 0 0 30px;
    font-size: 24px;
    color: #333;
    text-align: center;
  }
  
  .help-section {
    margin-bottom: 40px;
  }
  
  h2 {
    font-size: 20px;
    color: #4a90e2;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f0f0f0;
  }
  
  .faq-item {
    margin-bottom: 15px;
  }
  
  .question {
    display: flex;
    align-items: center;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .question:hover {
    background: #f0f0f0;
  }
  
  .question .mdi {
    margin-right: 10px;
    color: #4a90e2;
  }
  
  .question .mdi-chevron-down,
  .question .mdi-chevron-up {
    margin-left: auto;
    margin-right: 0;
  }
  
  .answer {
    padding: 15px;
    color: #666;
    line-height: 1.6;
    border-left: 3px solid #4a90e2;
    margin: 10px 0 10px 20px;
    background: #f8f9fa;
  }
  
  .contact-info {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
  }
  
  .contact-info p {
    margin: 10px 0;
    color: #666;
    display: flex;
    align-items: center;
  }
  
  .contact-info .mdi {
    margin-right: 10px;
    color: #4a90e2;
  }
  
  @media (max-width: 768px) {
    .help-page {
      padding: 20px 10px;
    }
  
    .help-container {
      padding: 20px;
    }
  }
  </style>