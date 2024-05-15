<template>
          <link rel="stylesheet" href="css/components.css">
  <div class="container">
    <h2 class="title">Converción de peso</h2>
    <form @submit.prevent="convertWeight" class="form">
      <div class="form-group">
        <label for="weight" class="form-label">Ingresar peso</label>
        <input type="number" id="weight" v-model="inputWeight" required class="form-input">
      </div>
      
      <div class="form-group-inline">
        <div class="form-group">
          <label for="fromUnit" class="form-label">De</label>
          <div class="select-container small-select">
            <select id="fromUnit" v-model="fromUnit" class="form-select small-select">
              <option value="kg">Kilogramos</option>
              <option value="g">Gramos</option>
              <option value="t">Toneladas métricas</option>
              <option value="lb">Libras</option>
              <option value="oz">Onzas</option>
            </select>
            <span class="select-arrow"></span>
          </div>
        </div>

        <div class="form-group">
          <label for="toUnit" class="form-label">A</label>
          <div class="select-container small-select">
            <select id="toUnit" v-model="toUnit" class="form-select small-select">
              <option value="kg">Kilogramos</option>
              <option value="g">Gramos</option>
              <option value="t">Toneladas métricas</option>
              <option value="lb">Libras</option>
              <option value="oz">Onzas</option>
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
    
    <div v-if="convertedWeight !== null" class="result">
      <p class="result-text">Converted Weight: {{ convertedWeight }} {{ toUnit }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputWeight: null,
      fromUnit: 'kg',
      toUnit: 'kg',
      convertedWeight: null
    };
  },
  methods: {
    convertWeight() {
      const weight = parseFloat(this.inputWeight);
      
      switch (this.fromUnit) {
        case 'kg':
          this.convertedWeight = this.convertToKilograms(weight);
          break;
        case 'g':
          this.convertedWeight = this.convertToKilograms(weight / 1000);
          break;
        case 't':
          this.convertedWeight = this.convertToKilograms(weight * 1000);
          break;
        case 'lb':
          this.convertedWeight = this.convertToKilograms(weight * 0.453592);
          break;
        case 'oz':
          this.convertedWeight = this.convertToKilograms(weight * 0.0283495);
          break;
        default:
          this.convertedWeight = null;
      }
    },
    convertToKilograms(weight) {
      switch (this.toUnit) {
        case 'kg':
          return weight;
        case 'g':
          return weight * 1000;
        case 't':
          return weight / 1000;
        case 'lb':
          return weight / 0.453592;
        case 'oz':
          return weight / 0.0283495;
        default:
          return null;
      }
    }
  }
}
</script>
