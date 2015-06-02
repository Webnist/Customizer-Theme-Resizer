(function($){
	var $preview               = $('#customize-preview');
	var $resizerBox            = $('#customizer-resizer-box');
	var $resizerSelect         = $('#customizer-resizer');
	var $resizerWidth          = $('#resizer-width');
	var $resizerWidthInput     = $resizerWidth.find('input');
	var $resizerHeight         = $('#resizer-height');
	var $resizerHeightInput    = $resizerHeight.find('input');
	var $resizerReset          = $('#resizer-reset');
	var $resizerRotate         = $('#resizer-rotate');
	var $resizerRefresh        = $('#resizer-refresh');
	var $resizerOpenClose     = $('#resizer-open-close');
	var $previewScreen         = $preview.children('iframe');
	var $previewToggleView     = $('a.customize-controls-preview-toggle');
	var $openCloseTimer;

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

	function resizerOpenClose() {
		$openCloseTimer = setInterval(function(){
			var $iframeWidth = $('iframe').width();
			var $iframeHeight = $('iframe').height();
			var $customizePreviewWidth = $preview.width();
			if ( 320 >= $iframeWidth ) {
				$('iframe').removeClass('close');
				$('iframe').addClass('open');
			} else if ( $customizePreviewWidth <= $iframeWidth ) {
				$('iframe').removeClass('open');
				$('iframe').addClass('close');
			}
			if ( $('iframe').hasClass('close') ) {
				$('iframe').css({
					'width': '-=' + '10' + 'px'
				});
			} else if ( $('iframe').hasClass('open') ) {
				$('iframe').css({
					'width': '+=' + '10' + 'px'
				});
			}
			$resizerWidthInput.val($iframeWidth);
			$resizerHeightInput.val($iframeHeight);

		}, 500);
	}
	function stopResizerOpenClose() {
		$resizerOpenClose.removeClass('on');
		clearInterval( $openCloseTimer );
	}
	$(window).resize(function(){
		var $view                  = $previewToggleView.css('display');
		if ( $resizerBox[0] && ( 'none' == $view ) ) {
			$resizerBox.css( 'display', 'block' );
			$resizerBox.prependTo($preview);
			$resizerSelect.change(function() {
				var $width  = $resizerSelect.children('option:selected').data('resizer-width');
				var $height = $resizerSelect.children('option:selected').data('resizer-height');
				$resizerWidthInput.val($width);
				$resizerHeightInput.val($height);
				resizerChange( $width, $height );
				stopResizerOpenClose();
			});
			$resizerReset.on( 'click', function(event) {
				$resizerSelect.val('');
				$resizerWidthInput.val('');
				$resizerHeightInput.val('');
				resizerChange();
				stopResizerOpenClose();
			});
			$resizerRotate.on( 'click', function(event) {
				var $height = $resizerWidthInput.val();
				var $width  = $resizerHeightInput.val();
				$resizerWidthInput.val($width);
				$resizerHeightInput.val($height);
				resizerChange( $width, $height );
				stopResizerOpenClose();
			});
			$resizerRefresh.on( 'click', function(event) {
				var $width  = $resizerWidthInput.val();
				var $height = $resizerHeightInput.val();
				resizerChange( $width, $height );
				stopResizerOpenClose();
			});
			$resizerOpenClose.on( 'click', function(event) {
				if ( $resizerOpenClose.hasClass('on') ) {
					stopResizerOpenClose();
				} else {
					$resizerOpenClose.addClass('on');
					resizerOpenClose();
				}
			});
			$(document).ajaxSuccess(function(e, xhr, settings) {
				var $width  = $resizerWidthInput.val();
				var $height = $resizerHeightInput.val();
				resizerChange( $width, $height );
				stopResizerOpenClose();
			});

		} else if ( 'block' == $view ) {
			$resizerBox.css( 'display', 'none' );
		}
	}).resize();

})(jQuery);
