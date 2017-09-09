<template>
  <div id="app">
    <ul>
      <li><router-link to="/home">首页</router-link></li>
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
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
}
ul {
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0;
  margin: 0 auto;
  list-style-type: none;
  display: inline-flex;
}
li {
  flex: 1;
}
a {
  display: block;
  text-decoration: none;
  color: #000;
  font-size: 18px;
}
a:hover, .router-link-active {
  border-bottom: 2px solid #00b0f0;
}
button {
  padding: 7px 0;
  outline: none;
  text-align: center;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
}
</style>
