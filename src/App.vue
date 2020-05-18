<template>
  <div id="app">
    
  </div>
</template>

<script>
import panel from './components/search-panel.vue'
import result from './components/result.vue'
export default {
  name: 'app',
  components: {
    panel, result
  },
 
}
</script>

<style>
html{
  height: 100%;
}

body{
  height: 100%;
  background: black;
  background-size: 100% 100%;

}

#app{
  color: #2c3e50;
  width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  /* text-align: center;
  position: relative;
  top: 35%; */
  /* left: 50%;
  margin-left: -300px; */

}
</style>
