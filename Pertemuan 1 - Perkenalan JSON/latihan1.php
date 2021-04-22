<?php 
// * Merubah array menjadi json data yang dibuat
    // $mahasiswa = [
    //     [
    //         "nama" => 'Kana Hanazawa',
    //         "nim" => '0110214829',
    //         "email" => 'kana@gmail.com'        
    //     ],
    //     [
    //         "nama" => 'Horimiya',
    //         "nim" => '01102143132',
    //         "email" => 'horimiya@gmail.com'        
    //     ]
    //     ];

    // $data = json_encode($mahasiswa);
    // echo $data;

// * Merubah array menjadi json data yang diambil dari database
    $dbh = new PDO('mysql:host=localhost;dbname=phpdasar', 'root', '');
    $db = $dbh->prepare("SELECT * FROM mahasiswa");
    $db->execute();
    $data = $db->fetchAll(PDO::FETCH_ASSOC);

    $mahasiswa = json_encode($data);
    echo $mahasiswa;

?>