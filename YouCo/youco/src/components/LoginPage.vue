<template>
    <div class="login-page">
      <div class="login-container">
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
          <button @click="handleCancel" class="cancel-btn">取消</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
    handleLogin() {
        // 这里添加登录逻辑
        if (this.loginForm.username && this.loginForm.password) {
        // 设置登录状态
        localStorage.setItem('isLoggedIn', 'true');
        // 登录成功后跳转
        this.$router.push('/discover');
        } else {
        alert('请输入用户名和密码');
        }
    },
    handleCancel() {
        // 取消登录，返回发现页
        this.$router.push('/discover');
    }
    }
}
  </script>
  
  <style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to right, #ffd1dc, #ffecd2);
  }
  
  .login-container {
    background: white;
    border-radius: 12px;
    padding: 24px;
    width: 400px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  }
  
  /* 复用 App.vue 中的表单样式 */
  .form-group, .form-input, .form-actions, .login-btn, .cancel-btn {
    /* 这些样式已在 App.vue 中定义 */
  }
  </style>