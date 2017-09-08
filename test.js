var ts1 = require("./transcript_1").transcript; // a single speaker
var ts2 = require("./transcript_2").transcript; // two speakers

var formatter = require("./STT_to_CC_Format").toClosedCaption;

var style = {maxLineTime: 3.0, 
		     includeHesitations: false, 
		     ccStyle: "srt",
		     suppressMultipleSpeakers: true};

var s = formatter(ts2, style);
console.log("S is "+s);