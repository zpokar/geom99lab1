function initMap() {
  //google map connect and i set the center point and the zoom level 
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 20.291, lng: 20.291 },
      zoom: 3,
      mapTypeId: "terrain",
    });
    //cricle symbology code and we dmentoned scale as well
    const lineSymbol = {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 7,
      strokeColor: "red", // Change stroke color to red
    };
    // location cordinates(i used image logo which i download from:https://icons8.com/icons/set/facebook)
    const locations = [
      { lat: 13.7000, lng: 72.1833, title: "Lakshadweep, India", flag: "icons8-india-48.png" },
      { lat: 44.46169, lng: -63.61826, title: "Crystal Crescent Beach, Halifax, Canada", flag: "icons8-canada-48.png" },
      { lat: 30.176592, lng: -85.805489, title: "Panama Beach, Florida, USA", flag: "icons8-united-states-minor-outlying-islands-48.png" },
      { lat: -30.5595, lng: 22.9375, title: "South Africa", flag: "icons8-south-africa-48.png" },
      { lat: -50.471054, lng: -73.057396, title: "Los Glaciares National Park, Argentina", flag: "icons8-argentina-48.png" },
   ];
    // polyline direction
    const coonectline = new google.maps.Polyline({
      path: locations.map((location) => ({ lat: location.lat, lng: location.lng })),
      icons: [
        {
          icon: lineSymbol,
          offset: "100%",
        },
      ],
      map: map,
    });
    // animated circle flow chart how it is going
    animateCircle(coonectline);
    locations.forEach((location) => {
      const flagIcon={
        url:location.flag,
        scalesize:new google.maps.Size(20,20),
      }
      new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: map,
        title: location.title,
        icon: flagIcon
      });
    });
    }
    //animated circle time 
    function animateCircle(line) {
    let count = 0;
    window.setInterval(() => {
      count = (count + 1) % 200;
      const icons = line.get("icons");
      icons[0].offset = count / 2 + "%";
      line.set("icons", icons);
    }, 200);
    }
//  animation reference:https://developers.google.com/maps/documentation/javascript/examples/overlay-symbol-animate
//  sample map :https://developers.google.com/maps/documentation/javascript/examples/map-simple
// image map marker: https://developers.google.com/maps/documentation/javascript/examples/icon-simple
