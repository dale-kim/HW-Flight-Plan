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
            }
        ]
    },
    methods: {
        addWayPoint: function(){

        }
    }
})

var mapview = new Vue({
    el: '#map-view',
    data:{

    }
})