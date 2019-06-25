<template>
  <footer>
    <h3 class="subtitle">シェア</h3>
    <ul class="share-btn-block">
      <li class="share-btn">
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://ymdh-converter.web.app/" title="Facebookでシェア" target="_blank" rel="nofollow" class="share-link facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
      </li>
      <li class="share-btn">
        <a href="http://twitter.com/share?url=https://ymdh-converter.web.app/&hashtags=YMDH変換器&text=YMDH変換器は、年-月-日-時-分-秒を簡単に変換できるサービスです" title="Twitterでシェア" target="_blank" rel="nofollow" class="share-link twitter">
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li class="share-btn">
        <a href="http://line.me/R/msg/text/?https://ymdh-converter.web.app/" title="LINEに送る" target="_blank" rel="nofollow" class="share-link line">
          <i class="fab fa-line"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>

</script>

<style>
footer{
  background-color: #fff;
  padding: 0rem 1.5rem 2rem;
}
.subtitle{
  margin: 0;
  padding: 0;
}
.share-btn-block{
  display: flex;
}
ul .share-btn{
  margin: 0 auto;
  width: 30%;
  max-width: 150px;
}
.share-link{
  padding: 1px;
  display: inline-block;
  position: relative;
  font-family: Arial;
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: white;
  border-radius: 5px;
  width: 100%;
}
.facebook {
  background-color: #2e4a88;
  box-shadow: 0 4px 0 #1B3D82;
  text-shadow: 0 -1px -1px #1B3D82;
}
.facebook:hover {
  background-color: #354F84;
}
.facebook:active {
  top: 2px;
	box-shadow: 0 2px 0 #1B3D82;
}
.twitter {
  background-color: #008DDE;
  box-shadow: 0 4px 0 #0078BD;
}
.twitter:active {
  top: 2px;
	box-shadow: 0 2px 0 #0078BD;
}
.twitter:hover {
  background-color: #1397D8;
}
.line {
  background-color: #1dcd00;
  box-shadow: 0 4px 0 #00B900
}
.line:active {
  top: 2px;
	box-shadow: 0 2px 0 #00B900;
}
.line:hover {
  background-color: #2ad10f;
}
</style>
