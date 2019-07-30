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
            <input class="form-control" name="name" id="name" ref="wp_name" />
          </div>
          <div class="form-group">
            <label for="longitude">Longitude:</label>
            <input class="form-control" name="long" id="longitude" ref="wp_long" />
          </div>
          <div class="form-group">
            <label for="latitude">Latitude:</label>
            <input class="form-control" name="lat" id="latitude" ref="wp_lat" />
          </div>
        </div>
      </form>
      <button @click="addWayPoint">Submit</button>
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
  props: ["waypoints"],
  data() {
    return {};
  },

  methods: {
    addWayPoint: function() {
      this.waypoints.push({
        name: this.$refs.wp_name.value,
        long: this.$refs.wp_long.value,
        lat: this.$refs.wp_lat.value
      });
    }
  }
};
</script>

<style>
#side-pane {
  margin: 40px;
}
input {
  display: block;
  margin-top: 5px;
  margin-bottom: 15px;
}
.way-point-list ul {
  list-style: none;
}
</style>
