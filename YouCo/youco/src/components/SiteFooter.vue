<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>关于我们</h3>
        <p>旅游交友网致力于为旅行者提供独特的社交体验,让每次旅行都充满乐趣。</p>
      </div>

      <div class="footer-section">
        <h3>快速链接</h3>
        <a href="#">使用条款</a>
        <a href="#">隐私政策</a>
        <a href="#">常见问题</a>
        <a href="#">联系我们</a>
      </div>

      <div class="footer-section">
        <h3>关注我们</h3>
        <div class="social-links">
          <a href="#" class="social-link">
            <span class="mdi mdi-sina-weibo"></span>
          </a>
          <a href="#" class="social-link">
            <span class="mdi mdi-music-note"></span>
          </a>
          <a href="#" class="social-link">
            <span class="mdi mdi-wechat"></span>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h3>订阅我们</h3>
        <div class="subscribe-form">
          <input type="email" placeholder="您的邮箱" />
          <button>订阅</button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 旅游交友网 保留所有权利。</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
.site-footer {
  background-color: #2d2d2d;
  color: #808080;
  padding: 40px 0 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 200px;
  margin: 0 15px 20px;
}

.footer-section h3 {
  color: #fff;
  font-size: 16px;
  margin-bottom: 15px;
  font-weight: bold;
}

.footer-section p {
  line-height: 1.6;
  margin: 0;
}

.footer-section a {
  color: #808080;
  text-decoration: none;
  display: block;
  margin-bottom: 8px;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #fff;
}

.social-links {
  display: flex;
  justify-content: flex-start;
  gap: 40px;
  margin-top: 15px;
  padding-left: 0;
}

.social-link {
  color: #808080;
  text-decoration: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.social-link .mdi {
  font-size: 32px;
}

.social-link:hover {
  color: #fff;
  transform: translateY(-2px);
}

.subscribe-form {
  display: flex;
  gap: 8px;
}

.subscribe-form input {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: #404040;
  color: #fff;
}

.subscribe-form input::placeholder {
  color: #808080;
}

.subscribe-form button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: #4a90e2;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.subscribe-form button:hover {
  background: #357abd;
}

.footer-bottom {
  text-align: center;
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #404040;
}

.footer-bottom p {
  margin: 0;
  font-size: 12px;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin: 0 0 30px;
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  .subscribe-form button {
    width: 100%;
  }
}
</style> 