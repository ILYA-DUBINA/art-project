<template>
  <div class="header">
    <div class="header__content">
      <nav class="header__content-nav content-nav">
        <a href="#"><div class="nav__link">Каталог</div></a>
        <a href="#"><div class="nav__link">Доставка</div></a>
        <a href="#"><div class="nav__link">Оплата</div></a>
        <a href="#"><div class="nav__link">Контакты</div></a>
        <a href="#"><div class="nav__link">О компании</div></a>
      </nav>
      <div class="header__block-search">
        <input class="search__input" type="text" v-bind:value="text" @keyup.enter="getTextSearchApp" @input="getTextSearch" placeholder="Поиск по названию картины"/>
        <button class="search__button" @click="getTextSearchApp">Найти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      text:'',
    }
  },
  methods: {
    getTextSearch(event){
      this.text = event.target.value;   
    },
    getTextSearchApp(){  
      this.$emit('getTextSearchApp', this.text);
    }
  }
}
</script>

<style scoped>
.header{
  border-bottom: 1px solid #E1E1E1;
}

.header__content{
  max-width: 1244px;
  height: 96px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;  
  
  margin: 0 auto;
  padding: 0 62px 0 15px;
}
@media (max-width: 1200px) {
  .header__content{
    padding: 0 15px;
  }
}
@media (max-width: 1050px) {
  .header__content{
    height: auto;

    justify-content: center;
    flex-direction: column;
  }
}
.content-nav{
  display: flex;
  justify-content: space-between;
}
@media (max-width: 650px) {
  .content-nav{
    justify-content: center;
    flex-wrap: wrap;
  }
}
.nav__link{
  margin: 0 48px 0 0;
}
@media (max-width: 1050px) {
  .nav__link{
    margin: 20px 24px 20px 24px;
  }
}
@media (max-width: 650px) {
  .nav__link{
    margin: 20px 18px 0 18px;
  }
}

.header__block-search{
  max-width: 416px;  
}
@media (max-width: 460px) {
  .header__block-search{
    max-width: auto;
  }
}
.search__input{
  width: 294px;
  height: 48px;

  padding-left: 16px;
  border: 1px solid #E1E1E1;
}
@media (max-width: 1050px) {
  .search__input{
    margin: 0 0 20px 0;
  }
}
@media (max-width: 650px) {
  .search__input{
    margin: 20px 0 20px 0;
  }
}
@media (max-width: 450px) {
  .search__input{
    width: 100%;

    margin: 20px 0 5px 0;
  }
}
.search__input:focus{
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

  outline: none;
  border: 1px solid #B5B5B5;

  color: #343030;
}
.search__input::placeholder{
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;

  color: #9F9F9F;
}
.search__button{
  width: 122px;
  height: 48px;

  font-family: Merriweather;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  letter-spacing: 0em;

  border: none;

  color: #FFFFFF;

  background-color: #403432;

  cursor: pointer;
}
@media (max-width: 450px) {
  .search__button{
    width: 100%;

    margin: 0 0 20px 0;
  }
}
.search__button:hover{
  color: #F4F6F9;

  background-color: #776763;
}

</style>