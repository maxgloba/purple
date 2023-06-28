<template>
  <section id="works" class="section section-works works">
    <div class="container">
      <h2>our work</h2>
      <div class="works-wrap">
        <h4>The full-service creative agency</h4>
        <HomeWorksGallery />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.works {
  padding-top: 60px;
  padding-bottom: 150px;
  @media (min-width: 768px) {
    padding-top: 150px;
  }
  @media (min-width: 1200px) {
    padding-top: 200px;
  }
  &-wrap {
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }
  h2 {
    font-weight: 700;
    line-height: 1.2;
    font-size: 45px;
    margin-bottom: 30px;
    @media (min-width: 768px) {
      font-size: 75px;
      margin-bottom: 50px;
    }
    @media (min-width: 1200px) {
      font-size: 95px;
    }
    @media (min-width: 1800px) {
      margin-bottom: 70px;
      font-size: 115px;
    }
  }
  h4 {
    font-size: 27px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 20px;
    @media (min-width: 768px) {
      max-width: calc((100% / 6) * 2.5);
      flex-basis: calc((100% / 6) * 2.5);
      margin-right: 40px;
      margin-bottom: 30px;
    }
    @media (min-width: 992px) {
      font-size: 33px;
      max-width: calc((100% / 6) * 1.5);
      flex-basis: calc((100% / 6) * 1.5);
    }
    @media (min-width: 1200px) {
      font-size: 40px;
    }
    @media (min-width: 1800px) {
      font-size: 50px;
    }
  }
}
</style>