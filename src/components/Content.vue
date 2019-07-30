<template>
  <div class="App" />
</template>

<script>
import TempVarChart from "./TempVarChart.vue";
import Highlights from "./Highlights.vue";
import gmapsInit from '../utils/gmaps';

export default {
  // name: "App",
  props: ["highlights", "tempVar"],
  components: {
    "temp-var-chart": TempVarChart,
    "today-highlights": Highlights
  },

  methods: {
    mounted: async function() {
      try {
        const google = await gmapsInit();
        const geocoder = new google.maps.Geocoder();
        const map = new google.maps.Map(this.$el);

        geocoder.geocode({ address: "Austria" }, (results, status) => {
          if (status !== "OK" || !results[0]) {
            throw new Error(status);
          }

          map.setCenter(results[0].geometry.location);
          map.fitBounds(results[0].geometry.viewport);
        });
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>

<style>
.App {
  width: 100vw;
  height: 100vh;
  position: relative;
}
</style>
