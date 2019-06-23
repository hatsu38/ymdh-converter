<template>
<div class="tabs is-boxed">
  <ul>
    <router-link tag="li" to="/" exact-active-class="is-active">
      <a href="/">
        <span>YMDF変換器</span>
      </a>
    </router-link>
    <router-link tag="li" to="/timeconvert" exact-active-class="is-active">
      <a href="/timeconvert">
        <span>時間-日付変換器</span>
      </a>
    </router-link>
  </ul>
</div>
</template>

<script>
export default {
  date: function(){
    return {
      ymdfConvert: true,
      datetimeConvert: false
    }
  },
  created () {
  },
  methods: {
    tab: function(pathname){
      if(pathname == "/"){
      this.ymdfConvert = true
      this.datetimeConvert = false
      } else if(pathname == "/timeconvert"){
        this.ymdfConvert = false
        this.datetimeConvert = true
      }
    }
  },
}
</script>
