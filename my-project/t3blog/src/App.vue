<template>
  <div id="app">
    <MainHeader></MainHeader> 
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/Header"

export default {
  name: 'app',
  components: {
    MainHeader
  }
}
</script>

<style>
body {
  margin: 0;
  color: #706D7F;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#content {
  padding: 100px 0px 60px;
}

a {
  color: #706D7F;
}
</style>
