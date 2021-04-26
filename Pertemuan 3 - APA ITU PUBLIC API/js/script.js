function tampilMovie() {
  $("#daftar-menu").html("");
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    dataType: "json",
    data: {
      apikey: "8913c547",
      s: $("#search-input").val(),
    },
    success: function (result) {
      if (result.Response == "True") {
        let movies = result.Search;
        $.each(movies, function (i, data) {
          $("#daftar-menu").append(/*html*/ `
          <div class="col-md-4">
            <div class="card mb-3">
              <img src="${data.Poster}" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">${data.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                <a href="#" class="card-link card-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.imdbID}">See Details</a>
              </div>
            </div>
          </div>
        `);
        });
        $("#search-input").val("");
      } else {
        $("#daftar-menu").html(`
          <div class="col">
            <h1 class="text-center">${result.Error}</h1>
          </div>
        `);
      }
    },
  });
}

$("#search-button").on("click", function () {
  tampilMovie();
});

$("#search-input").on("keyup", function (e) {
  if (e.which === 13) {
    tampilMovie();
  }
});

$("#daftar-menu").on("click", ".card-detail", function () {
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    dataType: "json",
    data: {
      apikey: "8913c547",
      i: $(this).data("id"),
    },
    success: function (movie) {
      if (movie.Response === "True") {
        $(".modal-body").html(/*html*/ `
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" alt="Poster img" class="img-fluid">
              </div>
              <div class="col-md-8">
              <ul class="list-group">
                <li class="list-group-item">Title : ${movie.Title}</li>
                <li class="list-group-item">Release : ${movie.Released}</li>
                <li class="list-group-item">Actors : ${movie.Actors}</li>
                <li class="list-group-item">Genre : ${movie.Genre}</li>
                <li class="list-group-item">Plot : ${movie.Plot}</li>
              </ul>
              </div>
            </div>
          </div>
        `);
      }
    },
  });
});
