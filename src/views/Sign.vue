<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col sm="12" md="6">
        <v-img
          src="../images/main.png"
          max-width="500px"
        ></v-img>
      </v-col>
      <v-col sm="12" md="6">
        <v-container no-gutters>
          <v-row>
            <v-col>
               <signup v-if="!signin"></signup>
               <signin v-else></signin>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-divider class="ma-5"></v-divider>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex align-center justify-center">
              <span>또는</span>
              <v-btn dense depressed @click="signin = !signin">{{btn_text}}</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Signup from '../components/Login/Signup.vue'
import Signin from '../components/Login/Signin'

export default {
  name: 'Sign',
  data () {
    return {
      signin: true
    }
  },
  components: {
    Signup,
    Signin
  },
  computed: {
    btn_text () {
      return this.signin ? '회원가입' : '로그인'
    }
  }
}
</script>

<style>

</style>
