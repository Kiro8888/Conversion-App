<template>
          <link rel="stylesheet" href="css/components.css">
  <div class="container">
    <h2 class="title">Converción de temperatura</h2>
    <form @submit.prevent="convertTemperature" class="form">
      <div class="form-group">
        <label for="temperature" class="form-label">Ingresar temperatura:</label>
        <input type="number" id="temperature" v-model="inputTemperature" required class="form-input">
      </div>
      
      <div class="form-group-inline">
        <div class="form-group">
          <label for="fromUnit" class="form-label">De</label>
          <div class="select-container small-select">
            <select id="fromUnit" v-model="fromUnit" class="form-select small-select">
              <option value="c">Celsius</option>
              <option value="k">Kelvin</option>
              <option value="f">Fahrenheit</option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>

        <div class="form-group">
          <label for="toUnit" class="form-label">A</label>
          <div class="select-container small-select">
            <select id="toUnit" v-model="toUnit" class="form-select small-select">
              <option value="c">Celsius</option>
              <option value="k">Kelvin</option>
              <option value="f">Fahrenheit</option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>
      </div>

      <button class="btn" type="submit">
        <strong>Convert</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </button>
    </form>
    
    <div v-if="convertedTemperature !== null" class="result">
      <p class="result-text">Converted Temperature: {{ convertedTemperature }} {{ toUnit }}</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      inputTemperature: null,
      fromUnit: 'c',
      toUnit: 'c',
      convertedTemperature: null
    };
  },
  methods: {
    convertTemperature() {
      const temperature = parseFloat(this.inputTemperature);
      
      switch (this.fromUnit) {
        case 'c':
          this.convertedTemperature = this.convertToCelsius(temperature);
          break;
        case 'k':
          this.convertedTemperature = this.convertToCelsius(temperature - 273.15);
          break;
        case 'f':
          this.convertedTemperature = this.convertToCelsius((temperature - 32) * (5/9));
          break;
        default:
          this.convertedTemperature = null;
      }
    },
    convertToCelsius(temperature) {
      switch (this.toUnit) {
        case 'c':
          return temperature;
        case 'k':
          return temperature + 273.15;
        case 'f':
          return (temperature * 9/5) + 32;
        default:
          return null;
      }
    }
  }
}
</script>
