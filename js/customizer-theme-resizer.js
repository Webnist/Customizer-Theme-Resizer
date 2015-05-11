(function($){
	var $body               = $('body');
	var $preview            = $('#customize-preview');
	var $resizerBox         = $('#customizer-resizer-box');
	var $resizerSelect      = $('#customizer-resizer');
	var $resizerWidth       = $('#resizer-width');
	var $resizerWidthInput  = $resizerWidth.find('input');
	var $resizerHeight      = $('#resizer-height');
	var $resizerHeightInput = $resizerHeight.find('input');
	var $resizerReset       = $('#resizer-reset');
	var $resizerRotate      = $('#resizer-rotate');
	var $resizerRefresh     = $('#resizer-refresh');
	var $previewScreen      = $preview.children('iframe');

	function resizerChange( $width, $height ) {
		if ( $width && $height ) {
			$('iframe').css({
				'width': $width,
				'height': $height
			});
		} else {
			$('iframe').removeAttr('style');
		}
	}
	if ( $resizerBox[0] ) {
		$resizerBox.prependTo($preview);
		$resizerSelect.change(function() {
			var $width  = $resizerSelect.children('option:selected').data('resizer-width');
			var $height = $resizerSelect.children('option:selected').data('resizer-height');
			$resizerWidthInput.val($width);
			$resizerHeightInput.val($height);
			resizerChange( $width, $height );
		});
		$resizerReset.on( 'click', function(event) {
			$resizerSelect.val('');
			$resizerWidthInput.val('');
			$resizerHeightInput.val('');
			resizerChange();
		});
		$resizerRotate.on( 'click', function(event) {
			var $height = $resizerWidthInput.val();
			var $width  = $resizerHeightInput.val();
			$resizerWidthInput.val($width);
			$resizerHeightInput.val($height);
			resizerChange( $width, $height );
		});
		$resizerRefresh.on( 'click', function(event) {
			var $width  = $resizerWidthInput.val();
			var $height = $resizerHeightInput.val();
			resizerChange( $width, $height );
		});
		$(document).ajaxSuccess(function(e, xhr, settings) {
			var $width  = $resizerWidthInput.val();
			var $height = $resizerHeightInput.val();
			resizerChange( $width, $height );
		});
	}

})(jQuery);
