<template>
  <div>
    <section class="hero-section ico-bg2 relative hidden" id="home">
      <div class="ico-circled"></div>
      <!-- Hero Content -->
      <div class="hero-section-content">
        <div class="container">
          <div class="row align-items-center">
            <!-- Welcome Content -->
            <div
              class="mt-50 col-12 col-lg-6 offset-lg-0 col-md-10 offset-md-1 col-sm-12"
            >
              <div class="fadeInUp" style="" data-wow-delay="0.5s">
                <img
                  src="/src/assets/img/core-img/with.png"
                  alt=""
                  style="width: 700px"
                  class="spec-ml city-img img-responsive center-block"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ms-login">
        <el-form
          :model="param"
          :rules="rules"
          ref="ruleFormRef"
          label-width="0px"
          class="ms-content"
        >
          <div class="ms-header">生活打点滴</div>
          <el-form-item prop="user">
            <el-input
              v-model="param.user"
              placeholder="请输入用户名"
              clearable
              class="input-with-select"
            >
              <template #prepend>
                <i class="iconfont icon-zhanghu"></i>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input
              type="password"
              placeholder="请输入密码"
              clearable
              show-password
              v-model="param.pwd"
            >
              <template #prepend>
                <i class="iconfont icon-mima"></i>
              </template>
            </el-input>
          </el-form-item>

          <el-button
            :loading="loading"
            class="button"
            @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, nextTick } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";

const ruleFormRef = ref<FormInstance>();
const router = useRouter();
const user = useUserStore();
const param = reactive({
  user: "aaa",
  pwd: "bbb",
});
const loading = ref(false);
const rules = reactive<FormRules>({
  user: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 2, max: 16, message: "用户名超出字段", trigger: "change" },
  ],
  pwd: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 2, max: 16, message: "密码超出字段", trigger: "change" },
  ],
});

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  loading.value = true;
  await formEl.validate((valid, fields) => {
    if (valid) {
      nextTick(() => {
        setTimeout(() => {
          loading.value = false;
          ElMessage({
            message: " 欢迎 一化北溟鱼 登录成功 ",
            type: "success",
          });
          const query = {
            user: param.user,
            name: "一化北溟鱼",
            token: Date.now(),
          };
          user.updateState(query);
          router.push("/");
        }, 2000);
      });
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>

<style lang="scss" scoped>
::v-deep(.el-input__inner) {
  height: 40px;
}

::v-deep(.el-form-item__error) {
  left: 70px;
}

.iconfont {
  font-weight: bold;
  font-size: 20px;
}

.button {
  text-decoration: none;
  width: 300px;
  margin-top: 10px;
  /* position: absolute; */
  border: none;
  font-size: 14px;
  font-family: inherit;
  color: #fff;
  height: 3em;
  line-height: 2em;
  text-align: center;
  background: linear-gradient(
    90deg,
    #6555ff,
    #4089ff,
    #40c6ff,
    #4089ff,
    #6555ff
  );
  background-size: 300%;
  border-radius: 10px;
  z-index: 1;
}

.button:hover {
  animation: ani 8s linear infinite;
  border: none;
}

@keyframes ani {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}

.ms-header {
  text-align: center;
  color: #fff;
  height: 70px;
  font-size: 24px;
}

.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(../../../assets/img/bg.jpg) rgba(0, 0, 0, 0.8) scroll
    no-repeat center center / cover;
  filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
  -moz-background-size: 100% 100%;
  background-size: 100% 100%;
}

.ms-logo {
  position: fixed;
  left: 80px;
  top: 60px;
}

.ms-logo img {
  width: 60px;
  height: 46px;
}

.ms-name {
  position: absolute;
  left: 62%;
  top: 30%;
  width: 25%;
  text-align: center;
  line-height: 60px;
}

.ms-name .name {
  font-size: 22px;
  color: #fff;
  font-weight: 500;
}

.ms-name .eng {
  color: #fff;
  margin-left: 50px;
  font-size: 16px;
}

.ms-title {
  width: 100%;
  height: 50px;
  line-height: 70px;
  text-align: center;
  font-size: 16px;
  color: #fff;
}
.ms-login {
  position: absolute;
  left: 60%;
  top: 30%;
  width: 300px;
  margin: 20px;
  /*box-shadow: 0 0 30px 0 rgba(36, 47, 66, 0.08);*/
}

.login-btn {
  text-align: center;
  margin-top: 30px;
}

.login-btn button {
  width: 100%;
  height: 42px;
  /*background: #6555ff;*/
  /*border: 1px solid #6555ff;*/
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border-radius: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 40px;
  color: #ffffff;
}

.copyright {
  position: absolute;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  width: 100%;
  font-size: 12px;
  bottom: 40px;
}

.copyright p {
  line-height: 26px;
}

.copyright p a {
  color: rgba(255, 255, 255, 0.6);
}

.copyright p a:hover {
  color: #ccc;
}
</style>
