var name = document.getElementById("name");
var longitude = document.getElementById("longitude");
var latitude = document.getElementById("latitude");

var sidepane = new Vue({
    el: '#side-pane',
    data:{
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
            },
            {
                name: "C",
                long: -38.9463256,
                lat: 7.865736
            },
            {
                name: "D",
                long: 12.744729,
                lat: 7.518548
            },
            {
                name: "E",
                long: -87.523898,
                lat: 97.868758
            }
        ]
    },
    methods: {
        addWayPoint: function(){
            waypoints.push({name: this.name, long: this.longitude, lat: this.latitude})
            document.getElementById("myForm").reset();
        }
    }
})

var mapview = new Vue({
    el: '#map-view',
    data:{

    }
})