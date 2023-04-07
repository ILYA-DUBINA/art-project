<template>
  <div class="modal" @click="onStop">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">   
          <span class="modal-header__close" @click="onCloseModal"></span>
        </div>        
        <div class="modal-slider">        
          <img-comparison-slider>         
            <img :slot="`${position}`" :src="require(`@/assets/${name}`)" v-for="{name, position} in objNew?.slideShow"/>
          </img-comparison-slider>
        </div>
        <div class="modal-body"> 
          <del class="cost__price-initially">{{ objNew?.initiallyPrice }} {{ this.obj?.initiallyPrice }}</del>
          <div class="modal-body__price">{{ objNew?.price }} {{this.obj?.price}}</div>
          <div class="modal-body__text">{{ objNew?.description }} {{this.obj?.description}}</div>
        </div>
        <div class="modal-footer">
          <button class="modal__button" @click="onCloseModal"> Закрыть </button> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['objNew'],
  data () {
    return {  
      obj: null,      
    }
  },
  methods: {
    onCloseModal(){     
      this.$emit('onCloseModal', false);
    },
    onStop(e){
      e.stopPropagation();
    }
  }, 
}
</script>

<style>
.modal-content{
  max-width: 900px;
  width: 100%;

  padding: 35px;
  border-radius: 30px;
  opacity: 1;

  background: rgba(255, 255, 255, 1);
  z-index: 2000;
}
@media (max-width: 850px) {
  .modal-content{  
    width: 500px;
  }
}
@media (max-width: 690px) {
  .modal-content{  
    width: 350px;

    padding: 20px;
  }
}
@media (max-width: 550px) {
  .modal-content{  
    width: 300px;

    padding: 15px;
  }
}
@media (max-width: 430px) {
  .modal-content{  
    width: 250px;
  }
}
@media (max-width: 370px) {
  .modal-content{  
    width: 200px;
  }
}
.modal{
  position: absolute;
  top: 50%;
  left: 50%;
  
  transform: translate(-50%, -50%);

  z-index: 2000;

  cursor: default;
}
@media (max-width: 780px) {
  .modal{  
    padding: 130px 0 20px 0;
  }
}
.modal__button{
  width: 118px;
  height: 48px;

  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;

  border: none;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;

  color: white;

  background-color: #382E2B;

  cursor: pointer;
}
.modal__button:hover{
  color: #F4F6F9;

  background-color: #776763;
}
.modal-header{
  position: relative; 
}
.modal-header__close{
  cursor: pointer;
}
.modal-header__close::after,
.modal-header__close::before{
  display: inline-block;
  content: '';

  width: 3px;
  height: 40px;

  position: absolute;
  top: -40px;
  right: -90px;

  color: white;
  background-color: white;

  z-index: 2000;

  transform: rotate(45deg);  
}
@media (max-width: 690px) {
  .modal-header__close::after,
  .modal-header__close::before{
    right: -50px;
  }
}
@media (max-width: 550px) {
  .modal-header__close::after,
  .modal-header__close::before{
    right: -40px;
  }
}
.modal-header__close::before{
  transform: rotate(-45deg);
}
.modal-body{
  font-family: Merriweather;
  font-size: 26px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  
  margin: 20px 0 0 0;

  color: #343030;
}
@media (max-width: 690px) {
  .modal-body{  
    font-size: 20px;
    line-height: 24px;
  }
}
.modal-body__text{
  font-size: 16px;
  margin: 20px 0;
}
@media (max-width: 690px) {
  .modal-body__text{  
    font-size: 14px;
  }
}
.modal-slider{
  position: relative;
}

@media (max-width: 850px) {
  img-comparison-slider img{
    width: 100%;
  }
}
</style>