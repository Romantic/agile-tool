(function($) {
    $('.dropdown .toggle, .dropdown .select').click(function() {
        var list = $(this).parent().parent();
        var listItems = $("dd ul", list);
        if (listItems.is(':visible')) {
          listItems.hide();
          list.removeClass('active');
        }
        else {
          hideAll();
          listItems.show();
          list.addClass('active');
        }
    });

    $(document).click(function(e) {
        var clicked = $(e.target);
        if (!clicked.parents().parent().hasClass('dropdown')) {
            hideAll();
        }
    });

    function hideAll() {
      $('.dropdown dd ul').hide();
      $('.dropdown').removeClass('active');
    }

    $.fn.error_tool_tip = function() {
      $(this).qtip({
        style: {
          name:'red',
          border: { radius: 5 },
          tip: { corner: 'leftMiddle' }
        },
        position: {
          corner: {
            target: 'rightMiddle',
            tooltip: 'leftMiddle'
          }
        }
      });
    };

})(jQuery)

