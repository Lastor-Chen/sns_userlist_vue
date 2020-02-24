<template>
  <div class="col-12 d-flex border-top border-secondary p-2 align-items-center">
    <h6 class="col-2 col-xl-2 mb-0 show-modal"
      data-toggle="modal"
      data-target="#modal"
      :data-id="user.id"
    >
      {{user.name}}
    </h6>

    <h6 class="col-3 col-xl-2 mb-0 text-muted">
      <span class="show-modal" data-toggle="modal" data-target="#modal" :data-id="user.id">
        @{{user.email | getEmailAccount}}
      </span>
    </h6>

    <p class="col-5 col-xl-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing......</p>
    <div class="col-2 col-xl-3">

      <button class="btn btn-follow"
        :class="{ 'btn-primary': user.isFollowed, 'btn-outline-primary': !user.isFollowed }"
        data-follow="Follow"
        data-following="Following"
        data-id="406"
        @click="toggleFollow"
      ></button>

    </div>
  </div>
</template>

<script>
import { getEmailAccount, toggleFollow } from '../utils/mixins.js'

export default {
  mixins: [
    getEmailAccount,
    toggleFollow
  ],
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.show-modal {
  cursor: pointer;
}

.btn-follow {
  margin: 0 2rem 0 auto;
  min-width: 85px;
  font-size: 0.8em;
}

.btn-outline-primary::before {
  content: attr(data-follow);  /* 按鈕文字 */
}

.btn-primary::before {
  content: attr(data-following);
}
</style>