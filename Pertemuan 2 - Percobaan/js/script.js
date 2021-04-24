function showAllCars() {
  $.getJSON("data/mobil2.json", function (data) {
    let cars = data.mobil;
    let dollarUSD = Intl.NumberFormat("en-US");
    $.each(cars, function (i, data) {
      $("#car-menu").append(/*html*/ `
        <div class="col-md-4">
            <div class="card mb-5 shadow-sm">
                <img src="img/${data.gambar}" class="card-img-top" alt="brio">
                <div class="card-body">
                    <h5 class="card-text text-center">${data.nama_mobil}</h5>
                    <h3 class="card-text text-center">Rp. ${dollarUSD.format(data.harga)}</h3>
                    <div class="row text-center mt-3">
                        <div class="col-md-4">
                            <p>
                                <span class="fw-bold">${data.transmisi}</span>
                                Transmisi
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p>
                                <span class="fw-bold">${data.bahan_bakar}</span><br>
                                Bahan Bakar
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p>
                                <span class="fw-bold">${data.mesin}</span><br>
                                Mesin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
    });
  });
}

showAllCars();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $(".page-header").html(kategori);

  if (kategori != "Home") {
    $(".jumbotron").addClass("d-none");
  }
  if (kategori == "Home") {
    $(".jumbotron").removeClass("d-none");
    $("#car-menu").html("");
    showAllCars();
    return;
  }

  if (kategori == "All Car") {
    $("#car-menu").html("");
    showAllCars();
    return;
  }

  $.getJSON("data/mobil2.json", function (data) {
    let cars = data.mobil;
    let content = "";
    let dollarUSD = Intl.NumberFormat("en-US");

    $.each(cars, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += /*html */ `
          <div class="col-md-4">
            <div class="card mb-5 shadow-sm">
                <img src="img/${data.gambar}" class="card-img-top" alt="brio">
                <div class="card-body">
                    <h5 class="card-text text-center">${data.nama_mobil}</h5>
                    <h3 class="card-text text-center">Rp. ${dollarUSD.format(data.harga)}</h3>
                    <div class="row text-center mt-3">
                        <div class="col-md-4">
                            <p>
                                <span class="fw-bold">${data.transmisi}</span>
                                Transmisi
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p>
                                <span class="fw-bold">${data.bahan_bakar}</span><br>
                                Bahan Bakar
                            </p>
                        </div>
                        <div class="col-md-4">
                            <p>
                                <span class="fw-bold">${data.mesin}</span><br>
                                Mesin
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
      }
    });
    $("#car-menu").html(content);
  });
});
