function tampilkanMenu() {
  $.getJSON("./data/pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $("#daftar-menu").append(/*html*/ `<div class="col-md-4">
      <div class="card mb-3">
        <img src="img/pizza/${data.gambar} ?>" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${data.nama}</h5>
          <p class="card-text">${data.deskripsi}</p>
          <h5 class="card-title">Rp ${data.harga}</h5>
          <a href="#" class="btn btn-primary">Pesan Sekarang</a>
        </div>
      </div>
    </div>`);
    });
  });
}

tampilkanMenu();

$(".nav-item").on("click", function () {
  $(".nav-item").removeClass("active");
  $(this).addClass("active");

  // mengganti nama h1 menjadi sesuai click di navbar
  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    $("#daftar-menu").html("");
    tampilkanMenu();
    return;
  }

  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content += /*html */ `<div class="col-md-4">
        <div class="card mb-3">
          <img src="img/pizza/${data.gambar} ?>" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">${data.nama}</h5>
            <p class="card-text">${data.deskripsi}</p>
            <h5 class="card-title">Rp ${data.harga}</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>`;
      }
    });
    $("#daftar-menu").html(content);
  });
});
