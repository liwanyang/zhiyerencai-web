import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

const mixins = {
  computed: {
    ...mapState({
      // user: state => state.user
    })
  },
  methods: {
    ...mapActions({
    }),
    jump(to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    replaceTo(to) {
      if (this.$router) {
        this.$router.replace(to)
      }
    },
    go(n) {
      if (this.$router) {
        this.$router.go(n)
      }
    }
  }
}

Vue.mixin(mixins)
