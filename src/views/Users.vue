<template>
  <div class="container">
    <!-- <p id="content-status" class="text-center">Now loading...</p> -->
    <div id="data-panel" class="row">
      <!-- user data 放置場 -->
      <template v-if="mode === 'card'">
        <UserCard
          v-for="user in users"
          :key="user.id"
          :user="user"
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
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue'
import UserList from '../components/UserList.vue'
import usersAPI from '../apis/users.js'

export default {
  props: {
    mode: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      initialUsers: [],
      users: [],
      LIMIT: 24
    }
  },
  components: {
    UserCard,
    UserList
  },
  watch: {
    '$route': function(to) {
      if (to.name === 'find') { this.fetchUsers() }
      if (to.name === 'following') { this.fetchFollowing() }
    }
  },
  created () {
    const route = this.$route.name
    if (route === 'find') { this.fetchUsers() }
    if (route === 'following') { this.fetchFollowing() }
  },
  methods: {
    async fetchUsers() {
      try {
        // 打 API 取得 users
        const response  = await usersAPI.getUsers()
        if (response.statusText !== 'OK') { throw new Error(response.statusText) }

        const users = response.data.results

        // 判斷 isFollowed
        const following = JSON.parse(sessionStorage.getItem('following'))
        for (const user of users ) {
          user.isFollowed = following.some(followingUser => user.id === followingUser.id)
        }
        this.initialUsers = users
        this.users = users.slice(0, this.LIMIT)

        // 通知父層 users 數量
        this.$emit('afterFetchUsers', this.users.length)

      } catch (err) {
        console.error(err)
      }
    },
    fetchFollowing() {
      const following = JSON.parse(sessionStorage.getItem('following'))
      this.users = following
    },
    afterToggleFollow(count) {
      this.$emit('afterToggleFollow', count)
    }
  }
}
</script>