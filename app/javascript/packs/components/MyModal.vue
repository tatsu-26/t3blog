<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button" @click="$emit('cancel')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
      data: function () {
        return {
          editPost: "",
          post: "",
          edit: "編集",
        }
      },
        editPost: function()  {
          axios.get(`/api/posts/${this.Target}`).then(response =>{
            this.edit = response.data.post.post.id
          })          
        },
       
  }

</script>
