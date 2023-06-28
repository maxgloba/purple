<template>
  <main class="layout layout-default">
    <Nuxt />
  </main>
</template>
<style lang="scss">
.section {
  position: relative;
  z-index: 1;
  @media (min-width: 992px) {
    padding-left: 80px;
  }
  @media(min-width: 1800px) {
    padding-left: 140px;
  }
}
.background {
  position: relative;
  .bg {
    @media(min-width: 992px) {
      width: calc((100% - 160px) / 6);
    }
    &-wrap {
      display: none;
      @media (min-width: 992px) {
        position: absolute;
        height: 100%;
        left: 80px;
        display: flex;
        width: calc(100% - 80px);
        z-index: 1;
      }
      @media(min-width: 1800px) {
        left: 140px;
        width: calc(100% - 140px);
      }
    }
    &-short {
      width: 40px;
      @media(min-width: 992px) {
        width: 80px;
      }
    }
  }
  &-light {
    .bg {
      @media(min-width: 992px) {
        background: linear-gradient(to right, #fff calc(100% - 0.5px), #f1f1f1 0.5px);
      }
    }
  }
  &-dark {
    .bg {
      @media(min-width: 992px) {
        background: linear-gradient(to right, #161619 calc(100% - 0.5px), #222224 0.5px);
      }
      &-wrap {
        z-index: -1;
      }
    }
  }
}
</style>