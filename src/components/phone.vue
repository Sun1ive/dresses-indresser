<template>
  <div id="phone" @click.stop="offerCall">
    <div class="icon"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      offerCall () {
        this.$emit('showCallForm')
      }
    }
  }
</script>

<style scoped>
#phone {
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  padding: 15px;
  z-index: 5;
  background-color: #40bc6b;
  cursor: pointer;
  animation: bounceIn 3s infinite linear both;
}
.icon {
  background-image: url('https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/phone1-48.png');
  height: 64px;
  width: 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -23px;
  margin-left: -23px;
}

@keyframes bounceIn {
  from, 20%, 40%, 60%, 80%, to {
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(.9, .9, .9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(.97, .97, .97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
}
</style>