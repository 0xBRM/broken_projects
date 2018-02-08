const LL_PATH = 'resource://localload/';
const EXT_CORE_PATH = LL_PATH + 'ext-core/';
const EXT_CORE_VERSIONS = ['3.0', '3.1.0'];
const JQUERY_PATH = LL_PATH + 'jquery/';
const JQUERY_VERSIONS = ['1.2.3', '1.2.6', '1.3.0', '1.3.1', '1.3.2', '1.4.0', '1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.5.0', '1.5.1', '1.5.2', '1.6.0', '1.6.1', '1.6.2', '1.6.3', '1.6.4', '1.7.0', '1.7.1', '1.7.2', '1.8.0', '1.8.1', '1.8.2', '1.8.3', '1.9.0', '1.9.1', '1.10.0', '1.10.1', 1.10.2', '1.11.0', '1.11.1', '1.11.2', '1.11.3', '2.0.0', '2.0.1', '2.0.2', '2.0.3', '2.1.0', '2.1.1', '2.1.3', '2.1.4'];
const JQUERYUI_PATH = LL_PATH + 'jqueryui/';
const JQUERYUI_VERSIONS = ['1.5.2', '1.5.3', '1.6', '1.7.0', '1.7.1', '1.7.2', '1.7.3', '1.8.0', '1.8.1', '1.8.2', '1.8.4', '1.8.5', '1.8.6', '1.8.7', '1.8.8', '1.8.9', '1.8.10', '1.8.11', '1.8.12', '1.8.13', '1.8.14', '1.8.15', '1.8.16', '1.8.17', '1.8.18', '1.8.19', '1.8.20', '1.8.21', '1.8.22', '1.8.23', '1.8.24', '1.9.0', '1.9.1', '1.9.2', '1.10.0', '1.10.1', '1.10.2', '1.10.3', '1.10.4', '1.11.0', '1.11.1', '1.11.2', '1.11.3', '1.11.4'];
const MOOTOOLS_PATH = LL_PATH + 'mootools/';
const MOOTOOLS_VERSIONS = ['1.1.1', '1.1.2', '1.2.1', '1.2.2', '1.2.3', '1.2.4', '1.2.5', '1.4.0', '1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.4.5', '1.5.0', '1.5.1'];
const PROTOTYPE_PATH = LL_PATH + 'prototype/';
const PROTOTYPE_VERSIONS = ['1.6.0.2', '1.6.0.3', '1.6.1.0', '1.7.0.0', '1.7.1.0', '1.7.2.0'];
const SCRIPTACULOUS_PATH = LL_PATH + 'scriptaculous/';
const SCRIPTACULOUS_VERSIONS = ['1.8.1', '1.8.2', '1.8.3', '1.9.0'];
const SWFOBJECT_PATH = LL_PATH + 'swfobject/';
const SWFOBJECT_VERSIONS = ['2.1', '2.2'];
const WEBFONTLOADER_PATH = LL_PATH + 'webfontloader/';
const WEBFONTLOADER_VERSIONS = ['1.0.0', '1.0.1', '1.0.2', '1.0.3', '1.0.4', '1.0.5', '1.0.6', '1.0.7', '1.0.8', '1.0.9', '1.0.10', '1.0.11', '1.0.12', '1.0.13', '1.0.14', '1.0.15', '1.0.16', '1.0.17', '1.0.18', '1.0.19', '1.0.20', '1.0.21', '1.0.22', '1.0.23', '1.0.24', '1.0.25', '1.0.26', '1.0.27', '1.0.28', '1.0.29', '1.0.30', '1.0.31', '1.1.0', '1.1.1', '1.1.2', '1.2.0', '1.2.1', '1.3.0', '1.3.1', '1.3.2', '1.4.0', '1.4.1', '1.4.2', '1.4.3', '1.4.4', '1.4.5', '1.4.6', '1.4.7', '1.4.8', '1.4.9', '1.4.10', '1.4.11', '1.4.12', '1.5.0', '1.5.1', '1.5.2', '1.5.3', '1.5.4', '1.5.5', '1.5.6', '1.5.7', '1.5.8', '1.5.9', '1.5.10', '1.5.11', '1.5.12', '1.5.13', '1.5.14', '1.5.15', '1.5.16', '1.5.17', '1.5.18', '1.5.19', '1.5.20', '1.5.21', '1.6.0', '1.6.1', '1.6.2', '1.6.3'];
const YUI_PATH = LL_PATH + 'yui/';
const YUI_VERSIONS = ['2.6.0', '2.7.0', '2.8.0r4', '2.8.1', '2.8.2', '3.3.0', '3.4.0', '3.4.1', '3.5.0', '3.5.1', '3.6.0', '3.7.0', '3.7.1', '3.7.2', '3.7.3', '3.8.0', '3.8.1', '3.9.0', '3.9.1', '3.10.0', '3.10.1', '3.10.2', '3.10.3', '3.11.0', '3.12.0', '3.13.0', '3.14.0', '3.14.1', '3.15.0', '3.16.0', '3.17.0', '3.17.1', '3.17.2', '3.18.0', '3.18.1'];