<template>
  <li class="cards__items-inside">
    <div class="cards__sold" :class="{ sold: list.sold}"></div>
    <div class="inside__content">
      <div class="inside__content-image" @click="getIdCard(list.id)">
        <img class="inside__content-img" :src="require(`@/assets/${list.image}`)" alt="изображение картины">
      </div>  
      <h3 class="inside__content__title" @click="getIdCard(list.id)">{{list.title}} {{ list.author }}</h3>      
      <div class="inside__content-cost">
        <div class="cost__price" v-if="!list.sold" >
          <del class="cost__price-initially">{{ list.initiallyPrice }}</del>
          <div class="cost__price-now">{{ list.price }}</div>
        </div>      
        <button class="cost__button" :class="{ active: blocked }" @click="getByArt(list.id)" v-if="!buyPreloader && !list.buy && !list.sold ">   
          Купить         
        </button>
        <div class="cost__processed" v-if="buyPreloader && !list.sold">          
          <Preloader/>  
        </div>   
        <button class="cost__button-basket" :class="{ active: blocked }" @click="getByArtBasket(list.id)" v-if="!buyPreloader && list.buy && !list.sold ">   
          В корзине       
        </button>
        <div class="inside__content-sold" v-if="list.sold" >Продана на аукционе</div> 
      </div>    
    </div>
  </li>
</template>

<script>
import Preloader from '../preloader/Preloader.vue';

export default {
  name: 'Card',
  components: {
    Preloader,
  },
  props: ["list"],
  data(){
    return {   
      buyPreloader: false,     
      blocked: false, 
    }
  },
  methods: {
    getByArt(id){
      this.$emit('getByArt', id);
      this.buyPreloader = true;    
      this.blocked = true;  
      setTimeout(()=> {this.buyPreloader = false; this.blocked = false}, 2000);      
    },
    getByArtBasket(id){
      this.$emit('getByArtBasket', id);
      this.buyPreloader = true;         
      this.blocked = true;
      setTimeout(() => { this.buyPreloader = false; this.blocked = false}, 2000);
    },
    getIdCard(id){
      this.$emit('getIdCard', id);
    }
  }
}
</script>

<style>
.inside__content{
  width: 280px;

  border: 1px solid #E1E1E1;
}
.inside__content-image{
  position: relative;

  overflow: hidden;
  cursor: pointer;
}
.inside__content__title{
  font-family: Merriweather;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;

  margin: 20px 0 22px 24px;

  color: #343030;
  cursor: pointer;
}
.inside__content-cost{
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 24px 24px 24px;
}
.cost__price-initially{
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

  color: #A0A0A0;
}
del {
	text-decoration: line-through;
	text-decoration-color: #A0A0A0;
}
.cost__price-now{
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #343030;
}
.cost__button,
.cost__button-basket{
  width: 118px;
  height: 48px;

  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;

  border: none;

  color: #F4F6F9;

  background-color: #382E2B;

  cursor: pointer;
}
.cost__button-basket{
  width: 118px;

  text-align: right;

  padding: 0 9px 0 0;

  background-image: url('../../assets/V.svg');
  background-repeat: no-repeat;
  background-position: 10px 17px;
  background-color: #5B3A32;
}
.cost__button:hover{
  color: #F4F6F9;

  background-color: #776763;
}
.inside__content-sold{
  font-family: Merriweather;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

  color: #343030;
}
.cards__items-inside{
  display: inline-block;

  position: relative;

  padding: 0 0 0 0;
  margin: 0 32px 32px 0;
}
@media (max-width: 1240px) {
  .cards__items-inside{
    margin: 0 16px 32px 16px;
  }
}
@media (max-width: 640px) {
  .cards__items-inside{
    margin: 0 16px 22px 16px;
  }
}
.cards__items-inside:last-child{
  margin: 0 0 32px 0;
}
@media (max-width: 1240px) {
  .cards__items-inside:last-child{
    margin: 0 16px 32px 16px;
  }
}
@media (max-width: 640px) {
  .cards__items-inside:last-child{
    margin: 0 16px 25px 16px;
  }
}
.cost__processed{
  position: relative;
  top: -40px;
  left: -95px;
}

.active{
  display: none;
}
.cards__sold{
  width: 100%;
  height: 100%;

  display: none;
  
  position: absolute;
  top: 0;
  left: 0;

  background-color: rgba(255, 255, 255, 0.7);

  z-index: 50;
}
.sold{
  display: block;
}
</style>