<template>
  <aside class="sidebar">

    <nuxt-link to="/" class="sidebar-logo">
      <svg @click="goTop" width="40" height="48" viewBox="0 0 40 48" xmlns="http://www.w3.org/2000/svg" fill="#F2F2F2"><path d="M28.447 31.4513C28.7417 30.1069 27.8908 28.7782 26.5464 28.4836C25.202 28.1889 23.8734 29.0398 23.5787 30.3842C23.284 31.7285 24.135 33.0572 25.4793 33.3519C26.8237 33.6466 28.1524 32.7956 28.447 31.4513Z"></path><path d="M18.82 33.1321C19.2741 31.0605 17.9628 29.013 15.8912 28.559C13.8196 28.1049 11.7721 29.4162 11.318 31.4878C10.8639 33.5594 12.1752 35.6069 14.2469 36.061C16.3185 36.5151 18.366 35.2038 18.82 33.1321Z"></path><path d="M20.5616 21.8163C20.8031 20.7143 20.1056 19.6252 19.0037 19.3837C17.9017 19.1422 16.8126 19.8397 16.5711 20.9416C16.3296 22.0435 17.0271 23.1326 18.129 23.3742C19.2309 23.6157 20.32 22.9182 20.5616 21.8163Z"></path><path d="M33.7856 13.8887L34.6551 9.87773L36.6427 10.3279C38.0505 10.6144 39.4583 9.75495 39.7482 8.36339C40.038 6.97184 39.1685 5.58028 37.7607 5.29378L33.1645 4.31151C31.7981 4.02501 30.473 4.84357 30.1004 6.11235L27.9058 16.0988C33.2059 19.414 35.9802 25.9216 34.1583 32.3882C32.1293 39.5097 24.8831 44.0118 17.5127 42.784C9.14846 41.3515 3.76556 33.3705 5.58746 25.2667C6.95389 19.1275 12.0469 14.7482 18.0095 13.9296L20.2041 3.94315C20.4111 2.63345 19.5416 1.36468 18.1752 1.07818L13.579 0.0549818C12.1712 -0.231515 10.7633 0.627976 10.4735 2.01953C10.1836 3.41109 11.0532 4.80265 12.461 5.08914L14.697 5.58028L13.8689 9.42752C5.50465 12.0879 -0.789205 20.1098 0.0803411 30.3418C0.618631 36.481 4.13822 42.0472 9.56253 45.1578C22.1502 52.3202 36.7255 45.1578 39.5412 32.4701C41.0732 25.4304 38.6716 18.4726 33.7856 13.8887Z"></path></svg>
    </nuxt-link>

    <div class="pagination">
      <div class="pagination-num">
        01
        <ul class="pagination-list">
          <li class="active"></li>
          <li class="story-link"></li>
          <li class="service-link"></li>
          <li class="works-link"></li>
        </ul>
        04
      </div>
    </div>

    <ul class="sidebar-socials">
      <li>
        <a href="https://www.behance.net/purpleadlab" target="_blank">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="white" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M13.5461 4.15413H9.78764V3.22056H13.5464V4.15413H13.5461ZM7.28555 7.9824C7.52806 8.35802 7.64925 8.8141 7.64925 9.34955C7.64925 9.90328 7.51261 10.4 7.23463 10.8388C7.05779 11.1292 6.83822 11.3744 6.5744 11.5719C6.27728 11.8002 5.92551 11.9568 5.52111 12.0405C5.11543 12.1243 4.67633 12.1666 4.20334 12.1666H0V2.83336H4.50744C5.64359 2.85184 6.44907 3.18101 6.92471 3.82747C7.21012 4.22395 7.35153 4.6997 7.35153 5.25269C7.35153 5.82329 7.20841 6.27986 6.92021 6.62675C6.7599 6.82124 6.52307 6.99816 6.20955 7.15784C6.68443 7.33169 7.04475 7.60545 7.28555 7.9824ZM2.15248 6.51299H4.12745C4.53331 6.51299 4.8614 6.43585 5.1141 6.28164C5.36662 6.12767 5.49262 5.85398 5.49262 5.46103C5.49262 5.02688 5.32578 4.73872 4.99131 4.60003C4.70381 4.50367 4.33596 4.45405 3.88961 4.45405H2.15248V6.51299ZM5.68279 9.21623C5.68279 8.73141 5.48463 8.39624 5.08913 8.2164C4.86796 8.11418 4.55591 8.06194 4.1558 8.05821H2.15248V10.5455H4.1248C4.53 10.5455 4.84362 10.4924 5.06995 10.3818C5.47811 10.1783 5.68279 9.79112 5.68279 9.21623ZM14.9406 7.69786C14.986 8.00322 15.0065 8.44625 14.9982 9.02533H10.1306C10.1574 9.69721 10.3894 10.1671 10.8293 10.4359C11.0946 10.6046 11.4162 10.6869 11.7928 10.6869C12.19 10.6869 12.5137 10.5865 12.7629 10.3801C12.8986 10.2707 13.0184 10.1163 13.1219 9.92145H14.9061C14.8593 10.3183 14.6445 10.7208 14.2585 11.1298C13.6603 11.7798 12.8215 12.1058 11.7442 12.1058C10.8542 12.1058 10.0698 11.8309 9.38903 11.2831C8.71049 10.7333 8.36971 9.84173 8.36971 8.60493C8.36971 7.44513 8.67565 6.55742 9.28961 5.93953C9.90583 5.32048 10.7011 5.01237 11.6814 5.01237C12.2624 5.01237 12.7862 5.11623 13.2534 5.32502C13.7192 5.53402 14.1042 5.86295 14.4074 6.31501C14.6818 6.71313 14.8583 7.17347 14.9406 7.69786ZM13.1845 7.87202C13.1517 7.40743 12.9966 7.0558 12.7173 6.81549C12.4403 6.57451 12.0943 6.45353 11.6814 6.45353C11.232 6.45353 10.885 6.58284 10.6384 6.837C10.3902 7.09064 10.2357 7.43547 10.1724 7.87206H13.1845V7.87202Z"></path></g><defs><clipPath id="clip0"><rect width="15" height="15" fill="white" transform="matrix(1 0 0 -1 0 15)"></rect></clipPath></defs></svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/purpleadlab/?igshid=YmMyMTA2M2Y=" target="_blank">
          <svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12.8027 0H2.19727C0.985794 0 0 0.985794 0 2.19727V12.8027C0 14.0142 0.985794 15 2.19727 15H12.8027C14.0142 15 15 14.0142 15 12.8027V2.19727C15 0.985794 14.0142 0 12.8027 0ZM7.5293 11.4258C5.3484 11.4258 3.57422 9.6516 3.57422 7.4707C3.57422 5.2898 5.3484 3.51562 7.5293 3.51562C9.7102 3.51562 11.4844 5.2898 11.4844 7.4707C11.4844 9.6516 9.7102 11.4258 7.5293 11.4258ZM11.9238 4.39453C11.1969 4.39453 10.6055 3.8031 10.6055 3.07617C10.6055 2.34924 11.1969 1.75781 11.9238 1.75781C12.6508 1.75781 13.2422 2.34924 13.2422 3.07617C13.2422 3.8031 12.6508 4.39453 11.9238 4.39453Z"></path><path d="M11.9238 11.4844C11.6813 11.4844 11.4844 11.6813 11.4844 11.9238C11.4844 12.1663 11.6813 12.3633 11.9238 12.3633C12.1663 12.3633 12.3633 12.1663 12.3633 11.9238C12.3633 11.6813 12.1663 11.4844 11.9238 11.4844Z"></path><path d="M7.5293 4.45312C5.83328 4.45312 4.45312 5.83328 4.45312 7.5293C4.45312 9.22531 5.83328 10.6055 7.5293 10.6055C9.22531 10.6055 10.6055 9.22531 10.6055 7.5293C10.6055 5.83328 9.22531 4.45312 7.5293 4.45312Z"></path></svg>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  methods:{
    goTop(){
      if (this.$route.name === 'index') {
        document.getElementById('story').scrollIntoView({block: "start", behavior: "smooth"});
        setTimeout(() => {
          this.$parent.goUp()
        }, 700)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  display: none;
  @media(min-width: 992px) {
    display: flex;
    width: 80px;
    height: 100vh;
    background: #313131;
    z-index: 11;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 20px;
    position: fixed;
    left: 0;
    top: 0;
  }
  @media (min-width: 1200px) {
    padding: 32px 20px;
  }
  @media (min-width: 1800px) {
    width: 140px;
  }

  &-logo {
    display: block;
    text-align: center;
    text-decoration: none;
    margin-bottom: 52px;
    @media (min-width: 3000px) {
      svg {
        width: 80px;
        height: 100px;
      }
    }
    &:hover {
      svg {
        transform: rotate(5deg);
        transition: transform .35s ease-in-out, fill .35s ease-in-out;
        fill: #7e10e5;
      }
    }
  }

  .pagination {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    &-num {
      font-size: 0.875rem;
      font-weight: 600;
      color: #fff;
      @media (min-width: 3000px) {
        font-size: 2rem;
      }
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 13px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 366px;
      @media (min-width: 3000px) {
        height: 650px;
      }
    }
    li {
      margin-top: 14px;
      display: block;
      background: rgba(255, 255, 255, 0.25);
      transition: background 0.35s ease-in-out;
      width: 2px;
      pointer-events: none;
      height: 100%;
      &.active {
        background: rgba(255, 255, 255, 1);
      }
      &:first-child {
        margin-top: 0;
      }
    }
  }

  &-socials {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      font-size: 0;
      margin-bottom: 13px;
      &:last-child {
        margin: 0;
      }
      a {
        text-decoration: none;
        display: block;
        padding: 10px 0;
        @media (min-width: 3000px) {
          padding: 25px 0;
        }
      }
      svg {
        @media (min-width: 3000px) {
          width: 45px;
          height: 45px;
        }
      }
      &:hover {
        svg {
          transform: rotate(5deg);
          transition: transform .35s ease-in-out, fill .35s ease-in-out;
          fill: #7e10e5;
        }
      }
    }
  }
}

.page-contact{
  .sidebar{
    .pagination{
      ul {
        li{
          &.active{
            background: rgba(255, 255, 255, 0.25);
          }
        }
      }
    }
  }
}
</style>