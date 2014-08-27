//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

  $('body').append('<h1>Todo</h1>');

  $('body').append('<form><input type="text" id="item" />');

  $('body').append('<button class="create">Create Todo</button>');

  $('button').one('click', function () {
    $('body').append('<h2 id="head"> Todos!</h2>');
  });


  $('button').click(function (e) {
    e.preventDefault();
    var item = $('#item').val();
    $('body').append('<ul>' + item + "  " + '<a href="">X</a></ul>');
    $("ul").on('click', function (e) {
      e.preventDefault();
      $(this).remove();

    });
  });
  (function ($) {
    $.fn.flash_message = function (options) {
      options = $.extend({
        text: 'Done',
        time: 5000,
        how: 'before',
        class_name: ''
      }, options);
      return $(this).each(function () {
        if ($(this).parent().find('.flash_message').get(0))
          return;
        var message = $('<div/>', {
          'class': 'flash_message ' + options.class_name,
          text: options.text
        }).hide().fadeIn('fast');
        $(this)[options.how](message);
        message.delay(options.time).fadeOut('normal', function () {
          $(this).remove();
        });
      });
    };
  })(jQuery);
  $('.create').click(function () {
    $('body').flash_message({
      text: 'Todo Created' + '           X',
      how: 'append'
    });
    $('.flash_message').insertAfter('#head');
    $(".flash_message").on('click', function (e) {
      e.preventDefault();
      $(this).remove();
    });
  });

  var $items = $('#items');

  $.ajax({
    type: 'GET',
    url: '/api/items',
    success: function (items) {
      $.each(items, function (i, item) {
        $items.append('<ul>todo: ' + item.todo + '</ul>');
      });
    }
  });
//  $('add-item').on('click', function () {
//    var item = {
//      todo: todo.val();
//  };
//
//  $.ajax({
//    type: 'POST',
//    url: '/api/orders',
//    data: item,
//    success: function (newItem) {
//    }
//  });
//
//});
});

