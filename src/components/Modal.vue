<template>
  <div class="modal fade" id="modal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-4">
              <img id="show-avatar" class="img-fluid" src="https://uinames.com/api/photos/female/9.jpg" alt="avatar photo">
            </div>
            <div class="col-8">
              <div id="show-info" class="row border-bottom pb-2">
                <!-- user data 放置場 -->
                <div class="col-12 h5">Jenel Ivănceanu</div>
                <div class="col-12 col-lg-3 mb-2 icon-gender">male</div>
                <div class="col-12 col-lg-9 mb-2 icon-created_at">Joined Jul 15, 2019</div>
                <div class="col-12 col-lg-3 mb-2 icon-region">Romania</div>
                <div class="col-12 col-lg-9 mb-2 icon-email">jenel90@example.com</div>
              </div>
              <div class="row pt-2">
                <div class="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aliquam quidem provident voluptates cupiditate maiores corporis voluptas, ullam quasi rem nemo a ea accusantium consectetur, optio velit cum, itaque illum.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-created_at::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f073";
  margin-right: 0.5rem;
}

.icon-email::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f0e0";
  margin-right: 0.5rem;
}

.icon-region::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f3c5";
  margin-right: 0.5rem;
}

.icon-gender::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f22d";
  margin-right: 0.5rem;
}
</style>