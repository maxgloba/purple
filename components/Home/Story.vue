<template>
  <section id="story" ref="story" class="section section-story story">
    <div class="container">
      <svg class="story-arrow" @click="goScroll" xmlns="http://www.w3.org/2000/svg" width="87" height="105" viewBox="0 0 87 105"><path fill="#000" d="M54 1H35V68.5L14.5 48L1 61.5L43.5 104L86 61.5L72.5 48L54 66.5V1Z"></path><path fill="none" stroke="#000" stroke-width="1" d="M54 1H35V68.5L14.5 48L1 61.5L43.5 104L86 61.5L72.5 48L54 66.5V1Z"></path></svg>
      <h2>our story</h2>
      <div class="story-row">
        <div class="story-right">
          <img src="@/assets/img/story.png">
        </div>
        <div class="story-left">
          <h4>Purple AdLab was bornout of necessity</h4>
          <p>Built on the many lessons we have learned as advertisers. Now, for the first time, we have decided to work with others who value the way we bridge the gap between profitability and aesthetics.</p>
          <p>The Lab’s ads generated $10 million already in ads, copy and websites…so we know our stuff. Give us the opportunity to show you what works with e-commerce, on Facebook, Google, Snapchat, Instagram and Natives and let your profits soar.</p>
          <p>Built on the many lessons we have learned as advertisers. Now, for the first time, we have decided to work with others who value the way we bridge the gap between profitability and aesthetics.</p>
          <p>For us, increasing CTR and creating engaged customers is only half the goal. We also need to make the experience impressive. We need to consider placement. We need to make the audience feel good while they interact with our ads. When we do that, everyone wins.</p>
          <p>We call this The Purple Formula: Data makes the decisions, humans create the experience.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    goScroll() {
      this.$parent.goUp()
    }
  }
}
</script>

<style lang="scss" scoped>
.story {
  padding-top: 100px;
  @media (min-width: 992px) {
    padding-top: 150px;
  }
  @media (min-width: 1200px) {
    padding-top: 200px;
  }
  &-arrow {
    width: 71px;
    display: block;
    margin-left: auto;
    transform: rotate(180deg) translateY(-50%);
    transition: 0.3s ease;
    position: absolute;
    top: 20px;
    right: 20px;
    @media (min-width: 992px) {
      display: none;
    }
    path{
      &:first-child{
        clip-path: polygon(0% 100%, 0% 100%, 100% 100%, 100% 100%);
        transition: clip-path 0.25s ease-in-out;
      }
    }
    &:active, &:focus, &:hover {
      transform: rotate(180deg) translateY(3%) translateY(-50%);
      path {
        &:first-child{
        clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
        }
      }
    }
  }

  &-row {
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
  &-left {
    @media (min-width: 768px) {
      max-width: calc((100% / 6) * 3);
      flex-basis: calc((100% / 6) * 3);
    }
  }
  &-right {
    margin-bottom: 15px;
    @media (min-width: 768px) {
      max-width: calc((100% / 6) * 2);
      flex-basis: calc((100% / 6) * 2);
      margin-bottom: 0;
    }
    img {
      display: block;
      @media (min-width: 3000px) {
        width: 25vw;
      }
    }
  }
  h2 {
    font-weight: 700;
    font-size: 45px;
    line-height: 1.2;
    margin-bottom: 30px;
    @media (min-width: 992px) {
      font-size: 75px;
    }
    @media (min-width: 1200px) {
      margin-bottom: 50px;
      font-size: 95px;
    }
    @media (min-width: 1800px) {
      margin-bottom: 70px;
      font-size: 115px;
    }
  }
  h4 {
    font-weight: 700;
    margin-bottom: 20px;
    font-size: 27px;
    line-height: 1.2;
    @media (min-width: 992px) {
      font-size: 33px;
    }
    @media (min-width: 1200px) {
      font-size: 40px;
    }
    @media (min-width: 1800px) {
      font-size: 50px;
    }
  }
  p {
    font-size: 15px;
    line-height: 1.4;
    font-weight: 500;
    color: #afafaf;
    margin-bottom: 15px;
    @media (min-width: 1800px) {
      font-size: 25px;
    }
    @media (min-width: 3000px) {
      font-size: 35px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
