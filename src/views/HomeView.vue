<!-- src/views/HomeView.vue -->
<template>
    <link rel="stylesheet" href="css/home.css">
    <div class="home">
      <h1>Welcome to the Conversion App</h1>
      <p>Select a conversion type from the navigation menu:</p>
      <ul>
        <li><router-link to="/distance">Distance Conversion</router-link></li>
        <li><router-link to="/temperature">Temperature Conversion</router-link></li>
        <li><router-link to="/weight">Weight Conversion</router-link></li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: 'HomeView'
  }
  </script>
  
