<template>
    <div class="settings-page">
      <div class="settings-container">
        <!-- 设置页面标题 -->
        <h1 class="settings-title">账号设置</h1>
  
        <!-- 设置选项卡 -->
        <div class="settings-tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.id"
            :class="['tab-button', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id"
          >
            <span class="mdi" :class="tab.icon"></span>
            {{ tab.name }}
          </button>
        </div>
  
        <!-- 基本信息设置 -->
        <div v-if="activeTab === 'profile'" class="settings-section">
          <h2>个人资料</h2>
          <div class="form-group">
            <!-- <label>头像</label> -->
            <!-- <div class="avatar-upload">
              <img :src="formData.avatar" alt="用户头像" class="preview-avatar">
              <input 
                type="file" 
                accept="image/*" 
                @change="handleAvatarChange"
                ref="avatarInput"
              >
              <button @click="$refs.avatarInput.click()" class="upload-btn">
                更换头像
              </button>
            </div> -->
          </div>
          <div class="form-group">
            <label>用户名</label>
            <input type="text" v-model="formData.username">
          </div>
          <div class="form-group">
            <label>所在地</label>
            <input type="text" v-model="formData.location">
          </div>
          <div class="form-group">
            <label>个人简介</label>
            <textarea v-model="formData.bio" rows="4"></textarea>
          </div>
        </div>
  
        <!-- 账号安全设置 -->
        <div v-if="activeTab === 'security'" class="settings-section">
          <h2>账号安全</h2>
          <div class="form-group">
            <label>当前密码</label>
            <input type="password" v-model="formData.currentPassword">
          </div>
          <div class="form-group">
            <label>新密码</label>
            <input type="password" v-model="formData.newPassword">
          </div>
          <div class="form-group">
            <label>确认新密码</label>
            <input type="password" v-model="formData.confirmPassword">
          </div>
        </div>
  
        <!-- 隐私设置 -->
        <div v-if="activeTab === 'privacy'" class="settings-section">
          <h2>隐私设置</h2>
          <div class="switch-group">
            <label>
              <span>个人主页可见性</span>
              <div class="switch">
                <input type="checkbox" v-model="formData.profileVisible">
                <span class="slider"></span>
              </div>
            </label>
          </div>
          <div class="switch-group">
            <label>
              <span>允许陌生人私信</span>
              <div class="switch">
                <input type="checkbox" v-model="formData.allowMessages">
                <span class="slider"></span>
              </div>
            </label>
          </div>
        </div>
  
        <!-- 通知设置 -->
        <div v-if="activeTab === 'notifications'" class="settings-section">
          <h2>通知设置</h2>
          <div class="switch-group">
            <label>
              <span>系统通知</span>
              <div class="switch">
                <input type="checkbox" v-model="formData.systemNotifications">
                <span class="slider"></span>
              </div>
            </label>
          </div>
          <div class="switch-group">
            <label>
              <span>私信通知</span>
              <div class="switch">
                <input type="checkbox" v-model="formData.messageNotifications">
                <span class="slider"></span>
              </div>
            </label>
          </div>
        </div>
  
        <!-- 保存按钮 -->
        <div class="settings-actions">
          <button @click="saveSettings" class="save-button">保存更改</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserSettings',
    data() {
      return {
        activeTab: 'profile',
        tabs: [
          { id: 'profile', name: '个人资料', icon: 'mdi-account' },
          { id: 'security', name: '账号安全', icon: 'mdi-shield-lock' },
          { id: 'privacy', name: '隐私设置', icon: 'mdi-eye' },
          { id: 'notifications', name: '通知设置', icon: 'mdi-bell' }
        ],
        formData: {
          avatar: '/assets/images/Person.jpg',
          username: 'Jackson',
          location: '天津',
          bio: '',
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
          profileVisible: true,
          allowMessages: true,
          systemNotifications: true,
          messageNotifications: true
        }
      }
    },
    methods: {
      handleAvatarChange(event) {
        const file = event.target.files[0]
        if (file) {
          const reader = new FileReader()
          reader.onload = (e) => {
            this.formData.avatar = e.target.result
          }
          reader.readAsDataURL(file)
        }
      },
      saveSettings() {
        // 这里添加保存设置的逻辑
        console.log('保存设置:', this.formData)
        this.$notify({
          type: 'success',
          message: '设置已保存'
        })
      }
    }
  }
  </script>
  
  <style scoped>
  .settings-page {
    padding: 40px 20px;
    background-color: #f5f7fa;
    min-height: calc(100vh - 60px);
  }
  
  .settings-container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.1);
  }
  
  .settings-title {
    margin: 0 0 30px;
    font-size: 24px;
    color: #333;
  }
  
  .settings-tabs {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .tab-button {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border: none;
    background: none;
    color: #666;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  }
  
  .tab-button.active {
    color: #4a90e2;
    font-weight: 500;
  }
  
  .settings-section {
    margin-bottom: 30px;
  }
  
  .settings-section h2 {
    margin: 0 0 20px;
    font-size: 18px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 8px;
    color: #666;
  }
  
  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
  }
  
  .form-group textarea {
    resize: vertical;
  }
  
  .avatar-upload {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .preview-avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .upload-btn {
    padding: 8px 16px;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .upload-btn:hover {
    background: #357abd;
  }
  
  .switch-group {
    margin-bottom: 20px;
  }
  
  .switch-group label {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: .4s;
    border-radius: 24px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #4a90e2;
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
  
  .settings-actions {
    margin-top: 30px;
    text-align: right;
  }
  
  .save-button {
    padding: 10px 24px;
    background: #4a90e2;
    color: white;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .save-button:hover {
    background: #357abd;
  }
  </style>