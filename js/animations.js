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

  $('#tweet-submit').click(function () {
    var tweet = $('#new-tweet-textarea').val();
    var userName = 'Katie Slater';
    if(!tweet.length) return;



    var tweetHTML = '<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/alagoon.jpg" />' +
							'<strong class="fullname">' + userName + '</strong>' +
							'<span class="username"> @katierocks</span>' +
                            '<p class="tweet-text">' + tweet + '</p>' +
							'<div class="tweet-actions">' +
								'<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>'
							+ '</div>'
					+ '</div>';





    $('#stream').prepend(tweetHTML);

    $('#new-tweet-textarea').val('');
    // $('#new-tweet-textarea').css('height', '2.5em');
    $('#tweet-controls').toggle(false);
    $('#char-count').text(140);
  })


  // $('.tweet').hover(function() {
  //   $(this).find('.text-actions').css('visibility', 'visible');
  // }, function() {
  //   $(this).find('.text-actions').css('visibility', 'hidden');
  // });

  $('.tweet').click(function() {
    $(this).find('.stats, .reply').slideDown(200);
  });



});
