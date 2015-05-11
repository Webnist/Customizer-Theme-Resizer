<?php
/*
Plugin Name: Customizer Theme Resizer
Version: 0.7.5
Description: PLUGIN DESCRIPTION HERE
Author: Webnist
Author URI: http://profiles.wordpress.org/webnist
Plugin URI: http://wordpress.org/plugins/customizer-theme-resizer/
Text Domain: customizer-theme-resizer
Domain Path: /languages
License: GPLv2 or later
*/

if ( ! class_exists('CustomizerThemeResizer') )
	require_once( dirname( __FILE__ ) . '/lib/customizer-theme-resizer.php' );

class CustomizerThemeResizerInit {

	public function __construct() {
		$this->basename    = dirname( plugin_basename(__FILE__) );
		$this->dir         = plugin_dir_path( __FILE__ );
		$this->url         = plugin_dir_url( __FILE__ );
		$headers           = array(
			'name'        => 'Plugin Name',
			'version'     => 'Version',
			'domain'      => 'Text Domain',
			'domain_path' => 'Domain Path',
		);
		$data              = get_file_data( __FILE__, $headers );
		$this->name        = $data['name'];
		$this->version     = $data['version'];
		$this->domain      = $data['domain'];
		$this->domain_path = $data['domain_path'];
		load_plugin_textdomain( $this->domain, false, $this->basename . $this->domain_path );
	}

}
new CustomizerThemeResizerInit();
new CustomizerThemeResizer();
