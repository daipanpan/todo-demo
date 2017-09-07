<template>
  <div id="app">
    <ul>
      <li><router-link to="/">首页</router-link></li>
      <li><router-link to="/todo">待办事项</router-link></li>
      <li><router-link to="/food">美食展示</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
  width:500px;
  margin: 0 auto;
  display: inline-flex;
}
li {
  flex: 1
}
</style>
