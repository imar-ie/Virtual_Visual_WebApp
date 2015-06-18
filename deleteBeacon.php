<?php

$beaconNum = $_GET['beacon'];

echo $beaconNum;

$json = file_get_contents("iBeacons.json");  //We get the json data in a variable.

$parsed_json = json_decode($json);  //We parse the json to have a php object.

unset($parsed_json ->{'iBeacons'}[$beaconNum]);  //We delete the cell in the tab created with the number of the beacon we sent befor
$newBeaconList = json_encode($parsed_json);


if (!$fp = fopen('iBeacons.json', 'w+')) {
	echo "Echec de l'ouverture du fichier";
	exit;
} else {
	fwrite($fp, $newBeaconList);
	fclose($fp);
}

return $beaconNum;

?>
