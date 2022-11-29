<template>
  <div id="app">
    <!-- <dataCalculator></dataCalculator>
    <About></About> -->
      <ul>
          <li>
              <router-link to="/">About</router-link>
          </li>
          <li>
              <router-link to="/dataCalculator">Calculator</router-link>
          </li>
      </ul>
      <router-view></router-view>
  </div>
  </template>
  
  <script>
//   import dataCalculator from './components/dataCalculator.vue';
//   import About from './components/AboutPage.vue'
  export default {
      name: 'App',
      components: {
        // dataCalculator,
        // About
      }
  };
  </script>
  
  <style>
  #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
  }
  </style>
  