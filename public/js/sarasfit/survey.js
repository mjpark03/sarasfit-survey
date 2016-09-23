/**
 * Created by Rachel on 2016. 8. 25..
 */

$(function() {

  $("select").imagepicker({
    hide_select: true,
    show_label: true
  });

  $('#end').on('click', function (e) {
    e.preventDefault();

    var params = {};

    var birth = $('#birth').val();
    var chestShapeFrontCd = '';
    var CSFCount = 0;
    $("#chestShapeFrontCd").data("picker").selected_values().forEach(function(value, index) { 
      if(CSFCount > 0)
        chestShapeFrontCd = chestShapeFrontCd + ',';
      chestShapeFrontCd = chestShapeFrontCd + value;
      CSFCount = CSFCount + 1;
    });
    var chestShapeSideCd = $("#chestShapeSideCd").data("picker").selected_values()[0];
    var braSpaceCd = $("#braSpaceCd").data("picker").selected_values()[0];
    var braWearCd = '';
    var BWCount = 0;
    $("#braWearCd").data("picker").selected_values().forEach(function(value, index) {
      if(BWCount > 0)
        braWearCd = braWearCd + ',';
      braWearCd = braWearCd + value;
      BWCount = BWCount + 1;
    });
    var brandName = $('#brandName').val();
    var brandBust = $('#brandBust').val();
    var brandCup = $('#brandCup').val();
    var brandHookCd = $('#brandHookCd').val();
    var brandSize = $('#brandSize').val();
    var brandPad = '';

    var count = 0;

    if($("input:checkbox[id='PT01']").is(":checked")) {
      brandPad += 'PT01';
      count = count + 1;
    }

    if($("input:checkbox[id='PT02']").is(":checked")) {
      if(count > 0) {
        brandPad = brandPad + ',';
      }
      brandPad = brandPad + 'PT02';
      count = count + 1;
    }

    if($("input:checkbox[id='PT03']").is(":checked")) {
      if(count > 0) {
        brandPad = brandPad + ',';
      }
      brandPad = brandPad + 'PT03';
    }


    params.birth = birth;
    params.chestShapeFrontCd = chestShapeFrontCd;
    params.chestShapeSideCd = chestShapeSideCd;
    params.braSpaceCd = braSpaceCd;
    params.braWearCd = braWearCd;
    params.brandName = brandName;
    params.brandBust = brandBust;
    params.brandCup = brandCup;
    params.brandHookCd = brandHookCd;
    params.brandSize = brandSize;
    params.brandPad = brandPad;

    $.ajax({
      url: '/survey/end',
      dataType: 'json',
      type: 'POST',
      data: params,
      success: function (result) {
        if (result.status == 'success') {
          alert('제출을 완료했습니다.');
          location.href = '/';
        }
      }
    });
  });



});