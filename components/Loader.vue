<template>
  <div class="loader">
    <div class="loader-wrap">
        <div class="loader-line loader-line1"></div>
        <div class="loader-line loader-line2"></div>
        <div class="loader-line loader-line3"></div>
        <div class="loader-line loader-line4"></div>
        <div class="loader-line loader-line5"></div>
        <div class="loader-line loader-line6"></div>
        <div class="loader-line loader-line7"></div>
        <div class="loader-line loader-line8"></div>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0, 0.75);
  &-wrap {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  &-line {
    width: 10px;
    height: 70px;
    background: #fff;
    display: inline-block;
    transform-origin: bottom center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    animation: loader 1.2s linear infinite;
  }
  &-line1 {animation-delay: 0.1s;}
  &-line2 {animation-delay: 0.2s;}
  &-line3 {animation-delay: 0.3s;}
  &-line4 {animation-delay: 0.4s;}
  &-line5 {animation-delay: 0.5s;}
  &-line6 {animation-delay: 0.6s;}
  &-line7 {animation-delay: 0.7s;}
  &-line8 {animation-delay: 0.8s;}

  @keyframes loader {
    0% {transform: scaleY(0.1);}
    50% {transform: scaleY(1);background: rebeccapurple;}
    100% {transform: scaleY(0.1);background: transparent;}
  }
}
</style>