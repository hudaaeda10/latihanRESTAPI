// * merubah objek menjadi json : JSON.stringfy
// let mahasiswa = {
//   nama: "Kana Hanazawa",
//   nrp: "02201238291",
//   email: "kana@gmail.com",
// };

// let data = JSON.stringify(mahasiswa);
// // console.log(mahasiswa);
// console.log(data);

// * Merubah json menjadi objek - dengan ajax js murni
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let mahasiswa = JSON.parse(xhr.responseText);
//     console.log(mahasiswa);
//   }
// };
// xhr.open("GET", "coba.json", true);
// xhr.send();

// * Merubah json menjadi objek - dengan ajax jquery
$.getJSON("coba.json", function (data) {
  console.log(data);
});
