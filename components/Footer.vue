<template>
  <footer class="footer">
    <div class="container">

      <div class="footer-contact">
        <div class="footer-title">
          <h2>Ready to get started?</h2>
          <p>Ready to get started?</p>
        </div>
        <nuxt-link to="/" class="footer-btn">
          Start a project
          <svg style="fill: none;stroke: #fff" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.90897 16.2"><line x1="104.90897" y1="8.1" x2="97.9" y2="15.2" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="104.90897" y1="8.1" x2="97.9" y2="1" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="103.5" y1="8.1" y2="8.1" style="stroke-miterlimit: 10;stroke-width: 2px"></line></svg>
        </nuxt-link>
      </div>

      <div class="footer-nav">
        <ul>
          <li><a href="#">privacy policy</a></li>
          <li><a href="#">terms of use</a></li>
          <li>© <span id="year"></span>  Purple AdLab</li>
        </ul>
        <a href="mailto:hello@purpleadlab.com">hello@purpleadlab.com</a>
      </div>

    </div>
  </footer>
</template>

<script>
  export default{
    methods: {
      currentDate() {
        const date = new Date(),
          currentDate = date.getFullYear();
        document.getElementById('year').innerHTML = currentDate;
      }
    },
    mounted() {
      this.currentDate()
    }
  }
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 120px;
  padding-bottom: 60px;
  z-index: 1;
  @media (max-width: 991px) {
    background: #161619;
  }
  @media (min-width: 992px) {
    padding-left: 80px;
  }
  @media(min-width: 1800px){
    padding-left: 140px;
  }
  &-contact {
    margin-bottom: 100px;
    @media (min-width: 992px) {
      margin-bottom: 0;
      display: flex;
    }
  }
  &-title {
    margin-bottom: 65px;
    @media (min-width: 992px) {
      margin-bottom: 146px;
      flex-basis: calc((100% / 6) * 2);
      max-width: calc((100% / 6) * 2);
      margin-right: calc(100% / 6);
    }
    h2 {
      color: #FFF;
      font-size: 45px;
      font-weight: 700;
      line-height: 1.15;
      margin-bottom: 15px;
      @media (min-width: 992px) {
        font-size: 40px;
      }
      @media (min-width: 1800px) {
        font-size: 50px;
      }
    }
    p {
      color: #afafaf;
      line-height: 1.2;
      font-size: 15px;
      font-weight: 500;
      @media (min-width: 1800px) {
        font-size: 25px;
      }
    }
  }
&-btn {
      cursor: pointer;
      background: none;
      border: 1px solid #7e10e5;
      background: none;
      position: relative;
      z-index: 1;
      display: block;
      width: 270px;
      color: #fff!important;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: .5s ease;
      font-size: 15px;
      padding: 20px 45px 20px 15px;
      @media(min-width: 992px){
        flex-basis: calc((100% / 6) * 2);
        max-width: calc((100% / 6) * 2);
        height: 65px;
      }
      @media (min-width: 1200px) {
        flex-basis: calc((100% / 6) * 1.5);
        max-width: calc((100% / 6) * 1.5);
      }
      @media (min-width: 1800px) {
        height: 80px;
        font-size: 25px;
      }
      @media (min-width: 3000px) {
        height: 100px;
        flex-basis: calc((100% / 6) * 1);
        max-width: calc((100% / 6) * 1);
      }
      &:before{
        content: "";
        position: absolute;
        left: 0; top: 0;
        right: 0; bottom: 0;
        z-index: -1;
        background: #7e10e5;
        transition: .5s ease;
      }
      svg{
        position: relative;
        display: block;
        width: 40px;
        transition: .5s ease;
        transform: translateX(10px);
      }
      &:hover{
        border-color: #fff;
        color: #fff;
        &:before{
          left: 100%
        }
        svg{
          transform: translateX(30px);
          line{
            stroke: #fff;
          }
        }
      }
    }
  ul {
    list-style: none;
    padding: 0;
    @media (min-width: 992px) {
      display: flex;
      flex-direction: row-reverse;
      flex-basis: calc((100% / 6) * 3);
      max-width: calc((100% / 6) * 3);
    }
    li {
      color: #afafaf;
      font-size: 15px;
      line-height: 1.2;
      margin-bottom: 32px;
      @media (min-width: 992px) {
        margin-bottom: 0;
        width: calc(100% / 3);
      }
      @media (min-width: 1800px) {
        font-size: 25px;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  a {
    color: #afafaf;
    font-size: 15px;
    line-height: 1.2;
    text-decoration: none;
    transition: color .35s ease-in-out;
    @media (min-width: 992px) {
      width: calc(100% / 6);
    }
    @media (min-width: 1800px) {
      font-size: 25px;
    }
    &:hover {
      color: #7e10e5;
    }
  }
  &-nav {
    display: flex;
    flex: 1 1 45%;
    justify-content: space-between;
    &:last-child {
      align-items: flex-end;
    }
  }
}

.page-contact {
  .footer {
    @media(min-width: 768px){
      min-height: 30vh;
    }
    &-contact {
      display: none;
    }
  }
}
</style>
