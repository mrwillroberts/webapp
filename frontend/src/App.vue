
<template>
  <div>
    <h1>
      {{name}}
    </h1>
    <button type="button" class="btn btn-primary">
      This is a bootstrap button
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import axios from 'axios';

  export default Vue.extend({
    data: function() {
      return {
        name: '',
      }
    },
    mounted () {
      axios
      .get('/api/greeting?name=Visitor')
      .then(response => (this.name = response.data.content))
    }
  });
</script>

<style>
h1 {
  color: white;
  background-color: black;
}
</style>
