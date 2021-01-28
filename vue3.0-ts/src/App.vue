<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About', params: { userId: userId }}">About</router-link> |
    <router-link :to="{ path: `/test/${userId}`}">Test</router-link> |
    <router-link :to="{ path: '/detail', query: {plan: userId}}">Detail</router-link>
     <h1>Route props</h1>
      <ul>
        <li><router-link to="/hello">/hello</router-link></li>
        <li><router-link :to="{ name: 'Hello', params: { userId: userId }}" >/helloParams</router-link></li>
        <li><router-link :to="{ path: '/helloquery', query: {plan: userId}}" >/helloquery</router-link></li>
        <li><router-link to="/hello/you">/hello/you</router-link></li>
        <li><router-link to="/static">/static</router-link></li>
        <li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
        <li><router-link to="/attrs">/attrs</router-link></li>
      </ul>
  </div>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      userId: 123
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
