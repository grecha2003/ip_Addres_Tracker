import L from 'leaflet';

export function addTileLayer(map) {
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnVycnViaW4iLCJhIjoiY2t5bGxzdTJ2MzdpbzJ3bzg3ODdma3B6cyJ9.wxzyhjQ1UNFfs6F8Xv-KDg',
    {
      attribution:
        'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a target="blank" href="https://github.com/grecha2003/ip_Addres_Tracker">David Tamliani</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);
}
