$(document).ready(function() {

//text area click

  $('#new-tweet-textarea').click(function() {
    $(this).css('height', '5em');
    $('#tweet-controls').css('display', 'block');
  });

  //text area typing

  $('#new-tweet-textarea').keyup(function() {
    var tweetLength = $(this).val().length;
    $('#char-count').text(140 - tweetLength);

    if(tweetLength >= 130) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', '#999');
    }

    if(tweetLength > 140) {
      $('#tweet-submit').attr('disabled', 'disabled');
    } else {
      $('#tweet-submit').removeAttr('disabled', 'disabled');
    }
  });

  //Tweet event

  $('#tweet-submit').click(function (event) {
    var tweet = $('#new-tweet-textarea').val();
    var userName = 'Katie Slater';
    if(!tweet.length) return;

  var tweetHtml =  '<div class="tweet">'
                  + '<div class="content">'
                  + '<img class="avatar" src="img/damenleeturks.jpg" />'
                  + '<strong class="fullname">' + userName + '</strong>'
                  + '<span class="username">@katierocks</span>'
                  + '<p class="tweet-text">' + tweet + '</p>'
                  + '<div class="tweet-actions">'
                  + '<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div>'
                  + '<div class="stats"><div class="retweets"><p class="num-retweets">30</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">6</p><p>FAVORITES</p></div><div class="users-interact"><div>'
                  + '<img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div></div>'
                  + '<div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>'






    var tweetHTML = '<div>' + userName + '</div>';
    $('#stream').prepend(tweetHTML);

    $('#new-tweet-textarea').nal('');
    $('#char-count').text(140);
  })







});
