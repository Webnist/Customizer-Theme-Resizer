(function($){
	var $body               = $('body');
	var $preview            = $('#customize-preview');
	var $resizerBox         = $('#customizer-resizer-box');
	var $resizerSelect      = $('#customizer-resizer');
	var $resizerWidth       = $('#resizer-width');
	var $resizerWidthInput  = $resizerWidth.children('input');
	var $resizerHeight      = $('#resizer-height');
	var $resizerHeightInput = $resizerHeight.children('input');
	var $resizerRotate      = $('#resizer-rotate');
	var $resizerRefresh     = $('#resizer-refresh');
	var $previewScreen      = $preview.children('iframe');
	if ( $resizerBox[0] ) {
		$resizerBox.prependTo($preview);
		$resizerSelect.change(function() {
			var $width  = $resizerSelect.children('option:selected').data('resizer-width');
			var $height = $resizerSelect.children('option:selected').data('resizer-height');
			$resizerWidthInput.val($width);
			$resizerHeightInput.val($height);
			if ( $width && $height ) {
				$('iframe').css({
					'width': $width,
					'height': $height
				});
			} else {
				$('iframe').removeAttr('style');
			}
		});
		$resizerRotate.on( 'click', function(event) {
			var $height = $resizerWidthInput.val();
			var $width  = $resizerHeightInput.val();
			$resizerWidthInput.val($width);
			$resizerHeightInput.val($height);
			if ( $width && $height ) {
				$('iframe').css({
					'width': $width,
					'height': $height
				});
			} else {
				$('iframe').removeAttr('style');
			}
		});
		$resizerRefresh.on( 'click', function(event) {
			var $width  = $resizerWidthInput.val();
			var $height = $resizerHeightInput.val();
			if ( $width && $height ) {
				$('iframe').css({
					'width': $width,
					'height': $height
				});
			} else {
				$('iframe').removeAttr('style');
			}
		});
	}

})(jQuery);
