<template>
  <v-card flat tile>
    <v-card-title primary-title>
      회원가입
    </v-card-title>
    <v-form>
      <v-card-text>
        <v-text-field
          v-model="email"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          type="password"
          label="Password"
        ></v-text-field>
        <v-text-field
          v-model="verifyPassword"
          type="password"
          label="Password 확인"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="signup">회원가입</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      verifyPassword: null
    }
  },
  methods: {
    async signup () {
      console.log('sign')
      const result = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(result)
    }
  }
}
</script>

<style>

</style>
