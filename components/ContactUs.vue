<template>
  <section class="section section-contact contact">
    <div class="container">
      <h2>contact us</h2>

      <form @submit="submitForm">
        <div class="field">
          <label>first name*
            <span>01</span>
          </label>
          <input type="text" placeholder="first name" v-model="name" minlength="2" maxlength="30" required>
        </div>
        <div class="field">
          <label>company name
            <span>02</span>
          </label>
          <input type="text" placeholder="company name" v-model="company" required>
        </div>
        <div class="field">
          <label>email*
            <span>03</span>
          </label>
          <input type="email" placeholder="email" v-model="email" required>
        </div>
        <div class="field">
          <label>phone number
            <span>04</span>
          </label>
          <input type="tel" placeholder="phone number" minlength="11" maxlength="13" @input="phoneNumberInput" v-model="phone" required>
        </div>
        <div class="field">
          <label>skype
            <span>05</span>
          </label>
          <input type="text" placeholder="skype" v-model="skype" required>
        </div>
        <div class="field field-area">
          <label>how can we help you?
            <span>06</span>
          </label>
          <textarea type="text" placeholder="describe your inquiry" v-model="text" required></textarea>
        </div>
        <div class="field">
          <button type="submit">
            Send
            <svg style="fill: none;stroke: #fff" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.90897 16.2"><line x1="104.90897" y1="8.1" x2="97.9" y2="15.2" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="104.90897" y1="8.1" x2="97.9" y2="1" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="103.5" y1="8.1" y2="8.1" style="stroke-miterlimit: 10;stroke-width: 2px"></line></svg>
          </button>
        </div>
        <Modal v-if="modal"/>
      </form>

    </div>
    <Loader v-if="loader"/>
  </section>
</template>
<script>
export default {
  data() {
    return {
      modal: false,
      loader: false,
      name: null,
      company: null,
      email: null,
      phone: null,
      skype: null,
      text: null,
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
      this.loader = true
      this.$axios.$post('/api/lead', {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          name: this.name,
          company: this.company,
          email: this.email,
          phone: this.phone,
          skype: this.skype,
          text: this.text
        }
      })
        .then(result => {
          if ( result.status != 'success') {
            alert('An error has occurred! Please contact us by email: hello@purpleadlab.com')
          } 
        })

      this.$axios.$post('/api/welcome', {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          name: this.name,
          company: this.company,
          email: this.email,
          phone: this.phone,
          skype: this.skype,
          text: this.text
        }
      })
        .then(result => {
          this.loader = false

          if ( result.status === 'success') {
            this.name = null
            this.company = null
            this.email = null
            this.phone = null
            this.skype = null
            this.text = null
            this.modal = true
          } else {
            alert('An error has occurred! Please contact us by email: hello@purpleadlab.com')
          }
        })
    },
    phoneNumberInput(e) {
      let arr = e.target.value.replace(/[^\dA-Z]/g, '').replace(/[\s]/g, '').split('');
      this.phoneNumber = arr.toString().replace(/[,]/g, '');
    },
  }
}

</script>
<style lang="scss" scoped>
.contact {
  padding-top: 100px;
  padding-bottom: 100px;
  @media(min-width: 768px) {
    min-height: 70vh;
    padding-top: 200px;
  }
  h2 {
    font-weight: 700;
    line-height: 1.2;
    font-size: 45px;
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
  form {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    @media(min-width:576px){
      flex-direction: column;
      height: 400px;
    }
    @media(min-width: 992px){
      height: 500px;
    }
    @media(min-width: 2000px){
      height: 700px;
    }
    @media(min-width: 3000px){
      height: 950px;
    }
    .field {
      width: 100%;
      max-width: 100%;
      @media(min-width:576px){
        max-width: calc(50% - 100% / 6 / 2);
      }
    }

    label {
      width: 100%;
      display: block;
      line-height: 2;
      color: rgba(22, 22, 25, .25);
      font-size: .875rem;
      position: relative;
      @media (min-width: 2000px) {
        font-size: 1.25rem;
      }
      @media (min-width: 3000px) {
        font-size: 2rem;
      }
    }

    input,
    textarea {
      padding: 15px;
      display: block;
      width: 100%;
      background: #efefef;
      font-size: 14px;
      line-height: 1.15;
      border: none;
      color: #161619;
      font-weight: 300;
      letter-spacing: 1px;
      transition: background .25s ease-in-out;
      resize: none;
      margin-bottom: 10px;
      @media (min-width: 992px) {
        padding: 24px 15px;
        font-size: 1.125rem;
        margin-bottom: 18px;
      }
      @media (min-width: 2000px) {
        font-size: 1.5rem;
        margin-bottom: 25px;
      }
      @media (min-width: 3000px) {
        padding: 50px 32px;
        font-size: 2.5rem;
      }
      &::placeholder {
        color: rgba(22, 22, 25, .25);
        font-family: Gilroy, sans-serif;
      }
      &:focus {
        outline: 1px solid #7e10e5 !important;
      }
    }

    textarea{
      height: 130px;
      @media(min-width: 992px){
        height: 184px;
      }
      @media(min-width: 2000px){
        height: 224px;
      }
      @media(min-width: 3000px){
        height: 384px;
      }
    }

    span {
      display: block;
      position: absolute;
      right: -12px;
      top: 7px;
      color: rgba(25, 22, 22, .25);
      font-weight: 600;
      line-height: .9;
      transform: rotate(-90deg) translateY(-100%);
    }

    button[type="submit"]{
      cursor: pointer;
      margin-top: 28px;
      background: none;
      border: 1px solid #7e10e5;
      background: none;
      position: relative;
      display: block;
      width: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: .5s ease;
      font-size: 15px;
      padding: 15px 45px 15px 15px;
      @media(min-width: 992px){
        padding: 24px 45px 24px 15px;
      }
      @media (min-width: 2000px) {
        font-size: 1.25rem;
        margin-top: 40px
      }
      @media (min-width: 3000px) {
        padding: 50px 45px 50px 15px;
        font-size: 2rem;
        margin-top: 64px
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
        border-color: #000;
        color: #000;
        &:before{
          left: 100%
        }
        svg{
          transform: translateX(30px);
          line{
            stroke: #000;
          }
        }
      }
    }
  }
}
</style>
