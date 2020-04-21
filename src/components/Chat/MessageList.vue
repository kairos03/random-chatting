<template>
  <v-list v-auto-bottom="msgs">
    <v-list-item v-for="(msg, index) in msgs" :key="index">
      <!-- <v-list-item-avatar v-if="msg.from.name != '나'">
        <v-img :src="item.avatar"></v-img>
        <span>{{msg.from.name}}</span>
      </v-list-item-avatar> -->
      <div class="d-flex flex-row" :class="{'justify-end': msg.from.name === '나'}">
        <v-list-item-action>
          <span>{{msg.from.name}}</span>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{msg.msg}}</v-list-item-title>
        </v-list-item-content>
      </div>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'MessageList',
  props: ['msgs']
}
</script>
