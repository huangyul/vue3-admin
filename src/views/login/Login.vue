<template>
  <div class="container">
    <div class="login-container">
      <div class="login-title">vue3-admin</div>
      <div class="login-form">
        <el-form :model="formData" :rules="rules" ref="form">
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
              @keydown.enter="login"
            >
              <template #prefix>
                <el-icon class="el-input__icon">
                  <elementLock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round class="login-btn" @click="login"
              >登陆</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { ElForm, ElMessage } from 'element-plus'
  import myLogin from '@/utils/login'
  import { useRouter } from 'vue-router'
  // 表格数据
  const formData = ref({
    username: '',
    passwrod: '',
  })

  // 获取表单组件
  const form = ref<InstanceType<typeof ElForm>>()

  const router = useRouter()

  // // 自定义校验器
  // const checkPwd = (rule: any, value: any, callback: any) => {
  //   if(value)
  // }

  // 校验规则
  const rules = {
    username: [
      { required: true, message: '请输入用户名或账号', trigger: 'blur' },
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }

  // 登陆
  const login = () => {
    // 数据校验要通过
    form.value.validate((valid) => {
      if (!valid) {
        ElMessage({
          message: '请按规则填入账号密码',
          type: 'error',
        })
      } else {
        // 模拟登陆
        myLogin(formData.value.username)
        router.push('/')
      }
    })
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
