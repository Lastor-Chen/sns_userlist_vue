<template>
  <div class="container">
    <Spinner v-if="isLoading" />
    <div id="data-panel" class="row"
        v-else
        @click="handleClick"
      >
      <p class="col-12 text-center" v-if="!users.length">
        No results found
      </p>
      <!-- user data panel -->
      <template v-if="mode === 'card'">
        <UserCard
          v-for="(user, index) in users"
          :key="user.id"
          :user="user"
          :index="index"
          @afterToggleFollow="afterToggleFollow"
        />
      </template>

      <template v-else>
        <UserList
          v-for="user in users"
          :key="user.id"
          :user="user"
          @afterToggleFollow="afterToggleFollow"
        />
      </template>
    </div>
    <div id="ob" ref="ob"></div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue'
import UserList from '../components/UserList.vue'
import Spinner from '../components/Spinner.vue'
import usersAPI from '../apis/users.js'
import $ from 'jquery'
import { Toast } from '../utils/helpers.js'

export default {
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      initialUsers: [],
      users: [],
      LIMIT: 24,
      route: this.$route.name,
      isLoading: true,
      observer: null
    }
  },
  components: {
    UserCard,
    UserList,
    Spinner
  },
  watch: {
    '$route': function() {
      // 換路由後，初始化
      this.route = this.$route.name
      this.isLoading = true
      this.$parent.searchCount = 0
      $(window).scrollTop(0)
      this.handleRoute()

      this.observer.unobserve(this.$refs.ob)
      this.observer.observe(this.$refs.ob)
    }
  },
  created() {
    this.handleRoute()
  },
  mounted() {
    // 無限下拉分頁
    this.observer = new IntersectionObserver(this.obCallback)
    this.observer.observe(this.$refs.ob)
  },
  methods: {
    handleRoute() {
      if (this.route === 'find') { this.fetchUsers() }
      if (this.route === 'following') { this.fetchFollowing() }
      if (this.route === 'search') { this.fetchSearch() }
    },
    async fetchUsers() {
      try {
        // 打 API 取得 users
        const response  = await usersAPI.getUsers()
        if (response.statusText !== 'OK') { throw new Error(response.statusText) }

        const users = response.data.results

        // 給 users 添加 isFollowed
        const following = JSON.parse(sessionStorage.getItem('following'))
        for (const user of users ) {
          user.isFollowed = following.some(followingUser => user.id === followingUser.id)
        }
        this.initialUsers = users
        this.users = this.initialUsers.splice(0, this.LIMIT)

        // 通知父層 users 數量
        this.$emit('afterFetchUsers', this.users.length)
        this.isLoading = false

      } catch(err) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '伺服器忙碌中，請稍後再試'
        })
      }
    },
    fetchFollowing() {
      const following = JSON.parse(sessionStorage.getItem('following'))
      this.users = following

      // 通知父層 reset findCount
      this.$emit('afterFetchFollowing')
      this.isLoading = false
    },
    async fetchSearch() {
      try {
        const query = this.$route.query.q
        const regex = new RegExp(query, 'i')

        // Query API
        const response = await usersAPI.getUsers()
        if (response.statusText !== 'OK') { throw new Error(response.statusText) }

        // search 符合之 users，並添加 isFollowed 屬性
        const following = JSON.parse(sessionStorage.getItem('following'))
        const searchUsers = response.data.results
          .filter(user => {
            user.isFollowed = following.some(followingUser => user.id === followingUser.id)
            const account = user.email.split('@')[0]
            return regex.test(account)
          })

        this.users = searchUsers
        this.$emit('afterSearch', searchUsers.length)
        this.isLoading= false

      } catch(err) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '伺服器忙碌中，請稍後再試'
        })
      }
    },
    afterToggleFollow(count) {
      this.$emit('afterToggleFollow', count)
    },
    findMore() {
      const newUsers = this.initialUsers.splice(0, this.LIMIT)
      this.users.push(...newUsers)

      // 全載入後解除 scroll 監聽器
      if (!this.initialUsers.length) { this.observer.unobserve(this.$refs.ob) }
    },
    followingMore() {
      const following = JSON.parse(sessionStorage.getItem('following'))
      const offset = this.users.length
      const usersLength = this.users.push(...following.slice(offset, this.LIMIT))

      // 全載入後解除 scroll 監聽器
      if (following.length === usersLength) { this.observer.unobserve(this.$refs.ob) }
    },
    handleClick(e) {
      if (e.target.matches('.show-modal')) {
        const targetId = +e.target.dataset.id
        const user = this.users.find(user => user.id === targetId)
        this.$emit('afterClickUser', user)
      }
    },
    obCallback(entries) {
      const isIntersecting = entries[0].isIntersecting
      const viewHeight = $(window).height()
      const obPosition = $('#ob').position().top
      const isOverWindow = obPosition > viewHeight

      // ob 位置超出一個 window 才加載
      if (isOverWindow && isIntersecting) {
        if (this.route === 'find') {
          this.findMore()
          // 通知父層 users 數量
          this.$emit('afterLoadUsers', this.users.length)
        }

        if (this.route === 'following') {
          this.followingMore()
        }
      }
    }
  }
}
</script>