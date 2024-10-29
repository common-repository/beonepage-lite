jQuery(function() {
		var $div = jQuery("<div>", {id: "update", "class": "update_popup hide_popup"});
		jQuery(".ocdi__button-container").append($div);	
		jQuery('.update_popup').html('<div class="modal"><div class="modal-overlay modal-toggle"></div><div class="modal-wrapper modal-transition"><div class="modal-header"><button class="modal-close modal-toggle"></button><h2 class="modal-heading">Upgrade</h2></div><div class="modal-body"><div class="modal-content"><p class="beone_massage">Buy BeOnePage Pro with Premium Features</p><a href="https://betheme.me/themes/beonepage/" target="_blank" class="button_update">Update</a></div></div></div></div>');
		
		jQuery('.button-hero').removeAttr("href");
		jQuery('.ocdi-import-mode-switch').removeAttr("href");
		jQuery('.button-hero').addClass('modal-toggle');
		jQuery('.ocdi-import-mode-switch').addClass('modal-toggle');
		
		jQuery('.modal-toggle').on('click', function(e) {
			e.preventDefault();
			jQuery('.modal').toggleClass('is-visible');
		});
	});