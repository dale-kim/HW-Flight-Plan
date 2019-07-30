<template>
  <div class="custom-content-card content-card card">
    <div class="panel-body">
        <form>
            <div class="form-group">
                <label for="tailNumber">Tail Number</label>
                <input class="form-control" name="number" autofocus required pattern = "[a-zA-Z\s]+"/>
            </div>
        </form>
    </div>
    
    <div class="panel panel-default">
        <form id="myForm">
            <div class="panel-body">
                <h4>Way Points: </h4>
                <div class="form-group">
                    <label for="Name">Way-Point Name:</label>
                    <input class="form-control" name="name" id="name">
                </div>
                <div class="form-group">
                    <label for="longitude">Longitude:</label>
                    <input class="form-control" name="long" id="longitude">
                </div>
                <div class="form-group">
                    <label for="latitude">Latitude:</label>
                    <input class="form-control" name="lat" id="latitude">
                </div>
            </div>
            <button @click="addWayPoint" type="submit" class="btn btn-default">Submit</button>
        </form>
    </div>
    <!-- <div class="way-point-list">
        <ul>
            <li v-for="waypoint in waypoints">
                <p>Name: {{waypoint.name}}</p>
                <p>Longitude: {{waypoint.long}}</p>
                <p>Latitude: {{waypoint.lat}}</p>
            </li>
        </ul>
    </div> -->
  </div>
</template>

<script>
import UVIndex from "./UVIndex.vue";
import Visibility from "./Visibility.vue";
import WindStatus from "./WindStatus.vue";

export default {
  props: ["highlights"],
  components: {
    "uv-index": UVIndex,
    "visibility": Visibility,
    "wind-status": WindStatus,
  },
};
</script>