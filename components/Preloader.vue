<template>
  <section class="preloader" id="preloader" ref="preloader">

    <div class="preloader-wrap" ref="wrap">
      <div class="preloader-item"></div>
      <div class="preloader-item"></div>
    </div>

    <h2 class="preloader-before" ref="before">
      <span v-for="item in 'P u r p l e'.split(' ')">{{ item }}&nbsp;</span>
    </h2>

    <h2 class="preloader-after" ref="after">
      <span v-for="item in 'P u r p l e'.split(' ')">{{ item }}&nbsp;</span>
    </h2>
  </section>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$refs.before.classList.add('active')
      setTimeout(() => {
        this.$refs.after.classList.add('active')
        setTimeout(() => {
          this.$refs.before.classList.add('hidden')
          this.$refs.after.classList.add('hidden')
          setTimeout(() => {
            this.$refs.wrap.classList.add('active')
            setTimeout(() => {
              this.$refs.preloader.classList.add('active')
            },1200)
          },1100)
        },1000)
      },900)
    }, 0);
  },
}
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 555;
  &-wrap {
    transform: rotate(-45deg) translate(-50%, -50%);
    transform-origin: 0 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150vmax;
    height: 150vmax;
  }
  &-item {
    position: absolute;
    width: 51%;
    height: 100%;
    top: 0;
    background: #000;
    transform: scaleX(1);
    transition: transform 1s ease;
    &:nth-child(1) {
      right: 0;
      transform-origin: right center;
    }
    &:nth-child(2) {
      left: 0;
      transform-origin: left center;
    }
  }
  span {
    display: inline-block;
    font-size: 40px;
    font-weight: 900;
    @media(min-width: 768px){
      font-size: 55px;
    }
    @media(min-width: 1800px){
      font-size: 75px;
    }
  }
  &-before,
  &-after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &-before {
    color: rgb(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity .7s ease;
  }
  &-after {
    span {
      color: #7E10E5;
      opacity: 0;
      transform-origin: center center;
      transition: 0.3s ease;
      transform: rotateY(90deg);
    }
   }

  &-before.active {
    opacity: 1;
  }
  &-after.active {
    span {
      opacity: 1;
      transform: rotateY(0);
      &:nth-of-type(1){transition-delay: 0.1s;}
      &:nth-of-type(2){transition-delay: 0.2s;}
      &:nth-of-type(3){transition-delay: 0.3s;}
      &:nth-of-type(4){transition-delay: 0.4s;}
      &:nth-of-type(5){transition-delay: 0.5s;}
      &:nth-of-type(6){transition-delay: 0.6s;}
    }
  }
    &-before.hidden,
    &-after.hidden {
      span {
        transition: transform 1s ease, opacity 1s ease;
        transform: rotateY(90deg);
        opacity: 0;
        &:nth-of-type(1){transition-delay: 0s;}
        &:nth-of-type(2){transition-delay: 0s;}
        &:nth-of-type(3){transition-delay: 0s;}
        &:nth-of-type(4){transition-delay: 0s;}
        &:nth-of-type(5){transition-delay: 0s;}
        &:nth-of-type(6){transition-delay: 0s;}
    }
  }
  &-wrap.active {
    .preloader-item {
      transform: scaleX(0);
    }
  }
  &.active {
    z-index: -1;
  }
}
</style>