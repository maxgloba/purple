<template>
  <div class="page page-index" ref="index">
    <Preloader />
    <Header ref="header" />
    <Sidebar />

    <div class="line-wrap">
      <div class="line line-short"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line line-short"></div>
    </div>
    <div ref="wrapperTop" class="wrapper wrapper-top"
      @mousewheel="scrollDown"
      @wheel="scrollDown"
      @scroll="scrollDown"
      @touchstart="touchStart"
      @touchmove="touchMove">
    <HomeBanner />
    </div>

    <div ref="wrapperBottom" class="wrapper wrapper-bottom"
      @mousewheel="scrollTop"
      @wheel="scrollTop"
      @scroll="scrollTop">

      <div class="background background-light" ref="bg">
        <div class="bg-wrap">
          <div class="bg bg-short"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg bg-short"></div>
        </div>
        <HomeStory ref="story" />
        <HomeService />
        <HomeWorks />
      </div>

      <div class="background background-dark" ref="bg">
        <div class="bg-wrap">
          <div class="bg bg-short"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg"></div>
          <div class="bg bg-short"></div>
        </div>
        <Footer />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'home',
  data() {
    return {
      lines: true,
      ios: false,
      touch:{
        startY:0,
        endY:0
      }
    }
  },
  methods: {
    /* scroll from black banner to other page content */
    goDown() {
      this.linesUp()

      this.$refs.wrapperTop.style.transform = 'translateY(-100%)'
      this.$refs.wrapperTop.style.transitionDuration = '1s'
      this.$refs.wrapperTop.style.transitionDelay = '0s'

      this.$refs.wrapperBottom.style.transform = 'translateY(0)'
      this.$refs.wrapperBottom.style.transitionDuration = '2s'
      this.$refs.wrapperBottom.style.transitionDelay = '.5s'

      setTimeout(() => {
        this.$refs.header.$el.classList.add('scrolled')
      }, 500)

      const paginations = document.querySelectorAll('.pagination-list li')
      paginations.forEach(item => item.classList.remove('active'))
      document.querySelector('.pagination-list li:nth-child(2)').classList.add('active')

      const nav = document.querySelectorAll('.nav-list li')
      nav.forEach(item => item.classList.remove('active'))
      document.querySelector('.nav-list li:first-child').classList.add('active')

      setTimeout(()=>{
        this.animation()
      },2000)
    },
    linesUp() {
      if (this.lines) {
        this.lines = false
        const lines = document.querySelectorAll('.line')
        lines.forEach((line, index) => setTimeout(() => line.classList.add('hide'), 100 * index))
      }
    },
    scrollDown(e) {
      if (e.deltaY > 0) {
        this.goDown()
      }
    },
    /* scroll from black banner to other page content */

    /* scroll from page content to the top black banner  */
    scrollTop(e){
      if (this.$refs.wrapperBottom.scrollTop === 0 && e.deltaY < 0) {
        this.goUp()
      }

      this.activeSection()
      this.animation()
    },
    goUp() {
      setTimeout(() => this.linesDown(), 250);

      this.$refs.wrapperTop.style.transform = 'translateY(0)'
      this.$refs.wrapperTop.style.transitionDelay = '1s'

      this.$refs.wrapperBottom.style.transform = 'translateY(100%)'
      this.$refs.wrapperBottom.style.transitionDuration = '1s'
      this.$refs.wrapperBottom.style.transitionDelay = '0s'

      setTimeout(() => {
        this.clearNavigation()
        this.$refs.header.$el.classList.remove('scrolled')
        document.querySelector('.pagination-list li:first-child').classList.add('active')
      }, 500)
    },
    linesDown() {
      if (!this.lines) {
        this.lines = true
        const lines = document.querySelectorAll('.line')
        lines.forEach((line, index) => setTimeout(() => line.classList.remove('hide'), 100 * index))
      }
    },
    /* scroll from page content to the top black banner  */

    /* swipe from top black banner to content for touch screen */
    touchStart(e){
      this.touch.startY = e.touches[0].clientY
    },
    touchMove(e){
      this.touch.endY = e.touches[0].clientY
      const delta = this.touch.startY - this.touch.endY
      if (delta > 0) {
        this.goDown()
      }
    },
    /* swipe from top black banner to content for touch screen */

    animation() {
      const anims = document.querySelectorAll('.anim')
      anims.forEach(anim => {
        if (this.$refs.wrapperBottom.scrollTop > anim.offsetTop + anim.clientHeight / 2) {
          anim.classList.add('anim-active')
        }
      })
    },

    activeSection() {
      const items = ['story', 'service', 'works']
      items.forEach(section => {
        const scrollTop = this.$refs.wrapperBottom.scrollTop + window.outerHeight / 2,
            sectionNode = document.getElementById(section),
            link = document.querySelector(`.${section}-link`),
            links = document.querySelectorAll(`.${section}-link`)

        if (sectionNode.nextElementSibling) {
          if (scrollTop > sectionNode.offsetTop && scrollTop < sectionNode.nextElementSibling.offsetTop) {
            if (!link.classList.contains('active')) {
              this.clearNavigation()
              links.forEach(item => item.classList.add('active'))
            }
          }
        } else {
          if (scrollTop > sectionNode.offsetTop) {
            if (!link.classList.contains('active')) {
              this.clearNavigation()
              links.forEach(item => item.classList.add('active'))
            }
          }
        }
      })
    },
    clearNavigation() {
      const paginations = document.querySelectorAll('.pagination-list li'),
            nav = document.querySelectorAll('.nav-list li')

      paginations.forEach(item => item.classList.remove('active'))
      nav.forEach(item => item.classList.remove('active'))
    },
  },
  mounted() {
    if (localStorage.scrolling) {
      setTimeout(() => {
        this.goDown()
        document.getElementById(localStorage.scrolling).scrollIntoView({block: "start", behavior: "smooth"});
        localStorage.clear('scrolling')
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: Gilroy, sans-serif;
}
.page {
  &-index {
    overflow: hidden;
  }
}
.line {
  transition: height 0.5s ease;
  -moz-transition: height 0.5s ease;
  background: linear-gradient(to right, #161619 calc(100% - 0.5px), #222224 0.5px);
  width: calc((100% - 40px) / 4);
  &:nth-child(3),
  &:nth-child(4) {
    display: none;
  }
  @media(min-width: 768px) {
    width: calc((100% - 80px) / 5);
    &:nth-child(3) {
      display: block;
    }
  }
  @media(min-width: 992px) {
    width: calc((100% - 160px) / 6);
    transition: height 0.75s ease;
    &:nth-child(4) {
      display: block;
    }
  }

  &:nth-child(1) {height: 105vh;}
  &:nth-child(2) {height: 110vh;}
  &:nth-child(3) {height: 115vh;}
  &:nth-child(4) {height: 120vh;}
  &:nth-child(5) {height: 125vh;}
  &:nth-child(6) {height: 130vh;}
  &:nth-child(7) {height: 135vh;}
  &:nth-child(8) {height: 140vh;}

  &-wrap {
    width: 100%;
    left: 0;
    position: fixed;
    display: flex;
    z-index: 1;
    @media(min-width: 992px) {
      width: calc(100% - 80px);
      left: 80px;
    }
    @media (min-width: 1800px) {
      width: calc(100% - 140px);
      left: 140px;
    }
  }
  &-short {
    width: 40px;
    @media(min-width: 992px) {
      width: 80px;
    }
  }
  &.hide {
    height: 0px;
  }
}
.wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  @media (min-width: 992px) {
    left: 80px;
  }
  @media(min-width: 1800px) {
    left: 140px;
  }
  &-top {
    transition: 1.5s ease;
    min-height: 100vh;
    overflow: hidden;
  }
  &-bottom {
    height: 100vh;
    left: 0;
    overflow-x: hidden;
    overflow-y: auto;
    transform: translateY(200%);
    transition: 2s ease;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
