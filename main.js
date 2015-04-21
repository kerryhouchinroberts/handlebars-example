$(function(){
  var source = $("#reddit-template").html();
  var template = Handlebars.compile(source);


  $.ajax({
    url: "http://www.reddit.com/r/pixelart.json"
  }).done(function(data) {

    var subReddits = data.data.children;

    var html    = template(subReddits);
    $('body').append(html);
  });


});
