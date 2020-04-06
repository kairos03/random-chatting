<template>
  <v-form ref="loginForm">
    <v-card-text>
      <v-text-field
        v-model="userName"
        label="대화명"
        required
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="success"
        @click="joinSubmit"
      >
        Join
      </v-btn>
    </v-card-actions>
  </v-form>
</template>

<script>
export default {
  name: 'LoginForm',
  props: ['join'],
  data: () => ({
    userName: ''
  }),
  methods: {
    joinSubmit () {
      this.$emit('join', this.userName)
    }
  }
}
</script>

<style>

</style>
