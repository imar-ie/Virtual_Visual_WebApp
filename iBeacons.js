var used = false;

loadBeacons = function(){
    
    var doc ='';
    var req = new XMLHttpRequest();
    req.open("GET", "iBeacons.json", true);
    req.onreadystatechange = readJson;
    req.send(null);

    //This function open and read the JSOn if the request is OK
    function readJson(){
        if (req.readyState == 4) {
            doc = eval('(' + req.responseText + ')');
            for (var i = 0; i < doc.iBeacons.length; i++) {
                // 0 = identifier, 1 = major, 2 = minor, 3 = txCalibrated;
                var beaconInfo = [doc.iBeacons[i].identifier, doc.iBeacons[i].major, doc.iBeacons[i].minor, doc.iBeacons[i].txCalibrated];
                //var beaconInfo = [doc.iBeacons.1.identifier, doc.iBeacons.1.major, doc.iBeacons.1.minor, doc.iBeacons.1.txCalibrated];
                var table = document.getElementById('beaconsTable');
                var row = table.insertRow(-1);
                var myCells = [];
                for (var y = 0; y < 5; y++) {
                    var cell = row.insertCell(-1);
                    myCells.push(cell);
                    if (y == 4) {
                        myCells[y].innerHTML = '<button type="button" class="btn btn-danger" onClick="showModal('+i+')" data-target="#validate" data-toggle="modal">Delete</button>';
                    }else{
                        myCells[y].innerHTML = beaconInfo[y];
                    };
                };
            };
        };
    }
};

deleteBeacon = function(beaconNum){
    console.log('La variable qui m\'est envoyée : ' +beaconNum);
    $.ajax({
        url:'deleteBeacon.php',
        type:'GET',
        data:{
            beacon:beaconNum
        },
        success:function(data){
            dataInt = parseInt(data);
            dataInt +=2;
            console.log('L\'ID du beacon : ' + dataInt);
            var table = document.getElementById('beaconsTable');
            table.deleteRow(dataInt);
            console.log('C\'est une réussite docteur :-D');
            console.log(data);
        }
    });

};

showModal = function(beaconNum){
    console.log('The num : ' + beaconNum);
    var myButton = document.getElementById('popoverValidate');
    myButton.value = "Hello bobby";
    myButton.onclick = function() { deleteBeacon(beaconNum); };
    document.getElementById('validate');
};

addBeacon = function(datas){
    console.log('I add an iBeacon');
    console.log('premiers tests : ' + document.forms["addBeacon"].elements[0]);
    console.log('Les datas envoyées : '+ datas);
};