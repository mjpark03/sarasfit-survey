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
