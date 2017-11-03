var ts1 = require("./transcript_1").transcript; // a single speaker
var ts2 = require("./transcript_2").transcript; // two speakers
var ts3 = require("./transcript_3").transcript; // two speakers - problem
var ts4 = require("./transcript_4").transcript; // tweaker
var ts5 = require("./transcript_5").transcript; // numbers

var formatter = require("../STT_to_CC_Format").toClosedCaption;

var style = {timePerLine: 2.0, 
		     supressHesitations: false, 
		     ccStyle: "VTT",
		     outputStyle: "VTT",
		     suppressSpeakerLabels: false,
		     verbose: true};

var s = formatter(ts5, style);

console.log(s);

