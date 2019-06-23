<template>
  <section class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <h2 class="subtitle">
        時間-日付変換器
      </h2>
    </nav>
    <logo/>
    <tab />
    <div class="field">
      <ul>
        <li><input type="text" class="input is-primary hour-field" v-model="hour">時間を</li>
        <li><input type="text" class="input is-primary take-datetime-field" v-model="howDate">日で達成するには1日<strong>「{{takeTime}}」</strong>時間</li>
        <li>1日<input type="text" class="input is-primary  take-datetime-field" v-model="ondDayTime">時間やるなら<strong>「{{takeDates}}」</strong>日かかる</li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import tab from '~/components/tab.vue'

export default {
  components: {
    Logo,
    tab
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
.take-datetime-field{
  width: 45px;
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

</style>

