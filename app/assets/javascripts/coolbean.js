$(document).ready(function () {
  $(".search-bar").keypress(function (e) {
    e.preventDefault();
    // debugger
    if (e.which == 13) {
      $("watsons-response").display("show"); 
    } else if ($(".search-bar").value() === ""){
      $("watsons-response").display("none"); 
    } else {
      console.log("help")
    }
  });
});
