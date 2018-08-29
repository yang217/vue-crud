<template>
  <div id="app">
		<router-view name='default'></router-view>
    <socket></socket>
	</div>
</template>

<script>
import socket from './components/socket'
export default {
  name: 'app',
  components:{
    socket
  }
}
</script>

<style>
#app{
  max-width: 650px;
  margin: 0 auto;
  background-color: #EEE;
  min-height: 100vh;
}
</style>
