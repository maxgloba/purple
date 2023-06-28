<template>
  <header>
    <nav class="nav">

      <div class="nav-bar">
        <nuxt-link to="/">
          <svg @click="goTop" width="40" height="48" viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg" fill="#F2F2F2"><path d="M28.447 31.4513C28.7417 30.1069 27.8908 28.7782 26.5464 28.4836C25.202 28.1889 23.8734 29.0398 23.5787 30.3842C23.284 31.7285 24.135 33.0572 25.4793 33.3519C26.8237 33.6466 28.1524 32.7956 28.447 31.4513Z" /><path d="M18.82 33.1321C19.2741 31.0605 17.9628 29.013 15.8912 28.559C13.8196 28.1049 11.7721 29.4162 11.318 31.4878C10.8639 33.5594 12.1752 35.6069 14.2469 36.061C16.3185 36.5151 18.366 35.2038 18.82 33.1321Z" /><path d="M20.5616 21.8163C20.8031 20.7143 20.1056 19.6252 19.0037 19.3837C17.9017 19.1422 16.8126 19.8397 16.5711 20.9416C16.3296 22.0435 17.0271 23.1326 18.129 23.3742C19.2309 23.6157 20.32 22.9182 20.5616 21.8163Z" /><path d="M33.7856 13.8887L34.6551 9.87773L36.6427 10.3279C38.0505 10.6144 39.4583 9.75495 39.7482 8.36339C40.038 6.97184 39.1685 5.58028 37.7607 5.29378L33.1645 4.31151C31.7981 4.02501 30.473 4.84357 30.1004 6.11235L27.9058 16.0988C33.2059 19.414 35.9802 25.9216 34.1583 32.3882C32.1293 39.5097 24.8831 44.0118 17.5127 42.784C9.14846 41.3515 3.76556 33.3705 5.58746 25.2667C6.95389 19.1275 12.0469 14.7482 18.0095 13.9296L20.2041 3.94315C20.4111 2.63345 19.5416 1.36468 18.1752 1.07818L13.579 0.0549818C12.1712 -0.231515 10.7633 0.627976 10.4735 2.01953C10.1836 3.41109 11.0532 4.80265 12.461 5.08914L14.697 5.58028L13.8689 9.42752C5.50465 12.0879 -0.789205 20.1098 0.0803411 30.3418C0.618631 36.481 4.13822 42.0472 9.56253 45.1578C22.1502 52.3202 36.7255 45.1578 39.5412 32.4701C41.0732 25.4304 38.6716 18.4726 33.7856 13.8887Z" /></svg>
        </nuxt-link>
        <button @click.prevent="navAction">
          <span></span>
        </button>
      </div>

      <div class="nav-wrap">
        <ul class="nav-list">
          <li class="story-link"><a href="" @click.prevent="goTo('story')">Our story</a></li>
          <li class="service-link"><a href="" @click.prevent="goTo('service')">Service</a></li>
          <li class="works-link"><a href="" @click.prevent="goTo('works')">Works</a></li>
          <li>
            <nuxt-link to="/">Contact</nuxt-link>
          </li>
        </ul>

        <a class="btn" href="/">
          <span>Hire us</span>
          <svg style="fill: none;stroke: #fff" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.90897 16.2"><g><line x1="104.90897" y1="8.1" x2="97.9" y2="15.2" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="104.90897" y1="8.1" x2="97.9" y2="1" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="103.5" y1="8.1" y2="8.1" style="stroke-miterlimit: 10;stroke-width: 2px"></line></g></svg>
        </a>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    navAction() {
      this.$el.firstElementChild.classList.toggle('nav-active')
      if (this.$el.classList.contains('nav-active')) {
        document.body.classList.add('hidden')
      } else {
        document.body.classList.remove('hidden')
      }
    },
    goTo(id) {
      this.navAction()
      if (this.$route.name === 'index') {
        this.$parent.goDown()

        setTimeout(()=>{
          this.$parent.activeSection()
        }, 500)

        document.getElementById(id).scrollIntoView({block: "start", behavior: "smooth"});
      } else {
        localStorage.scrolling = id
        this.$router.push('/')
      }
    },
    goTop() {
      if (this.$route.name === 'index') {
        document.getElementById('story').scrollIntoView({block: "start", behavior: "smooth"});
        setTimeout(() => {
          this.$parent.goUp()
        }, 700)
      }
    }
  },
  watch: {
    $route(to, from) {
      if (document.querySelector('.nav-active')) {
        document.querySelector('.nav').classList.remove('nav-active')
        document.body.classList.remove('hidden')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  @media (min-width: 992px) {
    padding-left: 80px;
    position: fixed;
    width: 100%;
    z-index: 10;
    left: 0;
    top: 0;
    padding-top: 35px;
  }
  @media (min-width: 1800px) {
    padding-left: 140px;
  }

  .btn {
    display: none;
    @media (min-width: 992px) {
      display: block;
      text-decoration: none;
      padding: 15px 56px 15px 15px;
      border: 1px solid #7e10e5;
      background: transparent;
      overflow: hidden;
      position: relative;
      font-weight: 300;
      color: #fff;
      line-height: 1.15;
      font-size: 15px;
      height: max-content;
      flex-basis: calc(100% / 6);
      max-width: calc(100% / 6);
    }
    @media (min-width: 1400px) {
      padding: 22px 84px 22px 32px;
    }
    @media (min-width: 1800px) {
      font-size: 25px;
    }
    @media (min-width: 3000px) {
      font-size: 1vw;
    }

    &:before {
      content: '';
      background: #7e10e5;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      transition: transform .25s ease-in-out, -webkit-transform .25s ease-in-out;
    }

    svg {
      width: 40px;
      right: 22px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: transform .25s ease-in-out;
      @media (min-width: 1200px) {
        width: 50px;
        right: 32px;
      }
    }

    span {
      position: relative;
    }
    &:hover {
      border: 1px solid #fff;
      &:before {
        transform: translateX(100%);
      }
      svg {
        transform: translate(5px, -50%);
      }
    }
  }

  .nav {
    .nuxt-link-exact-active {
      color: #7e10e5 !important;
    }

    button {
      background: none;
      border: none;
      display: block;
      transition: color .5s ease;
      position: relative;
      width: 25px;
      height: 18px;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        background-color: #fff;
        width: 100%;
        height: 3px;
        top: 0;
        left: 0;
        transition: .2s;
      }
      &:after {
        content: '';
        position: absolute;
        background-color: #fff;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        transition: .2s;
      }
      span {
        opacity: 1;
        display: block;
        position: absolute;
        background-color: #fff;
        width: 100%;
        height: 3px;
        top: 50%;
        right: 0;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }
    }

    &-bar {
      background: #161619;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 60px;
      z-index: 4;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      @media (min-width: 576px) {
        padding: 0 40px;
      }
      svg {
        height: 30px;
        @media (min-width: 576px) {
          height: 40px;
        }
        @media (min-width: 992px) {
          display: none;
        }
      }

      button {
        font-size: 20px;
        line-height: 26px;
        letter-spacing: 0.03em;
        color: #ffffff;
        svg {
          margin-left: 8px;
          display: inline-block;
          vertical-align: middle;
          width: 0px;
          visibility: hidden;
          transition: .5s ease;
          path {
            transition: fill .5s ease;
          }
        }
      }
      @media (min-width: 992px) {
        display: none;
      }
    }

    &-wrap {
      @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        padding: 0 80px;
        align-items: center;
      }
    }

    ul {
      @media (max-width: 991px) {
        background: #161619;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        z-index: 3;
        padding: 0 16px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transform: translate(100%, 0);
        transition: transform .5s ease-in-out;
      }
      @media (min-width: 992px) {
        height: 50px;
        padding: 0;
        display: flex;
        align-items: center;
        flex-basis: calc((100% / 6) * 4);
        max-width: calc((100% / 6) * 4);
      }
    }

    li {
      @media (max-width: 991px) {
        color: #ffffff;
        font-weight: 700;
        font-size: 65px;
        line-height: 1.15;
        transition: color .5s ease;
        &:hover {
          color: #7e10e5;
        }
      }
      overflow: hidden;
      color: #DDD9D2;
      @media(min-width: 992px) {
        width: calc(100% / 4);
      }
      a {
        position: relative;
        display: inline-block;
        text-decoration: none;
        font-weight: 300;
        color: #fff;
        padding: 2px 0 2px 58px;
        margin-left: -58px;
        will-change: margin;
        transition: margin 0.35s ease-in-out, color 0.35s ease-in-out;
        font-size: 15px;
        @media (min-width: 1800px) {
          font-size: 25px;
        }
        @media (min-width: 3000px) {
          font-size: 1vw;
        }
        @media (max-width: 992px) {
          font-size: 67px;
          font-weight: 700;
          margin-left: 0;
          padding: 0;
          &:before {
            display: none;
          }
          &:hover {
            margin: initial;
            color: #fff;
          }
        }
        &:before {
          content: '';
          position: absolute;
          width: 40px;
          height: 1px;
          background: #fff;
          left: 0;
          top: 50%;
          transition: background-color 0.35s ease-in-out;
        }
        &:hover {
          color: #7e10e5;
          margin: 0;
        }
      }
      &.active {
        a {
          color: #7e10e5 !important;
        }
      }
    }

    &-active {
      @media (max-width: 991px) {
        ul {
          transform: translate(0, 0);
        }

        .nav-bar {
          button {
            &:before {
              transform: rotate(45deg);
              transition: transform .2s;
              top: 33%;
              border-radius: 4px;
            }
            &:after {
              transform: rotate(140deg);
              transition: transform .2s;
              bottom: 50%;
              border-radius: 4px;
            }
            span {
              opacity: 0;
            }
          }
        }
      }
    }
  }

  &.scrolled {
    @media (min-width: 992px) {
      .btn {
        background: rgba(255, 255, 255, 70%);
        &:hover {
          border: 1px solid #000;
          color: #000;
          svg {
            g {
              stroke: #000;
            }
          }
        }
      }
      .nav {
        ul {
          li {
            a {
              color: #000;
              &:before {
                background: #000;
              }
              &:hover {
                color: #7e10e5;
              }
            }
          }
        }
      }
    }
  }
}

.page-contact {
  header {
    @media (min-width: 992px) {
      .btn {
        background: rgba(255, 255, 255, 70%);
        &:hover {
          border: 1px solid #000;
          color: #000;
          svg {
            g {
              stroke: #000;
            }
          }
        }
      }
      .nav {
        ul {
          li {
            a {
              color: #000;
              &:before {
                background: #000;
              }
              &:hover {
                color: #7e10e5;
              }
            }
          }
        }
      }
    }
  }
}
</style>
