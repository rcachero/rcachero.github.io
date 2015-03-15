//Lightbox for photo grid

$("#photo-grid a").click(function () {
  event.preventDefault();
  var src = $(this).attr("src");
  console.log(src);
});
