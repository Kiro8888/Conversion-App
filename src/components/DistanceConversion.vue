<template>
        <link rel="stylesheet" href="css/components.css">
  <div class="container">
    <h2 class="title">Converción de Distancia</h2>
    <form @submit.prevent="convertDistance" class="form">
      <div class="form-group">
        <label for="distance" class="form-label">Ingresar distancia:</label>
        <input style="margin-left: -10px;" type="number" id="distance" v-model="inputDistance" required class="form-input">
      </div>
      
      <div class="form-group-inline">
        <div class="form-group">
          <label for="fromUnit" class="form-label">De</label>
          <div class="select-container">
            <select id="fromUnit" v-model="fromUnit" class="form-select">
              <option value="m">Metros</option>
              <option value="km">Kilómetros</option>
              <option value="cm">Centímetros</option>
              <option value="mi">Millas</option>
              <option value="yd">Yardas</option>
              <option value="ft">Pies</option>
              <option value="in">Pulgadas</option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>

        <div class="form-group">
          <label for="toUnit" class="form-label">A</label>
          <div class="select-container">
            <select id="toUnit" v-model="toUnit" class="form-select">
              <option value="m">Metros</option>
              <option value="km">Kilómetros</option>
              <option value="cm">Centímetros</option>
              <option value="mi">Millas</option>
              <option value="yd">Yardas</option>
              <option value="ft">Pies</option>
              <option value="in">Pulgadas</option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>
      </div>

      <button class="btn" type="button submit">
  <strong>Convertir</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
</button>

    </form>
    
    <div v-if="convertedDistance !== null" class="result">
      <p class="result-text">Converted Distance: {{ convertedDistance }} {{ toUnit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputDistance: null,
      fromUnit: 'm',
      toUnit: 'm',
      convertedDistance: null
    };
  },
  methods: {
    convertDistance() {
      const distance = parseFloat(this.inputDistance);
      
      switch (this.fromUnit) {
        case 'm':
          this.convertedDistance = this.convertToMeter(distance);
          break;
        case 'km':
          this.convertedDistance = this.convertToMeter(distance * 1000);
          break;
        case 'cm':
          this.convertedDistance = this.convertToMeter(distance / 100);
          break;
        case 'mi':
          this.convertedDistance = this.convertToMeter(distance * 1609.34);
          break;
        case 'yd':
          this.convertedDistance = this.convertToMeter(distance / 1.09361);
          break;
        case 'ft':
          this.convertedDistance = this.convertToMeter(distance / 3.28084);
          break;
        case 'in':
          this.convertedDistance = this.convertToMeter(distance / 39.3701);
          break;
        default:
          this.convertedDistance = null;
      }
    },
    convertToMeter(distance) {
      switch (this.toUnit) {
        case 'm':
          return distance;
        case 'km':
          return distance / 1000;
        case 'cm':
          return distance * 100;
        case 'mi':
          return distance / 1609.34;
        case 'yd':
          return distance * 1.09361;
        case 'ft':
          return distance * 3.28084;
        case 'in':
          return distance * 39.3701;
        default:
          return null;
      }
    }
  }
}
</script>

