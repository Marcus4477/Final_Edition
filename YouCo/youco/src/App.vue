<template>
  <div id="app" @click="closeAllDropdowns">
    <nav class="navbar">
      <div class="navbar-content">
        <div class="logo" @click="goHome" style="cursor: pointer">
          <span class="artistic-text">YouCo</span>
        </div>
        <ul class="nav-links">
          <li><a href="#" class="nav-link" :class="{ active: activeNav === 'discover' }" @click.prevent="setActiveNav('discover')">发现</a></li>
          <li><a href="#" class="nav-link" :class="{ active: activeNav === 'destination' }" @click.prevent="setActiveNav('destination')">目的地</a></li>
          <li><a href="#" class="nav-link" :class="{ active: activeNav === 'community' }" @click.prevent="setActiveNav('community')">社区</a></li>
          <li>
            <a href="#" 
               @click.prevent="setActiveNav('activity')" 
               class="nav-link"
               :class="{ active: activeNav === 'activity' }">
              活动
            </a>
          </li>
        </ul>
        <div class="right-section">
          <div class="user-actions">
            <div class="message-menu">
              <a href="#" class="icon-link" @click.stop="toggleMessageBox">
                <span class="mdi mdi-bell-outline"></span>
              </a>

              <div v-if="showMessageBox" class="message-dropdown">
                <div class="message-header">
                  <span>通知</span>
                  <span>私信</span>
                </div>
                <div class="message-content">
                  暂没有新消息
                </div>
                <div class="message-footer">
                  <a href="#">查看全部</a>
                </div>
              </div>
            </div>
            <div class="user-menu">
              <a href="#" class="icon-link" @click.stop="toggleUserMenu">
                <span class="mdi mdi-account-circle-outline"></span>
              </a>
              <div v-if="showUserMenu" class="user-dropdown">
                <router-link 
                  to="/personal-home" 
                  class="dropdown-item"
                  @click.native="handlePersonalHomeClick"
                >
                  <span class="mdi mdi-account"></span>个人主页
                </router-link>

                <router-link 
                  to="/settings" 
                  class="dropdown-item"
                  @click.native="handleSettingsClick"
                >
                  <span class="mdi mdi-cog"></span>设置
                </router-link>
                
                <router-link 
                  to="/help" 
                  class="dropdown-item"
                  @click.native="handleHelpCenterClick"
                >
                  <span class="mdi mdi-help-circle"></span>帮助中心
                </router-link>

                <a 
                  href="#" 
                  class="dropdown-item"
                  @click.prevent="handleLogoutClick"
                >
                  <span class="mdi mdi-logout"></span>退出
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  
    <router-view></router-view>

    <template v-if="!['PersonalHome', 'UserSettings','HelpCenter','Login'].includes($route.name)">
      <div class="search-section" ref="searchSection" v-if="activeNav !== 'community'">
        <h1>
          <span v-for="(word, index) in title" :key="index" class="word">
            <span v-for="(char, charIndex) in word" :key="`${index}-${charIndex}`" 
                  :style="{ animationDelay: `${(index * word.length + charIndex) * 50}ms` }"
                  :class="{ 'animate': animateTitle }">
              {{ char }}
            </span>
          </span>
        </h1>
        <div class="search-options">
          <button 
            v-for="option in searchOptions" 
            :key="option.value"
            :class="['search-option', { active: activeOption === option.value }]"
            @click="setActiveOption(option.value)"
          >
            <span class="mdi" :class="option.icon"></span>
            {{ option.label }}
          </button>
        </div>
        
        <!-- 添加盲盒交友输入框 -->
        <div v-if="showBlindboxInput" class="blindbox-input">
          <div class="input-group">
            <span class="mdi mdi-map-marker-outline"></span>
            <input type="text" placeholder="目的地" v-model="blindboxData.destination">
          </div>
          <div class="input-group">
            <span class="mdi mdi-calendar-outline"></span>
            <input type="date" v-model="blindboxData.date">
          </div>
          <div class="input-group">
            <span class="mdi mdi-currency-usd"></span>
            <input type="number" placeholder="预算" v-model="blindboxData.budget">
          </div>
          <button @click="openBlindbox" class="blindbox-button">开启盲盒</button>
        </div>
        
        <!-- 在 template 中添加预算规划输入框 -->
        <div v-if="showBudgetInput" class="budget-input">
          <div class="input-group">
            <span class="mdi mdi-map-marker-outline"></span>
            <input type="text" placeholder="目的地" v-model="budgetData.destination">
          </div>
          
          <div class="input-group">
            <span class="mdi mdi-currency-usd"></span>
            <input type="number" placeholder="总预算" v-model="budgetData.budget">
          </div>
          <button @click="calculateBudget" class="budget-button">生成方案</button>
        </div>
      </div>
      
      
       <div class="main-content" ref="carouselSection">
        <HelloWorld v-if="activeNav !== 'community'" @update-nav="updateNavigation" />
        <CommunityPage v-if="activeNav === 'community'" />
      </div> 
      
      <!-- 添加匹配动画组件（放在结果组件之前） -->
      <transition name="fade">
        <MatchingAnimation 
          v-if="showMatchingAnimation" 
          @matchComplete="showMatchResult"
        />
      </transition>
      
      <!-- 添加盲盒结果组件 -->
      <transition name="fade">
        <BlindboxResult 
          v-if="showBlindboxResult" 
          :blindboxData="blindboxData"
          @close="showBlindboxResult = false"
        />
      </transition>
      
      <!-- 添加预算结果组件 -->
      <BudgetResult 
        v-if="showBudgetResult" 
        :budgetData="budgetData"
        @close="showBudgetResult = false"
      />
    </template>
    <!-- 在最底部添加页脚组件 -->
    <SiteFooter v-if="!['PersonalHome', 'UserSettings','HelpCenter','Login'].includes($route.name)" />

    <div class="modal-overlay" v-if="showLoginModal">
    <div class="login-modal">
      <h2>用户登录</h2>
      <div class="form-group">
        <label>用户名</label>
        <input type="text" v-model="loginForm.username" class="form-input">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="password" v-model="loginForm.password" class="form-input">
      </div>
      <div class="form-actions">
        <button @click="handleLogin" class="login-btn">登录</button>
        <button @click="showLoginModal = false" class="cancel-btn">取消</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' 
import BlindboxResult from './components/BlindboxResult.vue'
import BudgetResult from './components/BudgetResult.vue'
import MatchingAnimation from './components/MatchingAnimation.vue'
import SiteFooter from './components/SiteFooter.vue'
import CommunityPage from './components/Community.vue' 
import '@mdi/font/css/materialdesignicons.css' 

export default {
  name: 'App',
  components: {
     HelloWorld, 
    BlindboxResult,
    BudgetResult,
    MatchingAnimation,
    SiteFooter,
    CommunityPage, 
  },
  data() {
    return {
      showMessageBox: false,
      showUserMenu: false,
      showLoginModal: false,
      searchOptions: [
        { value: 'blindbox', label: '盲盒交友', icon: 'mdi-gift' },
        { value: 'budget', label: '预算规划', icon: 'mdi-cash-multiple' },
        { 
          value: 'hotel', 
          label: '酒店', 
          icon: 'mdi-bed',
          url: 'https://hotels.ctrip.com/'  // 携程酒店链接
        },
        { 
          value: 'flight', 
          label: '航班', 
          icon: 'mdi-airplane',
          url: 'https://www.umetrip.com/webStatic/main/index.html'  // 航旅纵横链接
        }
      ],
      activeOption: 'blindbox',
      titles: [
        ["Where", "to", "go?"],
        ["go", "with", "Who?"]
      ],
      currentTitleIndex: 0,
      title: ["Where", "to", "go?"],
      animateTitle: true,
      showBlindboxInput: false,
      blindboxData: {
        destination: '',
        date: '',
        budget: ''
      },
      showBlindboxResult: false,
      showBudgetInput: false,
      showBudgetResult: false,
      budgetData: {
        destination: '',
        budget: ''
      },
      showMatchingAnimation: false,
      isActivityActive: false,
      activeNav: 'discover',

      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 修改退出处理方法
    handleLogoutClick() {
      this.$router.push('/login');
    },
    // 添加登录处理方法
    handleLogin() {
      // 这里简单处理，不验证输入
      this.showLoginModal = false;
      this.$router.push('/youco-home');
    },
    goHome() {
      // 如果不在主页，则跳转到主页
      if (this.$route.path !== '/discover') {
        this.$router.push('/discover')
      }
      // 重置导航状态
      this.activeNav = 'discover'
      // 滚动到页面顶部
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    toggleMessageBox(event) {
      this.showMessageBox = !this.showMessageBox
      this.showUserMenu = false // 闭用户菜
      event.stopPropagation() // 阻止事件冒泡
    },
    toggleUserMenu(event) {
      this.showUserMenu = !this.showUserMenu
      this.showMessageBox = false // 关闭消息框
      event.stopPropagation() // 阻止事件冒泡
    },
    closeAllDropdowns() {
      this.showMessageBox = false
      this.showUserMenu = false
    },
    setActiveOption(option) {
      const selectedOption = this.searchOptions.find(opt => opt.value === option);
      
      if (selectedOption.url) {
        window.open(selectedOption.url, '_blank');
        return;
      }
      
      if (this.activeOption === option) {
        if (option === 'blindbox') {
          this.showBlindboxInput = !this.showBlindboxInput;
          this.showBudgetInput = false;
        } else if (option === 'budget') {
          this.showBudgetInput = !this.showBudgetInput;
          this.showBlindboxInput = false;
        }
      } else {
        this.activeOption = option;
        this.showBlindboxInput = option === 'blindbox';
        this.showBudgetInput = option === 'budget';
      }
    },
    setActiveNav(nav) {
      this.activeNav = nav;
      
      if (nav === 'activity') {
        const carouselSection = this.$refs.carouselSection;
        const carouselPosition = carouselSection.getBoundingClientRect().top;
        const navbarHeight = 60;
        const scrollTo = carouselPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: scrollTo,
          behavior: 'smooth'
        });
      } else if (nav === 'discover') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else if (nav === 'destination') {
        const inspirationSection = document.querySelector('.travel-inspiration');
        if (inspirationSection) {
          const position = inspirationSection.getBoundingClientRect().top;
          const navbarHeight = 60;
          const scrollTo = position + window.pageYOffset - navbarHeight;
          
          window.scrollTo({
            top: scrollTo,
            behavior: 'smooth'
          });
        }
      }
    },
    resetAnimation() {
      this.animateTitle = false;
      setTimeout(() => {
        this.currentTitleIndex = (this.currentTitleIndex + 1) % this.titles.length;
        this.title = this.titles[this.currentTitleIndex];
        this.animateTitle = true;
      }, 50);
    },
    openBlindbox() {
      if (!this.blindboxData.destination || !this.blindboxData.date || !this.blindboxData.budget) {
        alert('请填写完整的盲盒交友信息！');
        return;
      }
      
      // 显示匹配动画
      this.showMatchingAnimation = true;
      this.showBlindboxResult = false; // 确保结果组件是隐藏的
    },
    validateBudgetInput() {
      const { destination,budget } = this.budgetData;
      
      if (!destination.trim()) {
        alert('请输入目的地');
        return false;
      }
      
      
      if (!budget || budget <= 0) {
        alert('请输入有效的预算金额');
        return false;
      }
      
      // 转换为数字类型
      this.budgetData.budget = Number(budget);
      
      return true;
    },
    calculateBudget() {
      if (!this.validateBudgetInput()) {
        return;
      }
      
      // 如果验证通过，显示结果界面
      this.showBudgetResult = true;
    },
    showMatchResult() {
      // 匹配动画完成后显示结果
      setTimeout(() => {
        this.showMatchingAnimation = false;
        this.showBlindboxResult = true;
      }, 100); // 添加短暂延迟使过渡更流畅
    }
  },
  mounted() {
    this.animationInterval = setInterval(() => {
      this.resetAnimation();
    }, 3000); // 每3秒重置一次动画
  },
  beforeDestroy() {
    clearInterval(this.animationInterval);
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(to right, #ffd1dc, #ffecd2); /* 添加渐变背景 */
  min-height: 100vh; /* 确保背景覆盖整个视口高度 */
}

#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  width: 100%;
  height: 60px;
  position: fixed; /* 添加固定定位 */
  top: 0; /* 固定在顶部 */
  left: 0;
  z-index: 1000; /* 确保导航栏在其他元素上方 */
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  height: 100%; /* 使内容占满导栏高度 */
}

.logo .artistic-text {
  font-size: 28px; /* 恢复原来的字大小 */
  font-weight: 900;
  color: #4a90e2;
  text-transform: uppercase;
  letter-spacing: 2px; /* 恢复原来的字母间距 */
  text-shadow: 
    2px 2px 0 #fff,
    4px 4px 0 rgba(74,144,226,0.3);
  -webkit-text-stroke: 1px #3a7bc8;
  paint-order: stroke fill;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;
  flex-grow: 1;
  height: 100%; /* 使导航链接占满导航栏高度 */
}

.nav-links li {
  margin: 0;
  height: 100%; /* 使列表项占满导航栏高度 */
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 15px;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #4a90e2;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.nav-link.active {
  background-color: #4a90e2;
  color: white;
}

.nav-link.active::after {
  transform: scaleX(0);
}

.nav-link:hover:not(.active) {
  color: #4a90e2;
}

.nav-link:hover:not(.active)::after {
  transform: scaleX(1);
}

.right-section {
  display: flex;
  align-items: center;
  flex-shrink: 0; /* 防止右侧部分被压缩 */
}

.search-bar {
  margin-right: 20px; /* 恢复原来的间距 */
}

.user-actions {
  display: flex;
  align-items: center;
}

.icon-link {
  margin-left: 20px; /* 恢复原来的间距 */
  color: #666;
  text-decoration: none;
}

.mdi {
  font-size: 24px; /* 恢复原来的图标大小 */
}

.message-menu {
  position: relative;
}

.message-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 300px;
  z-index: 1000;
}

.message-header {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.message-content {
  padding: 20px;
  text-align: center;
  color: #666;
}

.message-footer {
  padding: 10px;
  text-align: center;
  border-top: 1px solid #eee;
}

.message-footer a {
  color: #4a90e2;
  text-decoration: none;
}

.user-menu {
  position: relative;
}

.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  width: 150px;
  z-index: 1000;
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
}

.dropdown-item .mdi {
  margin-right: 10px;
  font-size: 18px;
}

.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  color: #666;
  text-decoration: none;
  transition: background-color 0.3s;
}

.icon-link:hover {
  background-color: #e0e0e0;
}

.mdi {
  font-size: 24px;
}

/* 修改 YouCoHome 组件的样式以适应新背景 */
.youco-home {
  background-color: rgba(255, 255, 255, 0.8); /* 半透明白色背景 */
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
}

/* 可能需要调整一些文字颜色以提高可读性 */
.youco-home h1,
.youco-home h2 {
  color: #333;
}

.youco-home p {
  color: #555;
}

/* 调整按钮样式以匹配新的配方案 */
.cta button {
  background-color: #ff9f7f; /* 更改为与背景相配的颜色 */
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta button:hover {
  background-color: #ff8c66;
}

/* 保持其他样式不变 */

/* 新增搜索栏样式 */
.search-section {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
  margin-top: 80px; /* 60px导航栏高度 + 20px额外间距 */
}

.search-section h1 {
  font-size: 5.1em; /* 增大字体大小 */
  margin-bottom: 30px;
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #333;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
  max-width: 800px; /* 控制最大宽度 */
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 2px; /* 增加字间距 */
}

.search-section h1 .word {
  display: inline-block;
  margin-right: 0.4em; /* 增加单词之间的间距 */
}

.search-section h1 .word:last-child {
  margin-right: 0;
}

.search-section h1 span span {
  display: inline-block;
  opacity: 0;
  transform: translateX(-20px); /* 改为水平方向的位移 */
}

.search-section h1 span span.animate {
  animation: slideInFromLeft 0.5s forwards;
}

@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-20px); /* 从左侧开始 */
  }
  to {
    opacity: 1;
    transform: translateX(0); /* 移动到原位 */
  }
}

.search-section h1 span span.animate-out {
  animation: slideOutToRight 0.3s forwards;
}

@keyframes slideOutToRight {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px); /* 向右退出 */
  }
}

.search-options {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  max-width: 800px; /* 确保与标题宽度一致 */
  margin-left: auto;
  margin-right: auto;
}

.search-option {
  background: none;
  border: none;
  font-size: 1.2em;
  margin: 0 15px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  color: #333;
  display: inline-flex;
  align-items: center;
  text-decoration: none; /* 移除下划线 */
}

.search-option[href] {
  color: #007bff; /* 给有链接的选项一个特殊的颜色 */
}

.search-option[href]:hover {
  color: #0056b3;
  background-color: rgba(0, 123, 255, 0.1);
  border-radius: 4px;
}

.search-option::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #4a90e2;
  transform: scaleX(0);
  transition: transform 0.3s;
}

.search-option:hover::after,
.search-option.active::after {
  transform: scaleX(1);
}

.search-option .mdi {
  margin-right: 8px;
  font-size: 1.4em;
}

/* 修改盲盒交友输入框样式 */
.blindbox-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.input-group {
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 6px;
  padding: 8px 12px;
  margin-right: 8px;
  flex: 1;
}

.input-group .mdi {
  color: #666;
  margin-right: 8px;
  font-size: 20px;
}

.input-group input {
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: #333;
  outline: none;
  width: 100%;
}

.input-group input::placeholder {
  color: #999;
}

.blindbox-button {
  background-color: #007AFF;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.blindbox-button:hover {
  background-color: #0056b3;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .blindbox-input {
    flex-direction: column;
    align-items: stretch;
  }

  .input-group {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .blindbox-button {
    width: 100%;
    margin-top: 8px;
  }
}

/* 其他样式保持不变 */

/* 调整主内容区域的样式 */
.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  position: relative;
  z-index: 1;
}

/* 添加预算输入框样式 */
.budget-input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.budget-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.budget-button:hover {
  background-color: #218838;
}

@media (max-width: 768px) {
  .budget-input {
    flex-direction: column;
    align-items: stretch;
  }

  .budget-input .input-group {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .budget-button {
    width: 100%;
    margin-top: 8px;
  }
}

/* 添加淡入淡出过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

nav button.active {
  background-color: #4a90e2;
  color: white;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; /* 确保在其他元素之上 */
}

.login-modal {
  background: white;
  border-radius: 8px;
  padding: 20px;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.logo {
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.login-modal {
  background: white;
  border-radius: 12px;
  padding: 24px;
  width: 400px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.login-modal h2 {
  margin: 0 0 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #666;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.login-btn, .cancel-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.login-btn {
  background-color: #4a90e2;
  color: white;
}

.login-btn:hover {
  background-color: #357abd;
}

.cancel-btn {
  background-color: #f5f5f5;
  color: #666;
}

.cancel-btn:hover {
  background-color: #e8e8e8;
}
</style>