var ts1 = require("./transcript_1").transcript; // a single speaker
var ts2 = require("./transcript_2").transcript; // two speakers

var formatter = require("./STT_to_CC_Format").toClosedCaption;

var style = {maxLineTime: "2.0", 
		     includeHesitations: true, 
		     ccStyle: "xrt",
		     suppressMultipleSpeakers: false};

var s = formatter(ts1, style);

console.log(s);