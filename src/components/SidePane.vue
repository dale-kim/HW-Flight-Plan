<template>
  <div>
    <div class="panel-body">
      <form>
        <div class="form-group">
          <label for="tailNumber">Tail Number</label>
          <input class="form-control" name="number" autofocus required pattern="[a-zA-Z\s]+" />
        </div>
      </form>
    </div>

    <div class="panel panel-default">
      <form id="myForm">
        <div class="panel-body">
          <h4>Way Points:</h4>
          <div class="form-group">
            <label for="Name">Way-Point Name:</label>
            <input class="form-control" name="name" id="name" />
          </div>
          <div class="form-group">
            <label for="longitude">Longitude:</label>
            <input class="form-control" name="long" id="longitude" />
          </div>
          <div class="form-group">
            <label for="latitude">Latitude:</label>
            <input class="form-control" name="lat" id="latitude" />
          </div>
        </div>
        <button @click="addWayPoint" type="submit" class="btn btn-default">Submit</button>
      </form>
    </div>
    <div class="way-point-list">
      <ul>
        <li v-for="waypoint in waypoints">
          <p>Name: {{waypoint.name}}</p>
          <p>Longitude: {{waypoint.long}}</p>
          <p>Latitude: {{waypoint.lat}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      waypoints: [
        {
          name: "A",
          long: 43.135341,
          lat: -7.6134634
        },
        {
          name: "B",
          long: 34.832112,
          lat: -98.138652
        }
      ],
      currentPlace: null
    };
  },

  methods: {
    addWayPoint: function() {
      waypoints.push({
        name: this.name,
        long: this.longitude,
        lat: this.latitude
      });
      document.getElementById("myForm").reset();
    }
  }
};
</script>

<style>
</style>
