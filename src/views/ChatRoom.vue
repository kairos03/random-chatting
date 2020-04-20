<template>
  <v-container max-width="500px" fluid grid-list-sm fill-height>
    <v-row
      justify-center
      align-center
      fill-height
    >
      <v-col fill-height>
        <v-card height="100%">
          <v-card-title primary-title>
            채팅방
          </v-card-title>
          <v-card-text background-color="grey darken-1">
            <message-list :msgs="msgDatas"></message-list>
          </v-card-text>
          <v-card-actions>
            <!-- <v-spacer></v-spacer> -->
            <message-form @submitMessage="sendMessage"></message-form>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import MessageList from '@/components/Chat/MessageList.vue'
import MessageForm from '@/components/Chat/MessageForm.vue'
import Constant from '@/Constant'

export default {
  name: 'ChatRoom',
  data () {
    return {
      datas: []
    }
  },
  components: {
    MessageList,
    MessageForm
  },
  computed: {
    ...mapState({
      msgDatas: state => state.socket.msgDatas
    })
  },
  created () {
    const $ths = this
    this.$socket.on('chat', (data) => {
      this.pushMsgData(data)
      $ths.datas.push(data)
    })
  },
  methods: {
    ...mapMutations({
      pushMsgData: Constant.PUSH_MSG_DATA
    }),
    sendMessage (msg) {
      this.pushMsgData({
        from: {
          name: '나'
        },
        msg
      })
      this.$sendMessage({
        name: this.$route.params.username,
        msg
      })
    }
  }
}
</script>

<style>
.msg-form {
  bottom: -28px;
  position: absolute;
  left: 0;
  right: 0;
}
.msg-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
  overflow-x: scroll;
}
</style>
