<template>
  <div class="footer">
    <div class="footer__content">
      <nav class="footer__content-nav content-nav">
        <a href="#">
          <div class="nav__link">Каталог</div>
        </a>
        <a href="#">
          <div class="nav__link">Доставка</div>
        </a>
        <a href="#">
          <div class="nav__link">Оплата</div>
        </a>
        <a href="#">
          <div class="nav__link">Контакты</div>
        </a>
        <a href="#">
          <div class="nav__link">О компании</div>
        </a>
      </nav>
      <div class="footer__block-contacts">
        <div class="contacts__phone">    
          <img class="contacts__phone-icon" src="../assets/phone.svg" alt="иконка телефона">   
          <a href="#"><div class="contacts__phone-number">+7 (812) 555-55-55</div></a>
        </div>
        <div class="contacts__address">  
          <img class="contacts__address-icon" src="../assets/address.svg" alt="иконка адреса">  
          <a href="#"><div class="contacts__address-number">г. Санкт-Петербург, ул. Ефимова, 3</div></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.footer {
  background-color: #ECEAEA;
}

.footer__content {
  max-width: 1244px;
  height: 96px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;
  padding: 0 15px;
}
@media (max-width: 1200px) {
  .footer__content{
    padding: 0 15px;
  }
}
@media (max-width: 1120px) {
  .footer__content{
    height: auto;

    justify-content: center;
    flex-direction: column;
  }
}

.content-nav {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 1110px) {
  .content-nav{
    padding: 20px 0;
  }
}
@media (max-width: 585px) {
  .content-nav{
    justify-content: center;
    flex-wrap: wrap;
  }
}
@media (max-width: 555px) {
  .content-nav{
    padding: 0 0;
  }
}
.nav__link {
  margin: 0 48px 0 0;
}
@media (max-width: 1110px) {
  .nav__link{
    margin: 0 24px 0 24px;
  }
}
@media (max-width: 650px) {
  .nav__link{
    margin: 0px 18px 0 18px;
  }
}
@media (max-width: 555px) {
  .nav__link{
    margin: 20px 18px 0 18px;
  }
}
.footer__block-contacts{
  display: flex;
}
@media (max-width: 1110px) {
  .footer__block-contacts{
    padding: 0 0 20px 0;
  }
}
@media (max-width: 555px) {
  .footer__block-contacts{
    padding: 20px 0 20px 0;
    flex-direction: column;
    align-items: center;
  }
}
.contacts__phone,
.contacts__address{
  display: flex;
}
.contacts__address{
  margin: 0 0 0 54px;
}
@media (max-width: 555px) {
  .contacts__address{
    margin: 10px 0 0 0;
  }
}
.contacts__phone-icon{
  margin: 0 9px 0 0;
}
.contacts__address-icon{
  margin: 0 11px 0 0;
}
</style>