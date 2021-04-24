<?php
$data = file_get_contents('data/mobil.json');
$mobil = json_decode($data, true);
$mobil = $mobil["mobil"];
?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">

    <title>Aeda Car Sell</title>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand px-5" href="#"><strong style="color: yellow">Aeda</strong> Car Sell</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" aria-current="page" href="#">All Car</a>
                    <a class="nav-link" aria-current="page" href="#">Transmisi</a>
                    <a class="nav-link" aria-current="page" href="#">Mesin</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- start jumbotron -->
    <div class="jumbotron jumbotron-fluid bg-secondary">
        <div class="container ">
            <h1 class="display-4 pt-3 pb-2 text-center text-light"> <span class="text-warning fw-bold"> You Need The Car? </span> <br> You Must Be Watch Here </h1>
            <p class="lead text-center pb-5 text-light">"All your car needs are on this website, you are satisfied, we are happy"</p>
        </div>
    </div>
    <!-- end jumbotron -->

    <!-- start content -->
    <div class="container">
        <div class="row">
            <?php foreach ($mobil as $car) : ?>
                <div class="col-md-4">
                    <div class="card mb-5 shadow-sm">
                        <img src="img/<?= $car["gambar"]; ?>" class="card-img-top" alt="brio">
                        <div class="card-body">
                            <h5 class="card-text text-center"><?= $car["nama_mobil"]; ?></h5>
                            <h3 class="card-text text-center">Rp. <?= number_format($car["harga"], 2); ?></h3>
                            <div class="row text-center mt-3">
                                <div class="col-md-4">
                                    <p>
                                        <span class="fw-bold"><?= $car["transmisi"]; ?></span>
                                        Transmisi
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p>
                                        <span class="fw-bold"><?= $car["bahan_bakar"]; ?></span><br>
                                        Bahan Bakar
                                    </p>
                                </div>
                                <div class="col-md-4">
                                    <p>
                                        <span class="fw-bold"><?= $car["mesin"]; ?></span><br>
                                        Mesin
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <!-- end content -->








    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
</body>

</html>