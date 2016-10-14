/**
 * Created by Rachel on 2016. 8. 25..
 */

$(function() {
  'use strict';

  var prefix = 'http://localhost:3000';

  $('#start').on('click', function (e) {
    e.preventDefault();

    location.href = '/survey';
  });

  $('#normal-login').on('click', function (e) {
    e.preventDefault();

    var data = {
      username: $('#username').val(),
      password: $('#password').val()
    }

    $.ajax({
      url: '/login/normal',
      dataType: 'json',
      type: 'POST',
      data: data,
      success: function(result) {
        if(result.status == 'success') {
          location.href = '/certificate/dashboard';
        } else {
          var path = result.path;
          alert('사용자 정보가 없습니다. 회원가입을 해주세요.');
          location.href = path;
        }
      },
      error: function(error) {

      }
    });
  });
});

// Google Analytics Code
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76433073-1', 'auto');
ga('send', 'pageview');