<template>
  <section class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <img src="logo_img.png" class="logo-title">
      <h2 class="subtitle">時間-日付変換器</h2>
    </nav>
    <logo/>
    <tab />
    <div class="field">
      <ul class="time-concerter-fields">
        <li><input type="number" class="input time-concerter-field is-primary hour-field" v-model="hour">時間を</li>
        <li><input type="number" class="input time-concerter-field take-datetime-field" v-model="howDate">日で達成するには1日<strong>「{{takeTime}}」</strong>時間</li>
        <li>1日<input type="number" class="input time-concerter-field take-datetime-field" v-model="ondDayTime">時間やるなら<strong>「{{takeDates}}」</strong>日かかる</li>
      </ul>
    </div>
    <sharebtn />
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import tab from '~/components/tab.vue'
import sharebtn from '~/components/sharebtn.vue'

export default {
  components: {
    Logo,
    tab,
    sharebtn
  },
  data: function(){
    return{
      hour : 1000,
      howDate : 7,
      ondDayTime: 8
    };
  },
  computed: {
    takeTime: function(){
      return Number(this.hour / this.howDate).toFixed(2)
    },
    takeDates: function(){
      return Number(this.hour / this.ondDayTime).toFixed(2)
    }
  }
}
</script>

<style>
h3{
  font-size: 18px;
  font-weight: bold;
}
.field{
  text-align: left;
  width: 90%;
  margin: 0 auto;
}
ul li{
  margin-bottom: 0.3rem;
}
.hour-field{
  width:  80px;
}
.time-concerter-field{
  border: none;
  border-bottom: 1px solid #00d1b2;
  box-shadow: none;
  border-radius: 0;
  height: auto;
  padding: 0 5px;
}
.time-concerter-field:hover{
  border: none;
  border-bottom: 1px solid #00d1b2;
}
.take-datetime-field{
  width: 50px;
}
.container {
  min-height: 100vh;
  display: block;
  width: 95%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.subtitle{
  padding-top: 2px;
  font-size: 24px;
}
</style>

