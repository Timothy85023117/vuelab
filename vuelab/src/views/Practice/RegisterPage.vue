<template>
  <div class="practice">
    <h1>Register</h1>
    <div class="container">
      <div class="flex">
        <div class="fiftyWidth"><span class="right">身份證字號</span></div>
        <Form v-slot="{ errors }">
        <Field name="field" :rules="identity" v-model="inputIdentity"/>

        <p class="error">{{ errors.field }}</p>
      </Form>
      </div>
      <div class="flex">
        <div class="fiftyWidth"><span class="right">姓名</span></div>
        <Form v-slot="{ errors }">
        <Field name="field" :rules="name" v-model="inputName"/>

        <p class="error">{{ errors.field }}</p>
      </Form>
      </div>
      <div class="flex">
        <div class="fiftyWidth"><span class="right">性別</span></div>
        <div class="fiftyWidth">
          <div class="left">
            <input type="radio" name="fav_language" value="male" />
            <span>男</span>
            <input type="radio" name="fav_language" value="female" />
            <span>女</span>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="fiftyWidth"><span class="right">手機</span></div>
        <Form v-slot="{ errors }">
        <Field name="field" :rules="mobile" v-model="inputPhone"/>

        <p class="error">{{ errors.field }}</p>
      </Form>
      </div>
      <button type="submit" :disabled="invalid" @click="postData">送出</button>
      <button>清除</button>
    </div>
  </div>
</template>
-->
<script>
import { Field, Form } from 'vee-validate'
export default {
  components: {
    Field,
    Form
  },
  data () {
    return {
      inputIdentity: '',
      inputName: '',
      inputPhone: ''
    }
  },
  methods: {
    identity (value) {
      if (!value) return '此欄位為必填欄位。'
      if (!/^[a-zA-Z]\d{9}$/.test(value)) return '輸入格式錯誤，請重新輸入。'
      return true
    },
    name (value) {
      if (!value) return '此欄位為必填欄位。'
      if (value.length > 30) return '輸入格式錯誤，請重新輸入。'
      return true
    },
    mobile (value) {
      if (!value) return '此欄位為必填欄位。'
      if (!/^(09+\d{8})$/.test(value)) return '輸入格式錯誤，請重新輸入。'
      return true
    },
    postData () {
      alert(this.inputIdentity + this.inputName + this.inputPhone)
    }
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  width: 100%;
  padding: 4px;
  margin: 24px 0;
  box-sizing: border-box;
  flex-direction: row;
}
.thirtyWidth {
  width: 50%;
}
.fiftyWidth {
  width: 50%;
}
.left {
  float: left;
}
.right {
  float: right;
}
.error{
    color:rgb(228, 21, 21);
    margin:0;
}
.container {
  margin: 0 300px;
  padding: 20px;
  background-color: rgb(235, 235, 235);
  border-radius: 4px;
  box-sizing: border-box;
}
.btn {
  width: 100px;
  height: 24px;
}
</style>
