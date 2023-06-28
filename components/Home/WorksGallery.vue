<template>
  <div class="column">
    <ul class="column-left">
      <li v-for="(item, index) in workListOne">
        <a :href="item.link">
          <figure>
            <img :src="require(`@/assets/img/work/work-${index + 1}.png`)">
          </figure>
        </a>
        <p v-html="item.text"></p>
      </li>
    </ul>
    <ul class="column-right">
      <li v-for="(item, index) in workListTwo">
        <a :href="item.link">
          <figure>
            <img :src="require(`@/assets/img/work/work_${index + 1}.png`)">
          </figure>
        </a>
        <p v-html="item.text"></p>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      workListOne: [
        {link: '', text: '<b>ZENSE</b>. CG motion design'},
        {link: '', text: '<b>JAVA BLUE</b>. Website, custom animation'},
        {link: '', text: '<b>ZENSE</b>. Branding, Website, Identy'},
        {link: '', text: '<b>BUSINESS PHONE</b>. Website, App'}
      ],
      workListTwo: [
        {link: '', text: '<b>MOON MAGIC</b>. Landing page'},
        {link: '', text: '<b>PURPLE ADLAB</b>. Banners'},
        {link: '', text: '<b>TAHIRO</b>. CG motion design'},
        {link: '', text: '<b>PURPLE KNOWLAGE LAB</b>. Website'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    max-width: calc((100% / 6) * 4);
    flex-basis: calc((100% / 6) * 4);
  }
  &-right {
    @media (min-width: 768px) {
      flex-basis: 46.3%;
      max-width: 46.3%;
    }
  }
  &-left {
    margin-bottom: 40px;
    @media (min-width: 768px) {
      margin-bottom: 0;
      flex-basis: 50%;
      max-width: 50%;
    }
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: #313131;
    line-height: 1;
    @media (min-width: 1800px) {
      font-size: 25px;
    }
    @media (min-width: 3000px) {
      font-size: 35px;
    }
  }
  li {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      a {
        transform: scale3d(0.9, 0.9, 1);
      }
      img {
        transform: scale3d(1.3, 1.3, 1);
      }
    }
  }
  a {
    text-decoration: none;
    display: block;
    position: relative;
    transition: transform 0.75s cubic-bezier(.165, .84, .44, 1);
    figure {
      width: 100%;
      text-align: right;
      font-size: 0;
      margin-bottom: 10px;
      overflow: hidden;
    }
    img {
      transition: transform 0.75s cubic-bezier(.165, .84, .44, 1);
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>