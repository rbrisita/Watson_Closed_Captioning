//var cc_formatter = require('STT_to_CC_Format').toClosedCaption;

module.exports = function(RED) {
	 'use strict';
	 var formatter = require('./STT_to_CC_Format').toClosedCaption;
	  
	function ClosedCaptionsNode(config) {
		RED.nodes.createNode(this, config);
		var node = this;

		this.prefix = config.prefix;

		var ccConfig = {};
		ccConfig.timePerLine = config.timePerLine;
		ccConfig.outputStyle = config.ccStyle;
		ccConfig.suppressHesitations = config.suppressHesitations;
		ccConfig.suppressSpeakerLabels = config.suppressSpeakerLabels;
		ccConfig.verbose = config.verbose;
		
		this.on('input', function(msg) {
			if (msg.outputStyle){
				if ((msg.outputStyle ==="SRT")&&(ccConfig.outputStyle !== "SRT")) {ccConfig.outputStyle = "SRT"; console.log('Warning: msg.outputStyle oversides settings to "SRT"');}
				if ((msg.outputStyle ==="VTT")&&(ccConfig.outputStyle !== "VTT")) {ccConfig.outputStyle = "VTT"; console.log('Warning: msg.outputStyle oversides settings to "VTT"');}
			}
		
			console.log(ccConfig);
			console.log(msg.payload);
			
			msg.payload = formatter(msg.payload, ccConfig);
			node.send(msg);
		});

	}
	RED.nodes.registerType("watson-closed-captions", ClosedCaptionsNode);
};

