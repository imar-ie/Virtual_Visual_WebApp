/*angular.module('starter.services', [])

.factory('IBeacon', function($timeout){

  loadBeacons = function(){
  console.log('ici, c\'est mieux ');

  var luuid = '', lidentifier = '', lminor = '', lmajor = '', ltxCalibrated = ''; 

    var req = new XMLHttpRequest();
    req.open("GET", "iBeacons.json", true);
    req.onreadystatechange = readJson;
    req.send(null);
    var doc ='';


    function readJson(){
        if (req.readyState == 4) {
            doc = eval('(' + req.responseText + ')');
            for (var i = 0; i < 2; i++) {
                console.log('value of uuid : ' + doc.iBeacons[0].identifier)
                var identifier = document.getElementById('identifier1');
                console.log('identifier cellule : '  +identifier.innerhtml)
                identifier.innerhtml = doc.iBeacons[0].identifier;
            };
            
            console.log('value of identifier : ' + doc.iBeacons[1].identifier);
        };
    }
  };

  return {
    loadBeacons:loadBeacons
  }


 
});
*/