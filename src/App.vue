<template>
  <div id="app">  
    <div class="app__modal" :class="{ active: show }" @click="onCloseModal(false)">
      <Modal @onCloseModal="onCloseModal" :objNew="objNew"/>
    </div>      
    <div class="app__content" >
      <Header @getTextSearchApp="getInputSearch"/>
      <Body :artList="artList" 
      @getByArt="getByArt" 
      @getByArtBasket="getByArtBasket" 
      @getIdCard="getIdCard"
      />
      <Footer/>
    </div> 
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Body from './components/Body.vue';
import Footer from './components/Footer.vue';
import Modal from './components/modal/Modal.vue';

export default {
  name: 'App',
  components: {    
    Header,
    Body,
    Footer,
    Modal
  },
  data () {
    return {
      artList: [
        {
          id: 1,
          title: '«Рождение Венеры»',
          author: 'Сандро Боттичелли',
          description: 'Картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.',
          image: "art1.jpg",
          slideShow:
            [{name: 'r11.jpg', position: 'first'},          
            { name: 'r41.jpg', position: 'second' }],
          price: '1 000 000 $',
          initiallyPrice: '2 000 000 $',
          buy: false,
          sold: false,
        },
        {
          id: 2,
          title: '«Тайная вечеря»',
          author: 'Леонардо да Винчи',
          description: 'Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495-1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил',
          image: "art2.jpg",
          slideShow: 
            [{name: 'e21.jpg', position: 'first'},          
            { name: 'e41.jpg', position: 'second' }],
          price: '3 000 000 $',
          initiallyPrice: null,
          buy: false,
          sold: false,
        },
        {
          id: 3,
          title: '«Сотворение Адама»',
          author: 'Микеланджело',
          description: 'Картина Микеланджело «Сотворение Адама» создана в 1511 году. Представлена история о наделении Богом жизнью первого мужчины — Адама. Жизненная искра передаётся от пальца Создателя к пальцу человека. Описание картины Микеланджело «Сотворение Адама». Работа расположена в прямоугольнике, размер —3х6 м. Мускулистая мужская фигура поражает красотой. Адам неспешно протягивает руку к Богу.',
          image: "art3.jpg",
          slideShow: 
            [{name: 's11.jpg', position: 'first'},          
            { name: 's21.jpg', position: 'second' }],
          price: '5 000 000 $',
          initiallyPrice: '6 000 000 $',
          buy: false,
          sold: false,
        },
        {
          id: 4,
          title: '«Урок анатомии»',
          author: 'Рембрандт',
          description:'Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш).В своё время он тяжело ранил в Утрехте тюремного охранника и в Амстердаме избил и ограбил человека.За это 31 января 1632 года он был повешен и передан для публичной аутопсии амстердамской гильдии хирургов.',
          image: "art4.jpg",
          slideShow: 
            [{ name: 'd21.jpg', position: 'first' },
            { name: 'd31.jpg', position: 'second' }],
          price: '4 000 000 $',
          initiallyPrice: null,
          buy: false,
          sold: true,
        },
      ],    
      artListTwo: [
        {
          id: 1,
          title: '«Рождение Венеры»',
          author: 'Сандро Боттичелли',
          description: 'Картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.',
          image: "art1.jpg",
          slideShow:
            [{ name: 'r11.jpg', position: 'first' },
            { name: 'r41.jpg', position: 'second' }],
          price: '1 000 000 $',
          initiallyPrice: '2 000 000 $',
          buy: false,
          sold: false,
        },
        {
          id: 2,
          title: '«Тайная вечеря»',
          author: 'Леонардо да Винчи',
          description: 'Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495-1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил',
          image: "art2.jpg",
          slideShow:
            [{ name: 'e21.jpg', position: 'first' },
            { name: 'e41.jpg', position: 'second' }],
          price: '3 000 000 $',
          initiallyPrice: null,
          buy: false,
          sold: false,
        },
        {
          id: 3,
          title: '«Сотворение Адама»',
          author: 'Микеланджело',
          description: 'Картина Микеланджело «Сотворение Адама» создана в 1511 году. Представлена история о наделении Богом жизнью первого мужчины — Адама. Жизненная искра передаётся от пальца Создателя к пальцу человека. Описание картины Микеланджело «Сотворение Адама». Работа расположена в прямоугольнике, размер —3х6 м. Мускулистая мужская фигура поражает красотой. Адам неспешно протягивает руку к Богу. Пожилой мужчина с бородой находится в окружении группы ангелов.',
          image: "art3.jpg",
          slideShow:
            [{ name: 's11.jpg', position: 'first' },
            { name: 's21.jpg', position: 'second' }],
          price: '5 000 000 $',
          initiallyPrice: '6 000 000 $',
          buy: false,
          sold: false,
        },
        {
          id: 4,
          title: '«Урок анатомии»',
          author: 'Рембрандт',
          description: 'Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш).В своё время он тяжело ранил в Утрехте тюремного охранника и в Амстердаме избил и ограбил человека.За это 31 января 1632 года он был повешен и передан для публичной аутопсии амстердамской гильдии хирургов.',
          image: "art4.jpg",
          slideShow:
            [{ name: 'd21.jpg', position: 'first' },
            { name: 'd31.jpg', position: 'second' }],
          price: '4 000 000 $',
          initiallyPrice: null,
          buy: false,
          sold: true,
        },
      ],   
      show: false, 
      objNew: null,
    }
  },
  methods: {
    getInputSearch(text) { 
      let newText = text.toLowerCase()
      if(text === ''){
        this.artList = this.artListTwo;
      }
      this.artList = this.artList.filter((item) => item.title.toLowerCase().includes(newText) ||  item.author.toLowerCase().includes(newText));
    },
    getByArt(id){    
      const idx = this.artList.findIndex((el) => el.id === id);
      const oldItem = this.artList[idx];
      
      let newItem = {
        ...oldItem,
        buy: true,     
      };

      localStorage.setItem(`${id}`, JSON.stringify(newItem))
      this.artList = [...this.artList.slice(0, idx), newItem, ...this.artList.slice(idx + 1)];
    },
    getByArtBasket(id){
      const idx = this.artList.findIndex((el) => el.id === id);
      const oldItem = this.artList[idx];

      let newItem = {
        ...oldItem,
        buy: false,
      };

      localStorage.removeItem(`${id}`);
      this.artList = [...this.artList.slice(0, idx), newItem, ...this.artList.slice(idx + 1)];
    },
    getIdCard(id){  
      const idx = this.artList.findIndex((el) => el.id === id);
      this.objNew = this.artList[idx];     
      this.show = true;
    },
    onCloseModal(value){
      this.show = value;     
    }
  },
  
  mounted () {
    if(localStorage.length !== 0) {      
      let max = Math.max.apply(null, this.artList.map(item => item.id));
      for(let i = 0; i <= max; i+=1){
        if(JSON.parse(localStorage.getItem(`${i}`)) !== null){
          let obj = JSON.parse(localStorage.getItem(`${i}`));
          const idx = this.artList.findIndex((el) => el.id === obj.id);
          this.artList = [...this.artList.slice(0, idx), obj, ...this.artList.slice(idx + 1)];
        }        
      }            
    } 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap');

body{
  padding: 0 0 0 0;
  margin: 0 0 0 0;
}

#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  margin: 0 auto;

  color: #555555;     
}

a{
  font-family: Merriweather;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;

  color: #555555;
}

*{
  box-sizing: border-box;
}
.app__modal{
  width: 100%;
  height: 100%;

  display: none;

  position: fixed;
  overflow: auto;

  background:rgba( 0, 0, 0, 0.85);
  z-index: 100;

  cursor: pointer;
}

.active{
  display: block;
}
</style>
