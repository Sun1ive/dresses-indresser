<template>
  <div class="sideWidget">
    <div class="box">
      <a class="telegram" href="https://google.com" target="_blank"><i class="fa fa-telegram" aria-hidden="true"></i></a>
    </div>
    <div class="box">
      <a class="phone" href="https://google.com" target="_blank"><i class="fa fa-phone-square" aria-hidden="true"></i></a>
    </div>
    <div class="box">
      <a class="facebook" href="https://google.com" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');

.sideWidget {
  position: fixed;
  right: 0px;
  bottom: 45%;
  width: 40px;
  border-radius: 7px;
  cursor: pointer;
  transition: .4s ease-out;
}
/* .sideWidget:hover {
  right: 10px;
}
 */
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
.box i {
  font-size: 40px;
  transition: .5s ease;
}
.box i:hover {
  transform: scale(1.2)
}
.telegram {
  color: #00CBFE;
}
.facebook {
  color: #4267B2;
}
.phone {
  color: seagreen;
}
</style>