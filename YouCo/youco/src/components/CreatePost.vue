<template>
  <div class="create-post-modal" v-if="show" @click.self="close">
    <div class="modal-content">
      <div class="modal-header">
        <h3>发布动态</h3>
        <button class="close-btn" @click="close">×</button>
      </div>
      
      <div class="modal-body">
        <textarea 
          v-model="postContent" 
          placeholder="分享你的旅行故事..."
          class="content-input"
          rows="6"
        ></textarea>
        
        <div class="image-upload">
          <div class="upload-preview" v-if="previewImages.length">
            <div v-for="(img, index) in previewImages" 
                 :key="index" 
                 class="preview-item">
              <img :src="img" alt="预览图片">
              <button class="remove-img" @click="removeImage(index)">×</button>
            </div>
          </div>
          
          <label class="upload-btn" v-if="previewImages.length < 9">
            <input 
              type="file" 
              accept="image/*" 
              multiple 
              @change="handleImageUpload"
              ref="fileInput"
            >
            <span class="mdi mdi-image-plus"></span>
            添加图片
          </label>
        </div>

        <div class="tags-input">
          <div class="tags-container">
            <span v-for="(tag, index) in tags" 
                  :key="index" 
                  class="tag">
              #{{ tag }}
              <button @click="removeTag(index)" class="remove-tag">×</button>
            </span>
            <input 
              v-model="newTag"
              @keyup.enter="addTag"
              placeholder="添加标签 (回车确认)"
              maxlength="20"
              class="tag-input"
            >
          </div>
        </div>
      </div>
      
      <div class="modal-footer">
        <button class="cancel-btn" @click="close">取消</button>
        <button class="publish-btn" 
                @click="publishPost"
                :disabled="!isValid">
          发布
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CreatePost',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      postContent: '',
      previewImages: [],
      tags: [],
      newTag: ''
    }
  },
  computed: {
    isValid() {
      return this.postContent.trim().length > 0
    }
  },
  methods: {
    close() {
      this.$emit('close')
      this.resetForm()
    },
    handleImageUpload(event) {
      const files = event.target.files
      if (files) {
        for (let file of files) {
          if (this.previewImages.length >= 9) break
          
          const reader = new FileReader()
          reader.onload = (e) => {
            this.previewImages.push(e.target.result)
          }
          reader.readAsDataURL(file)
        }
      }
      this.$refs.fileInput.value = '' // 重置input以允许重复选择相同文件
    },
    removeImage(index) {
      this.previewImages.splice(index, 1)
    },
    addTag() {
      const tag = this.newTag.trim()
      if (tag && !this.tags.includes(tag) && this.tags.length < 5) {
        this.tags.push(tag)
        this.newTag = ''
      }
    },
    removeTag(index) {
      this.tags.splice(index, 1)
    },
    publishPost() {
      if (!this.isValid) return
      
      const post = {
        content: this.postContent,
        images: this.previewImages,
        tags: this.tags,
        time: '刚刚',
        likes: 0,
        comments: 0
      }
      
      this.$emit('publish', post)
      this.resetForm()
      this.close()
    },
    resetForm() {
      this.postContent = ''
      this.previewImages = []
      this.tags = []
      this.newTag = ''
    }
  }
}
</script>

<style scoped>
.create-post-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  border-radius: 20px;
  width: 800px;
  height: 600px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: modalSlideIn 0.3s ease;
  overflow: hidden;
}

@keyframes modalSlideIn {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

.modal-header h3 {
  margin: 0;
  font-size: 24px;
  color: #333;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #333;
}

.modal-body {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
  overflow-x: hidden;
}

.content-input {
  width: 100%;
  border: none;
  resize: none;
  font-size: 16px;
  line-height: 1.6;
  padding: 16px;
  border-radius: 12px;
  background: #f8f9fa;
  margin-bottom: 20px;
  height: 120px;
}

.content-input:focus {
  outline: none;
  background: #fff;
  box-shadow: 0 0 0 2px #e1f0ff;
}

.image-upload {
  margin-bottom: 24px;
}

.upload-preview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 16px;
}

.preview-item {
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
}

.preview-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.preview-item:hover img {
  transform: scale(1.05);
}

.remove-img {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.remove-img:hover {
  background: rgba(0, 0, 0, 0.8);
  transform: scale(1.1);
}

.upload-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  background: #f0f7ff;
  color: #4a90e2;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.upload-btn:hover {
  background: #e1f0ff;
  transform: translateY(-1px);
}

.upload-btn input {
  display: none;
}

.tags-input {
  margin: 20px 0;
}

.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 12px 16px;
  background: #f8f9fa;
  border-radius: 12px;
  min-height: 48px;
  align-items: center;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e1f0ff;
  color: #4a90e2;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tag:hover {
  background: #d0e7ff;
  transform: translateY(-1px);
}

.remove-tag {
  background: none;
  border: none;
  color: #4a90e2;
  font-size: 16px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  transition: all 0.2s ease;
}

.remove-tag:hover {
  background: rgba(74, 144, 226, 0.1);
}

.tag-input {
  flex: 1;
  min-width: 120px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: #333;
  padding: 6px 0;
  outline: none;
}

.tag-input::placeholder {
  color: #999;
}

.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  background: #fff;
}

.cancel-btn, .publish-btn {
  padding: 12px 30px;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.cancel-btn {
  background: #f5f5f5;
  border: none;
  color: #666;
}

.cancel-btn:hover {
  background: #eee;
  transform: translateY(-1px);
}

.publish-btn {
  background: linear-gradient(45deg, #4a90e2, #63b3ed);
  border: none;
  color: white;
  box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
}

.publish-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

.publish-btn:disabled {
  background: linear-gradient(45deg, #ccc, #ddd);
  cursor: not-allowed;
  box-shadow: none;
}

.modal-body::-webkit-scrollbar {
  width: 6px;
}

.modal-body::-webkit-scrollbar-track {
  background: transparent;
}

.modal-body::-webkit-scrollbar-thumb {
  background: #ddd;
  border-radius: 3px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: #ccc;
}
</style> 