<template>
  <div>
    <v-card-title primary-title>
      로그인
    </v-card-title>
    <v-form>
      <v-card-text>
        <v-text-field
          label="Email"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success">로그인</v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
