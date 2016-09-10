<?php
if ($_POST == []) {
	$data = file_get_contents('php://input');
	header("Content-Type: application/json");
	$jsonstring = json_encode($data);
	echo json_decode($jsonstring);
} else {
	var_dump($_POST);
}