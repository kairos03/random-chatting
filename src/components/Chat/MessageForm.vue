<template>
  <div class="d-flex" justify-center>
    <v-btn
    color="primary"
    flat
    large
    rounded
    icon
    dark
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-text-field
      v-model="msg"
      label="chat"
      placeholder="보낼 메시지"
      background-color="grey lighten-4"
      solo
      rounded
      flat
      @keyup.enter="submitMessage"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'MessageForm',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    submitMessage () {
      if (this.msg.length === 0) return false
      this.$emit('submitMessage', this.msg)
      this.msg = ''
      return true
    }
  }
}
</script>
