$(document).ready(function() {
	$('.popup-form').magnificPopup({
		 removalDelay: 500,
		 callbacks: {
			 beforeOpen: function() {
					this.st.mainClass = this.st.el.attr('data-effect');
			 }
		 },
		 midClick: true 
	});
});
