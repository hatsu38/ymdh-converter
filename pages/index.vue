<template>
  <section class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <h2 class="subtitle">
        YMDH変換器
      </h2>
    </nav>
    <logo/>
    <tab />
    <form id="converter">
      <div class="field">
        <input type="text" class="input is-primary" v-model="ymdhNum">
        <div class="select">
          <select v-model="ymdh">
            <option>年</option>
            <option>ヶ月</option>
            <option>日</option>
            <option>分</option>
            <option>秒</option>
          </select>
        </div>
      </div>
    </form>
    <h3 class="is-size-4 has-text-dark">「{{ ymdhNum }} {{ ymdh }}」を変換します</h3>
    <table class="table is-bordered is-fullwidth is-hoverable">
      <tbody class="tbody">
        <tr class="tr">
          <td>{{yearConverted}}年です</td>
        </tr>
        <tr class="tr">
          <td>{{monthConverted}}ヶ月です</td>
        </tr>
        <tr class="tr">
          <td>{{dateConverted}}日です</td>
        </tr>
        <tr class="tr">
          <td>{{hourConverted}}時間です</td>
        </tr>
        <tr class="tr">
          <td>{{minutesConverted}}分です</td>
        </tr>
        <tr class="tr">
          <td>{{secondConverted}}秒です</td>
        </tr>
      </tbody>
    </table>
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
      ymdhNum : 1,
      ymdh    : '年',
      year    : 1,
      month   : 12,
      date    : 365,
      hour    : 24,
      minutes : 60,
      second : 60
    };
  },
  computed: {
    yearConverted: function(){
      switch (this.ymdh) {
        case '年':
          return this.ymdhNum
        case 'ヶ月':
          return Number(this.ymdhNum / 12.000).toFixed(3)
        case '日':
          return Number(this.ymdhNum / 365.000).toFixed(3)
        case '時':
          return Number(this.ymdhNum / (365 * 24)).toFixed(3)
        case '分':
          return Number(this.ymdhNum / (365 * 24 * 60)).toFixed(3)
        case '秒':
          return Number(this.ymdhNum / (365 * 24  * 60 * 60)).toFixed(3)
      }
    },
    monthConverted: function(){
      switch (this.ymdh) {
        case '年':
          return Number(this.ymdhNum * 12.000)
        case 'ヶ月':
          return Number(this.ymdhNum)
        case '日':
          return Number(this.ymdhNum / 30.41667).toFixed(3)
        case '時':
          return Number(this.ymdhNum / (30.41667 * 24)).toFixed(3)
        case '分':
          return Number(this.ymdhNum / (30.41667 * 24 * 60)).toFixed(3)
        case '秒':
          return Number(this.ymdhNum / (30.41667 * 24  * 60 * 60)).toFixed(3)
      }
    },
    dateConverted: function(){
      switch (this.ymdh) {
        case '年':
          return Number(this.ymdhNum * (30.41667 *12)).toFixed(3)
        case 'ヶ月':
          return Number(this.ymdhNum * 30.41667).toFixed(3)
        case '日':
          return this.ymdhNum
        case '時':
          return Number(this.ymdhNum / 24).toFixed(3)
        case '分':
          return Number(this.ymdhNum / (24 * 60)).toFixed(3)
        case '秒':
          return Number(this.ymdhNum / (24  * 60 * 60)).toFixed(3)
      }
    },
    hourConverted: function(){
      switch (this.ymdh) {
        case '年':
          return Number(this.ymdhNum * 24 * 30.41667).toFixed(3)
        case 'ヶ月':
          return Number(this.ymdhNum * 24 * 30.41667).toFixed(3)
        case '日':
          return Number(this.ymdhNum * 24).toFixed(3)
        case '時':
          return this.ymdhNum
        case '分':
          return Number(this.ymdhNum / 24 ,1)
        case '秒':
          return Number(this.ymdhNum / (24 * 60)).toFixed(3)
      }
    },
    minutesConverted: function(){
      switch (this.ymdh) {
        case '年':
          return Number(this.ymdhNum * (60 * 24 * 30.41667 * 12)).toFixed(3)
        case 'ヶ月':
          return Number(this.ymdhNum * (60 * 24 * 30.41667)).toFixed(3)
        case '日':
          return Number(this.ymdhNum * (60 * 24)).toFixed(3)
        case '時':
          return Number(this.ymdhNum * 60).toFixed(3)
        case '分':
          return this.ymdhNum
        case '秒':
          return Number(this.ymdhNum / 60).toFixed(3)
      }
    },
    secondConverted: function(){
     switch (this.ymdh) {
        case '年':
          return Number(this.ymdhNum * 60  * 60 * 24 * 30.41667 * 12).toFixed(3)
        case 'ヶ月':
          return Number(this.ymdhNum * 60  * 60 * 24 * 30.41667).toFixed(3)
        case '日':
          return Number(this.ymdhNum * 60 * 60 * 24).toFixed(3)
        case '時':
          return Number(this.ymdhNum * 60 * 60).toFixed(3)
        case '分':
          return Number(this.ymdhNum * 60).toFixed(3)
        case '秒':
          return this.ymdhNum
      }
    },
  }
}
function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}
</script>

<style>
h3{
  font-size: 18px;
  font-weight: bold;
}
.input{
  width:  70%;
}

</style>

