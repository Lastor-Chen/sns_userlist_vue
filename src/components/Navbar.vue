<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
    <div class="container">
      <div class="toolbar mr-2">
        <a href="https://github.com/Lastor-Chen/sns_user_list" title="Go to Github">
          <svg class="svg-btn" focusable="false" viewBox="0 0 24 24">
            <path
              d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z">
            </path>
          </svg>
        </a>
      </div>

      <a class="navbar-brand" href="#">
        <img class="rounded-circle" src="https://assets-lighthouse.s3.amazonaws.com/uploads/user/photo/1907/medium_02.jpg" width="30" height="30" alt="account icon">
      </a>

      <!-- search form -->
      <form id="search-form" class="form-inline position-relative" @submit.prevent="handleSearch">
        <input id="search-input" class="form-control mr-sm-2" type="text"
          v-model="search"
          placeholder="Search user"
          required
        >
        <span class="search-icon">
          <button type="submit" class="search-icon-btn"></button>
        </span>
      </form>

      <!-- mobile mode btn -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- link list -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-label sample">Posts</span>
              <span class="nav-value" data-count="0"></span>
            </a>
          </li>
          <!-- Following link -->
          <li class="nav-item">
            <router-link to="following" id="nav-following" class="nav-link">
              <span class="nav-label">Following</span>
              <span class="nav-value" :data-count="followingCount"></span>
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-label sample">Followers</span>
              <span class="nav-value" data-count="0"></span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span class="nav-label sample">Likes</span>
              <span class="nav-value" data-count="0"></span>
            </a>
          </li>
          <!-- Find link -->
          <li class="nav-item">
            <router-link to="find" id="nav-find" class="nav-link">
              <span class="nav-label">Find</span>
              <span class="nav-value" :data-count="findCount"></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import usersAPI from '../apis/users.js'
import { Toast } from '../utils/helpers.js'

export default {
  props: {
    findCount: {
      type: Number,
      required: true
    },
    followingCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      search: ''
    }
  },
  methods: {
    async handleSearch() {
      try {
        const searchFormat = this.search.trim()
        if (!searchFormat) return false
        const regex = new RegExp(searchFormat, 'i')

        // Query API
        const response = await usersAPI.getUsers()
        if (response.statusText !== 'OK') { throw new Error(response.statusText) }

        const users = response.data.results
        const searchUsers = users.filter(user => {
          const account = user.email.split('@')[0]
          return regex.test(account)
        })

        this.$emit('afterSearch', searchUsers)

      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: '伺服器忙碌中，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.svg-btn {
  width: 2rem;
}

.sample {  /* 未實裝功能標示用 */
  text-decoration: line-through;
}

.sample.nav-link:hover,
.sample.nav-link:focus {  /* 覆蓋Bootstrap設定 */
  text-decoration: line-through;
}

.nav-link {
  border-bottom: 0 solid #000;
  transition-property: border-bottom;
  transition: 0.15s linear;
  padding: 0;
  text-align: center;
  min-width: 4rem;
}

.nav-link:hover {
  border-bottom: 2px solid #000;
}

a.nav-link span {
  /* 禁止click, 讓.nav-link永遠只會點到<a>, 方便JS下判定*/
  pointer-events: none;
}

.nav-label {
  display: block;
  font-size: 0.9rem;
}

.nav-value {
  display: block;
  margin-top: -0.3rem;
  font-size: 1.1rem;
}

.nav-value::before {
  content: attr(data-count);
}

.navbar-nav .active {
  border-bottom: 2px solid #000;
}

.search-icon {
  position: absolute;
  right: 1rem;
}

.search-icon-btn {
  background: transparent;
  border: 0;
}

.search-icon-btn::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f002";
  color: #adb5bd;
}

@media (max-width: 991.98px) {
  .navbar-brand {
    margin: 0 auto 0 0;
  }
  
  .navbar-collapse {
    text-align: center;
  }

  .nav-item {
    border-top: 1px solid rgb(212, 212, 212);
  }

  .nav-item:first-child {
    border-top: 0;
  }

  .navbar-nav .active {
    border-bottom: 0;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    margin: 0 auto;
  }

  .nav-link {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .nav-link:hover { /* mobile時, 關閉hover效果 */
    border-bottom: 0;
  }

  .nav-item:active { /* mobile時, 用active取代hover */
    background-color: #ccc;
  }

  .nav-label {
    display: inline;
    font-size: 1rem;
  }

  .nav-value {
    display: inline;
    font-size: 1rem;
  }
}
</style>