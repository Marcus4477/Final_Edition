<template>
  <div class="matching-animation">
    <div class="animation-content">
      <div class="radar-circle"></div>
      <div class="scanning-line"></div>
      <div class="matching-text">
        <span>正在寻找最佳旅伴</span>
        <div class="dots">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </div>
      </div>
      <div class="matching-stats">
        <div class="stat-item">
          <span class="label">已扫描</span>
          <span class="value">{{ scannedCount }}</span>
        </div>
        <div class="stat-item">
          <span class="label">匹配度</span>
          <span class="value">{{ matchRate }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MatchingAnimation',
  data() {
    return {
      scannedCount: 0,
      matchRate: 0,
      animationInterval: null
    }
  },
  mounted() {
    this.startAnimation();
  },
  methods: {
    startAnimation() {
      let count = 0;
      this.animationInterval = setInterval(() => {
        count++;
        this.scannedCount = Math.min(count * 20, 100);
        this.matchRate = Math.min(count * 25, 98);
        
        if (count >= 4) {
          clearInterval(this.animationInterval);
          setTimeout(() => {
            this.$emit('matchComplete');
          }, 500);
        }
      }, 300);
    }
  },
  beforeDestroy() {
    if (this.animationInterval) {
      clearInterval(this.animationInterval);
    }
  }
}
</script>

<style scoped>
.matching-animation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.animation-content {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.radar-circle {
  width: 200px;
  height: 200px;
  border: 2px solid #4CAF50;
  border-radius: 50%;
  position: relative;
  animation: pulse 2s infinite;
}

.scanning-line {
  position: absolute;
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, #4CAF50, transparent);
  top: 50px;
  left: 50%;
  transform-origin: bottom;
  animation: scan 2s linear infinite;
}

.matching-text {
  margin-top: 30px;
  color: white;
  font-size: 1.2em;
  display: flex;
  align-items: center;
}

.dots span {
  opacity: 0;
  animation: dots 1.4s infinite;
  margin-left: 2px;
}

.dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.dots span:nth-child(3) {
  animation-delay: 0.4s;
}

.matching-stats {
  margin-top: 20px;
  display: flex;
  gap: 20px;
}

.stat-item {
  color: white;
  text-align: center;
}

.stat-item .label {
  display: block;
  font-size: 0.9em;
  color: #888;
}

.stat-item .value {
  display: block;
  font-size: 1.4em;
  font-weight: bold;
  color: #4CAF50;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes scan {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes dots {
  0%, 20% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style> 