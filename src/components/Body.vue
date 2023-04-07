<template>
  <div class="body">
    <div class="body__content">
      <h1 class="body__content-title">
        Картины эпохи Возрождения
      </h1>
      <div class="body__content-cards">
        <ul class="cards__items" >       
          <Card v-for="(list) in artList" :key="list.id" :list="list"  
          @getByArt="getByArt" 
          @getByArtBasket="getByArtBasket"
          @getIdCard="getIdCard"
          />      
        </ul>
      </div>
    </div>    
  </div>
</template>

<script>
import Card from './Card/Card.vue';

export default {
  name: 'Body',
  props: ['artList'],
  components: {
    Card,
  },
  data () {
    return {}
  },
  methods: {
    getByArt (id) {
      this.$emit('getByArt', id);
    },
    getByArtBasket(id){
      this.$emit('getByArtBasket', id);
    },
    getIdCard(id){
      this.$emit('getIdCard', id);
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

.body{
  max-width: 1332px;
  min-height: calc(100vh - 240px);
  
  margin: 0 auto;
  padding: 0 101px 0 15px;
}
@media (max-width: 1340px) {
  .body{
    padding: 0 15px 0 15px;
  }
}
.body__content-title{
  font-family: Merriweather;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;

  margin: 45px 0 39px 0;
  padding: 0 0 0 0;

  color: #343030;
}
@media (max-width: 1240px) {
  .body__content-title{
    text-align: center;
  }
}
@media (max-width: 760px) {
  .body__content-title{
     margin: 30px 0 23px 0;
  }
}
.cards__items{
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1240px) {
  .cards__items{
    display: grid;
    grid-template-columns: min-content min-content min-content;
    justify-content: center; 

    padding: 0 15px 0 15px;
  }
}
@media (max-width: 950px) {
  .cards__items{  
    grid-template-columns: min-content min-content;    
  }
}
@media (max-width: 630px) {
  .cards__items{  
    grid-template-columns: min-content;    
  }
}
</style>