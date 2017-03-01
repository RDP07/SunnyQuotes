$(document).ready(); {
$(function() {
  var author = $('#author');
  var text = $('#quote-text');
  getQuote(author, text);

  $('#getQuote').click(function(event) {
    event.preventDefault();
    getQuote(author, text);
    $('#tweetOut').removeClass("disabled");
    });
});


 var getQuote = function (author, text) {

  var sunnyURL = "http://sunnyquotes.net/q.php?random&cb=?";

  $.getJSON(sunnyURL, function(data) {
     text.html(data.sqQuote);
    if (data.sqWho) {
      author.html(data.sqWho);
      author.attr("href", data.quoteLink);
    } else {
      author.removeAttr("href");
      author.html("<strong>Anonymous</strong>");
    }
    $(".frank").hide();
    $(".dee").hide();
    $(".dennis").hide();
    $(".charlie").hide();
    $(".mac").hide();
    $(".sunny").hide();
      switch(data.sqWho) {
      case data.sqWho = "Frank Reynolds":
        $(".frank").show();
        break;
        case data.sqWho = "Dee Reynolds":
          $(".dee").show();
          break;
        case data.sqWho = "Dennis Reynolds":
          $(".dennis").show();
          break;
        case data.sqWho = "Charlie Kelly":
          $(".charlie").show();
          break;
        case data.sqWho = "Mac":
          $(".mac").show();
          break;
      default:
        $(".sunny").show();

}
tweet = data.sqQuote + " By - " + data.sqWho;
  });

};

var tweet;
$('#tweet').on("click", function() {
  if (tweet.length > 140) {
    tweet = "";
    $('#tweet').addClass("disabled");
    alert("Sorry! 140 characters exceeded!");
  } else {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?hashtags=' + encodeURIComponent($("#quote-text").text() + " ~" + $("#author").text() + " via goo.gl/UlHRmd") + '&', 'twitterwindow', 'height=450, width=550, top=' + ($(window).height() / 2 - 225) + ', left=' + $(window).width() / 2 + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  }
});
}
