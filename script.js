import mapboxGL from "mapbox-gl"
import MapboxDirections from "@mapbox/mapbox-gl-directions"

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoiZGltb3JuZyIsImEiOiJjbDMybXZvNjgyNHpzM2pxY2xuazNxc29tIn0.xtTdhFcOOuTwTNUc04f1Cg"

navigator.geolocation.getCurrentPosition(successLocated, failLocated, {
  enableHighAccuracy: true,
})

function setUpMap(coordination) {
  const map = new mapboxGL.Map({
    accessToken: MAPBOX_ACCESS_TOKEN,
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: coordination,
    zoom: 15,
  })

  const userLocation = new mapboxGL.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    trackUserLocation: true,
    showUserHeading: true,
  })
  map.addControl(userLocation)

  const navigationControl = new mapboxGL.NavigationControl()
  map.addControl(navigationControl)

  const directionsControl = new MapboxDirections({
    accessToken: MAPBOX_ACCESS_TOKEN,
  })
  map.addControl(directionsControl, "top-left")
}

function successLocated(location) {
  const userCoordination = [location.coords.longitude, location.coords.latitude]
  setUpMap(userCoordination)
}

function failLocated() {
  const phnomPenhCoordination = [104.888535, 104.888535]
  setUpMap(phnomPenhCoordination)
}
