<template>
  <div class="modal">
    <div class="container">
      <button class="modal-close" @click="closeModal">+</button>
      <h1>Thank you for your message!</h1>
      <p>Our manager will call you soon</p>
      <a href="/">
        Website
        <svg style="fill: none;stroke: #fff" data-name="Ebene 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.90897 16.2"><line x1="104.90897" y1="8.1" x2="97.9" y2="15.2" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="104.90897" y1="8.1" x2="97.9" y2="1" style="stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 2px"></line><line x1="103.5" y1="8.1" y2="8.1" style="stroke-miterlimit: 10;stroke-width: 2px"></line></svg>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      closeModal(e) {
        e.preventDefault()
        this.$parent.modal = false
      }
    },
  }
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  padding: 30px 15px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);
  @media(min-width: 992px) {
    padding: 60px 15px;
  }
  .container {
    background: #fff;
    max-width: 100%;
    width: 600px;
    padding: 60px 15px 30px 15px;
    position: relative;
    z-index: 2;
    margin: 0 auto;
    transition: 1s ease-in-out;
    transform: translate(0, 0%);
    opacity: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    box-shadow: 0 0 10px rgb(0 0 0 / 40%);
  }
  &-close {
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    padding: 0;
    font-size: 40px;
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    color: #5d5d5d;

    &:hover {
      opacity: .7;
      cursor: pointer;
    }
  }
  h1 {
    font-weight: 800;
    line-height: 1;
    font-size: 36px;
    margin-bottom: 30px;
    color: #7e10e5;
    @media(min-width: 768px){
      margin-bottom: 40px;
      font-size: 45px;
    }
  }

  p {
    font-weight: 400;
    line-height: 1;
    font-size: 15px;
    color: #000;
    margin-bottom: 40px;
    @media(min-width: 768px){
      font-size: 20px;
    }
  }
  a{
    max-width: 200px;
    margin: 0 auto;
    text-decoration: none;
    cursor: pointer;
    height: 40px;
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
    font-size: .875rem;
    padding: 0 45px 0 15px;
    @media (min-width: 2000px) {
      font-size: 1.25rem;
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
</style>