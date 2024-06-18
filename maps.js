function iniciarMap(){
  var coord = {lat:-32.60992433934849 ,lng:-60.95292281628856};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center: coord
  });
  var marker = new google.map.Marker({
    position: coord,
    map:map
  })

}
