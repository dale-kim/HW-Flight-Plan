<template>
  <!-- <div>
    <gmap-map :center="center" :zoom="12" style="width:100%; height: 100vh;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>-->

  <div id="map"></div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: {lat: 39.0976114, lng:-98.7670928},
      markers: [],
      places: [],
      currentPlace: null,
      map: null
    };
  },

  mounted: function() {
    // this.geolocate();
    // const element = document.getElementById("map");
    // const options = {
    //   zoom: 14,
    //   center: this.center
    // };
    // this.map = new google.maps.Map(element, options);

    this.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {lat: 39.0976114, lng:-98.7670928},
      mapTypeId: "terrain"
    });

    map.addListener('click', addLatLng);
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace: function(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },

    addLatLng: function(event) {
        // path = poly.getPath();

        // Because path is an MVCArray, we can simply append a new coordinate
        // and it will automatically appear.
        // path.push(event.latLng);

        // Add a new marker at the new plotted point on the polyline.
        var marker = new google.maps.Marker({
            position: event.latLng,
            title: '#' + path.getLength(),
            map: map
        });
    },

    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 100vh;
  /* margin: 0 auto;
  background: gray; */
}
</style>
