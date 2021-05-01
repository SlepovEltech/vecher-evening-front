<template>

    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box"><slot></slot></div>
      </div>
      <button class="modal-close" @click="$emit('close')"></button>
    </div>


</template>

<script>
export default {
  name: "modal",
  data: function () {
    return {
      showModal: false
    }
  },
  methods: {
    closeModal: function () {
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>