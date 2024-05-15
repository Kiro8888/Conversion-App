<template>
        <link rel="stylesheet" href="css/nvar.css">
  <div>
    <h1>{{ message }}</h1>
    <div class="container-nav">
      <nav class="navigation">
        <router-link to="/" style="text-decoration: none;" class="nav-link">Inicio</router-link>
        <router-link to="/distance"  style="text-decoration: none;" class="nav-link">Distancia</router-link>
        <router-link to="/temperature" style="text-decoration: none;" class="nav-link">Temperatura</router-link>
        <router-link to="/weight"  style="text-decoration: none;" class="nav-link">Peso</router-link>
      </nav>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: 'Conversion App',
    }
  }
}
</script>

