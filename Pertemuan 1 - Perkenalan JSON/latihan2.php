<?php 
// * merubah json menjadi array assoc
$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true);
// echo $data;
// var_dump($mahasiswa);
echo $mahasiswa [0]["dosen"]["dosenPembimbing1"];
?>