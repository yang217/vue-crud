<style type="text/css">
body{
  padding: 0;
  margin: 0;
}
#app{
}
.det{
    display: flex;
    flex-direction:column;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    height: 100%;
}
.nav{
  display: flex;
  justify-content:center;
  align-items: center;
}
.nav a{
  display: inline-block;
  margin: 5px;
  padding: 3px;
  font-size: 1.3rem;
  color: #EEE;
  text-decoration: none;
  background-color: #065279;
  border-radius: 5px;
}
.footer{
  margin: 25px 0;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}
</style>
<template>
  <div class="det">
    <setting></setting>
    <matrix></matrix>
    <div class="footer">by Tristana.cn</div>
  </div>

</template>
<script>
export default {
  components: {
    setting: require('./setting'),
    matrix:require('./matrix')
  }
}

</script>
