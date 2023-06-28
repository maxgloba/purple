<template>
  <section class="section section-banner banner" id="banner">
    <div class="container">
      <div class="banner-subtitle">
        <div class="banner-line" ref="line"></div>
        <h3 ref="subtitle">data tells the story.</h3>
      </div>
      <h1>we <span ref="title">bring</span><br>it to life.</h1>
    </div>
    <HomeArrowDown ref="arrow" />
  </section>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$refs.title.classList.add("active");
      this.$refs.subtitle.classList.add("active");
      this.$refs.arrow.$el.classList.add("active");
      this.$refs.line.classList.add("active");
    }, 3000);
  },
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  padding-left: 0 !important;

  .container {
    padding: 0 40px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (min-width: 992px) {
      padding: 0 80px;
    }
    @media (min-width: 1200px) {
      padding-bottom: 85px;
      justify-content: flex-end;
    }
  }

  h1 {
    font-size: 4.5rem;
    color: #fff;
    line-height: .85;
    font-weight: 700;
    @media (min-width: 768px) {
      font-size: 7.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 10.8vw;
    }
    span {
      display: inline-block;
      color: #7e10e5;
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
      opacity: 0;
      transform: translateX(-100%);
      &.active {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }

  &-subtitle {
    display: flex;
    align-items: center;
    width: 100%;
    @media (min-width: 1200px) {
      width: calc((100% / 6) * 3);
    }
  }

  h3 {
    font-size: 1.15rem;
    line-height: 1.15;
    color: #fff;
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0.75s, transform 0.5s ease-in-out 0.75s;
    transform: translateY(-10px);
    @media (min-width: 768px) {
      font-size: 2rem;
    }
    @media (min-width: 1200px) {
      font-size: 2.75vw;
    }
    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &-line {
    background: #7e10e5;
    height: 2px;
    min-width: calc((100% / 4) * 1.15);
    margin-right: 20px;
    opacity: 0;
    transition: opacity 0.5s ease-in-out 0.25s, transform 0.5s ease-in-out 0.25s;
    transform: translateX(-100%);
    @media (min-width: 768px) {
      min-width: calc((100% / 5) * 1.15);
      margin-right: 32px;
    }
    @media (min-width: 992px) {
      min-width: calc((100% / 6) * 1.15);
    }
    @media (min-width: 1200px) {
      min-width: calc(100% / 3);
    }
    &.active {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>