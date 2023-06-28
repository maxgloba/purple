<template>
  <section id="service" class="section section-service service">
    <div class="container">
      <h2>what we do</h2>

      <div class="services-wrap">
        <div class="service-item  anim" v-for="(item,index) in services">
          <div class="service-mob">
            <h3 v-html="item.title"></h3>
          </div>

          <img :src="require(`@/assets/img/whatwedo/service-${index + 1}.png`)">

          <div class="service-content">
            <div class="service-desc">
              <h4>{{ item.number }}</h4>
              <h3 v-html="item.title"></h3>
            </div>
            <div>
              <ul>
                <li v-for="(item,index) in item.list" :class="`del-${(index + 1) * 10}`">{{ item.point }}</li>
              </ul>
              <p v-html="item.text"></p>
              <nuxt-link to="/">
                <svg class="arrow" style="fill: none;stroke: #7E10E5" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.90897 16.2"><g><line x1="104.90897" y1="8.1" x2="97.9" y2="15.2" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="104.90897" y1="8.1" x2="97.9" y2="1" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="103.5" y1="8.1" y2="8.1" style="stroke-miterlimit: 10;stroke-width: 2px"></line></g></svg>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          number: '01',
          title: 'Social <br> Media Ads',
          list: [
            {point: 'Video'},
            {point: 'Images'},
            {point: 'Carousel'},
            {point: 'Optimization'},
            {point: 'Split-Testing'}
          ],
          text: 'Shareable, user-friendly content tailored to your platform of choice.'
        },
        {
          number: '02',
          title: 'Video <br> Production',
          list: [
            {point: 'Product Shots'},
            {point: 'Viral Videos'},
            {point: 'Flat Motion Design'},
            {point: 'CG Motion Design'},
            {point: 'Multi-Video Packages'}
          ],
          text: 'Vivid, high-resolution storytelling that brings your brand to life.'
        },
        {
          number: '03',
          title: 'Web Design Services',
          list: [
            {point: 'Web Development'},
            {point: 'E-Commerce'},
            {point: 'UI Design'},
            {point: 'UX Design'}
          ],
          text: 'PAL develops website of any complexity, from simple landing pages to more intricate blogs and information portals.'
        },
        {
          number: '04',
          title: 'Branding',
          list: [
            {point: 'Brand Personality'},
            {point: 'Market Research'},
            {point: 'Visual Elements'},
            {point: 'Style Guide'}
          ],
          text: 'We help businesses to stand out by providing a holistic branding service: logo, graphics and brand identity.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  padding-top: 60px;
  @media (min-width: 992px) {
    padding-top: 150px;
  }
  @media (min-width: 1200px) {
    padding-top: 200px;
  }
  h2 {
    font-weight: 700;
    line-height: 1.2;
    font-size: 45px;
    margin-bottom: 30px;
    @media (min-width: 992px) {
      margin-bottom: 50px;
      font-size: 75px;
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
    font-weight: 600;
    line-height: 1;
    font-size: 75px;
    color: #161619;
    transform-origin: left center;
    opacity: 0;
    transform: matrix(0, 1, -1, 0, 0, 0);
    transition: transform 0.55s ease, opacity 0.55s ease;
    @media (min-width: 1800px) {
      font-size: 100px;
    }
    @media (min-width: 3000px) {
      font-size: 140px;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 36px;
    color: #161619;
    line-height: 0.8;
    margin: 50px 0 35px;
    @media (min-width: 768px) {
      font-size: 25px;
      margin: 0;
      max-width: 50%;
      flex-basis: 50%;
    }
    @media (min-width: 1200px) {
      font-size: 35px;
      max-width: calc(100% / 3);
      flex-basis: calc(100% / 3);
      margin-left: calc(100% / 3);
    }
    @media (min-width: 1800px) {
      font-size: 45px;
    }
    @media (min-width: 3000px) {
      font-size: 55px;
    }
  }
  p {
    font-size: 15px;
    font-weight: 400;
    color: #afafaf;
    line-height: 1.4;
    @media (min-width: 1200px) {
      width: calc((100% / 3) * 1.30);
    }
    @media (min-width: 1800px) {
      margin-bottom: 40px;
      font-size: 25px;
    }
    @media (min-width: 3000px) {
      font-size: 35px;
    }
  }
  &-mob {
    @media (min-width: 768px) {
      display: none;
    }
  }
  &-desc {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }
  img {
    margin-bottom: 35px;
    display: inline-block;
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
      max-width: calc((100% / 6) * 3);
      flex-basis: calc((100% / 6) * 3);
      margin-right: calc(100% / 6);
    }
    @media (min-width: 1200px) {
      margin-bottom: 0;
      max-width: calc((100% / 6) * 2);
      flex-basis: calc((100% / 6) * 2);
      margin-right: calc(100% / 6);
    }
  }
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
    @media (min-width: 992px) {
      margin-bottom: 15px;
    }
    @media (min-width: 1800px) {
      margin-bottom: 40px;
    }
    li {
      opacity: 0;
      transform-origin: left center;
      font-size: 27px;
      line-height: 0.8;
      font-weight: 600;
      margin-bottom: 22px;
      @media (min-width: 768px) {
        margin-bottom: 10px;
        font-size: 20px;
      }
      @media (min-width: 1200px) {
        font-size: 25px;
      }
      @media (min-width: 1800px) {
        font-size: 30px;
      }
      @media (min-width: 3000px) {
        font-size: 45px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  @for $i from 1 through 2000 {
    .del-#{$i} {
      animation-delay: calc(#{$i}s / 100) !important;
      transition-delay: calc(#{$i}s / 100) !important;
    }
  }
  @keyframes elastic {
    0% {transform: rotateY(-60deg) scale(1);opacity: 0}
    40% {transform: rotateY(0) scaleX(1.1) scaleY(1);opacity: 1}
    60% {opacity: 1;transform: scaleX(0.95) scaleY(1.1);}
    100% {opacity: 1;transform: scale(1);}
  }
  a {
    text-decoration: none;
    display: inline-block;
    width: 53px;
    margin-top: 10px;
    @media (min-width: 1800px) {
      width: 4vw;
    }
    svg {
      transition: .5s ease;
    }
    &:hover {
      svg {
        transform: translateX(5px);
      }
    }
    &:active {
      svg {
        transform: translateX(15px);
      }
    }
  }
  &-item {
    margin-bottom: 50px;
    @media (min-width: 768px) {
      display: flex;
      margin-bottom: 160px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &-content {
    @media (min-width: 768px) {
      max-width: calc((100% / 6) * 3);
      flex-basis: calc((100% / 6) * 3);
    }
    @media (min-width: 1800px) {
      justify-content: space-between;
      display: flex;
      flex-direction: column;
    }
  }
}

.anim-active {
  .service {
    &-content {
      ul {
        li {
          animation: elastic 0.75s ease-out 0.75s forwards;
        }
      }
    }
    &-desc {
      h4 {
        opacity: 1;
        transform: rotateY(0);
      }
    }
  }
}
</style>