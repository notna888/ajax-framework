function doAjax() {
  $.ajax({url: "page1.html", success: function(result){
      $("#results").append(result);
  }});
}

function doAjax2() {
  $.ajax({url: "page2.html", success: function(result){
      $("#results").append(result);
  }});
}
