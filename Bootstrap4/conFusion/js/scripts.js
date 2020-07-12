$(document).ready(function () {
    $("#mycarousel").carousel({
      interval: 2000
    });
    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("span").hasClass("fa-pause")) {
        $("#mycarousel").carousel("pause");
        $("#carouselButton").children("span").removeClass("fa-pause");
        $("#carouselButton").children("span").addClass("fa-play");
      } else if (
        $("#carouselButton").children("span").hasClass("fa-play")
      ) {
        $("#mycarousel").carousel("cycle");
        $("#carouselButton").children("span").removeClass("fa-play");
        $("#carouselButton").children("span").addClass("fa-pause");
      }
    });
    $("#reservebutton").click(function () {
      $("#exampleModal").modal('toggle');

    });
    $("#loginbutton").click(function () {
      $("#loginModal").modal('toggle');

    });
    $("#exampleModal").on("click", "#closebutton", function () {
      $("#exampleModal").modal("hide");
    });
    $("#exampleModal").on("click", "#cancelbutton", function () {
      $("#exampleModal").modal("hide");
    });
    $("#loginModal").on("click", "#l_cancelbutton", function () {
      $("#loginModal").modal("hide");
    });
    $("#loginModal").on("click", "#l_closebutton", function () {
      $("#loginModal").modal("hide");
    });
  });