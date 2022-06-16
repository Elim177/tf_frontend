<template>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link class="rlink" to="/PrimarySymbol">Primary Symbols</router-link>
    |
    <router-link class="rlink" to="/">tf</router-link>
    |
    <router-link class="rlink" to="/about">About</router-link>
    <div id="application">
      <Navbar />
    </div>
  </p>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'application',
  components: {
    Navbar
  },
};
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>


<style lang="sass">
@import "css/colors"
@import "css/global"

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

  .rlink
    color: orange
    text-decoration: none

  max-width: 800px
  margin: auto
</style>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  font-family: 'montserrat', sans-serif;
}

header{
  width: 100vw;
  background-color: #222;
  padding: 15px;

}
</style>

