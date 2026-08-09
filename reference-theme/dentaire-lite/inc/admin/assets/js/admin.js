jQuery("body").on("click", '#dentaire-lite-welcome-notice .notice-dismiss', function (event) {
    event.preventDefault();

    jQuery.ajax({
      type: 'POST',
      url: ajaxurl,
      data: {
          action: 'dentaire_lite_dismissed_notice',
      },
      success: function () {
          // Remove the notice on success
          $('.notice[data-notice="example"]').remove();
      }
    });
  }
)