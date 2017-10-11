<template>
  <div class="present" @click.stop="subscribe">
    <div class="icon"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      subscribe () {
        this.$emit('showSubForm')
      }
    }
  }
</script>

<style scoped>
@import url('./animations/animate.css');

.present {
  position: fixed;
  width: 90px;
  height: 90px;
  bottom: 30px;
  right: 30px;
  /* background-color: #c0c0c0; */
  /* border: 1px solid #333; */
  border-radius: 50%;
  cursor: pointer;
  animation: fadeOut 5s infinite linear both;
}
.present:hover {
  animation: none;
}
.icon {
  position: absolute;
  background-image: url('/static/gift.png');
  width: 64px;
  height: 64px;
  top: 50%;
  left: 50%;
  margin-top: -32px;
  margin-left: -31px;
}
</style>