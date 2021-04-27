function showMovies() {
  $("#movie-list").html("");
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    dataType: "json",
    data: {
      apikey: "8913c547",
      s: $("#search-input").val(),
    },
    success: function (result) {
      let movies = result.Search;
      if (result.Response === "True") {
        $.each(movies, function (i, data) {
          $("#movie-list").append(/*html*/ `
            <div class="col-md-4">
                <div class="card">
                    <img src="${data.Poster}" class="card-img-top" alt="Poster Film">
                    <div class="card-body">
                        <h5 class="card-title">Title Movies: ${data.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Year Release: ${data.Year}</h6>
                        <p class="card-text">Type Movies: ${data.Type}</p>
                        <a href="#" class="btn btn-primary btn-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${data.imdbID}">See  Details</a>
                    </div>
                </div>
            </div>
            `);
        });
        $("#search-input").val("");
      } else {
        $("#movie-list").html(/*html*/ `
            <div class="col text-center">
                <h1 class="title">${result.Error}</h1>
            </div>
          `);
      }
    },
  });
}

$("#search-button").on("click", function () {
  showMovies();
});

$("#search-input").on("keyup", function (e) {
  if (e.which === 13) {
    showMovies();
  }
});

//  cari btn-detail yang di click di bagian element html setelah id="movie list"
$("#movie-list").on("click", ".btn-detail", function () {
  $.ajax({
    url: "http://www.omdbapi.com",
    type: "GET",
    dataType: "json",
    data: {
      apikey: "8913c547",
      i: $(this).data("id"),
    },
    success: function (result) {
      document.getElementById("titleModal").innerHTML = `${result.Title}`;
      $(".modal-body").html(/*html*/ `
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-5">
                        <img src="${result.Poster}" alt="Poster Film ${result.Title}">
                    </div>
                    <div class="col-md-6">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-action">Title : ${result.Title}</li>
                            <li class="list-group-item list-group-item-action">Years Released: ${result.Year}</li>
                            <li class="list-group-item list-group-item-action">Date Released: ${result.Released}</li>
                            <li class="list-group-item list-group-item-action">Runtime : ${result.Runtime}</li>
                            <li class="list-group-item list-group-item-action">Genre Movies: ${result.Genre}</li>
                            <li class="list-group-item list-group-item-action">Actors: ${result.Actors}</li>
                            <li class="list-group-item list-group-item-action">Movie Country: ${result.Country}</li>
                            <li class="list-group-item list-group-item-action">Rating: ${result.imdbRating}</li>
                        </ul>
                    </div>
                </div>
            </div>
        `);
    },
  });
});
