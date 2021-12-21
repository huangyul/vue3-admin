<template>
  <div class="container">
    <div class="login-container">
      <div class="login-title">vue3-admin</div>
      <div class="login-form">
        <el-form :model="formData" :rules="rules">
          <el-form-item prop="username">
            <el-input v-model="formData.username" placeholder="用户名或账号">
              <template #prefix>
                <el-icon class="el-input__icon">
                  <elementUser />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              show-password
              v-model="formData.password"
              placeholder="密码"
            >
              <template #prefix>
                <el-icon class="el-input__icon">
                  <elementLock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round class="login-btn">登陆</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const formData = ref({
    username: '',
    passwrod: '',
  })

  const rules = {
    username: [
      { required: true, message: '请输入用户名或账号', trigger: 'blur' },
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(135deg, #45b787, #2bae85);
    display: flex;
    justify-content: center;
    align-items: center;

    .login-container {
      width: 500px;
      min-height: 300px;
      padding: 30px;
      border-radius: 5px;
      border: 10px solid rgba($color: #5dbe8a, $alpha: 0.5);
      background-color: #ffffff;

      .login-title {
        text-align: center;
        font-weight: 600;
        font-size: 20px;
        // margin-bottom: 30px;
      }

      .login-form {
        padding: 30px 30px 0 30px;

        .login-btn {
          width: 100%;
        }
      }
    }
  }
</style>
