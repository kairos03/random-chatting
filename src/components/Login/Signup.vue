<template>
  <v-card flat tile>
    <v-card-title primary-title>
      회원가입
    </v-card-title>
    <v-form>
      <v-card-text>
        <v-text-field
          label="ID"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success">회원가입</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>
