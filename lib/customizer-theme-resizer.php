<?php
class CustomizerThemeResizer extends CustomizerThemeResizerInit {

	public function __construct() {
		parent::__construct();
		add_action( 'customize_controls_print_styles', array( $this, 'customize_controls_print_styles' ) );
		add_action( 'customize_controls_print_scripts', array( $this, 'customize_controls_print_scripts' ) );
		add_action( 'customize_controls_print_footer_scripts', array( $this, 'customize_controls_print_footer_scripts' ) );

	}
	function customize_controls_print_styles() {
		wp_enqueue_style( 'customizer-theme-resizer', $this->url . '/css/customizer-theme-resizer.css', array(), $this->version );
	}
	function customize_controls_print_scripts() {
		wp_enqueue_script( 'customizer-theme-resizer', $this->url . '/js/customizer-theme-resizer.js', array( 'jquery' ), $this->version, true );
	}
	function customize_controls_print_footer_scripts() {
		$default = array(
			'Apple iPhone 4'      => array(
				'width'  => '320',
				'height' => '480',
			),
			'Apple iPhone 5'      => array(
				'width'  => '320',
				'height' => '568',
			),
			'Apple iPhone 6'      => array(
				'width'  => '375',
				'height' => '667',
			),
			'Apple iPhone 6 Plus' => array(
				'width'  => '414',
				'height' => '736',
			),
			'Apple iPad'          => array(
				'width'  => '768',
				'height' => '1024',
			),
			'Google Nexus 4'      => array(
				'width'  => '384',
				'height' => '640',
			),
			'Google Nexus 5'      => array(
				'width'  => '360',
				'height' => '640',
			),
			'Google Nexus 7'      => array(
				'width'  => '604',
				'height' => '966',
			),
			'Google Nexus 10'     => array(
				'width'  => '800',
				'height' => '1280',
			),
		);
		$size = apply_filters( 'customizer_theme_resizer_size', $default );
		$output = '';
		$output .= '<div id="customizer-resizer-box" class="wp-ui-primary">';
		$output .= '<span class="dashicons dashicons-admin-settings"></span>' . "\n";
		$output .= '<select id="customizer-resizer" name="customizer-resizer">' . "\n";
		$output .= '<option value="">' . __( 'Select size' ) . '</option>' . "\n";
		foreach ( $size as $key => $value ) {
			$output .= '<option value="' . esc_attr( $key ) . '" data-resizer-width="' . esc_attr( $value['width'] ) . '" data-resizer-height="' . esc_attr( $value['height'] ) . '">' . esc_attr( $key ) . '</option>' . "\n";
		}
		$output .= '</select>' . "\n";
		$output .= '<div id="customizer-resizer-size-box">' . "\n";
		$output .= '<p id="resizer-width">' . "\n";
		$output .= '<label>' . __( 'Width' ) . '</label>' . "\n";
		$output .= '<input name="customizer-resizer-width" value="" class="small-text">' . "\n";
		$output .= '</p>' . "\n";
		$output .= '<p id="resizer-height">' . "\n";
		$output .= '<label>' . __( 'Height' ) . '</label>' . "\n";
		$output .= '<input name="customizer-resizer-height" value="" class="small-text">' . "\n";
		$output .= '</p>' . "\n";
		$output .= '<p id="resizer-rotate">' . "\n";
		$output .= '<span class="dashicons dashicons-image-rotate-left"></span>' . "\n";
		$output .= '</p>' . "\n";
		$output .= '<p id="resizer-refresh">' . "\n";
		$output .= '<span class="dashicons dashicons-update"></span>' . "\n";
		$output .= '</p>' . "\n";
		$output .= '</div>' . "\n";
		$output .= '</div>' . "\n";
		echo $output;
	}

}
