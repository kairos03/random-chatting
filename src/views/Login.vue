<template>
  <v-container grid-list-sm fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title primary-title>
            Login
          </v-card-title>
          <login-form @join="joinSubmit"></login-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoginForm from '@/components/Login/LoginForm'

export default {
  name: 'Login',
  data: () => ({
  }),
  components: {
    LoginForm
  },
  created () {
  },
  methods: {
    joinSubmit (userName) {
      this.$router.push(`/chat-room/${userName}`)
    }
  }
}
</script>

<style>

</style>
