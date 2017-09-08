# Watson\_Closed\_Captioning
The Bluemix Watson Speech To Text service produces raw text output with time markers and optional speaker markers. This utility produces Closed Captioning transcripts in your choice of SRT or VTT from the Watson Speech To Text results. You can take the resulting output and upload it to your streaming service using their API. Alternatively, output to a file and upload manually.

>0  
>00:00:00,80 --> 00:00:04,11  
>my family absolute is fascinated by  
>   
>1  
>00:00:04,14 --> 00:00:07,23  
>the work I'm doing with Watson and I I  
>   
>2  
>00:00:07,23 --> 00:00:10,72  
>think they feel a personal sense of pride and satisfaction  
>   


## Usage
Two parameters. The first is the STT results in JSON format. The second is a style block the allows the following settings:

* maxLineTime - The maximum amount of time in seconds for each frame of closed caption output. Default to 2 seconds
* includeHesitations - Watson produces %HESITATION tags. Set this to true if you want to see them. Default false.
* ccStyle - Can be either "srt" or "vtt". Default is "srt". 
* suppressMultipleSpeakers - Normally this outputs Speaker 0: Speaker 1: etc. at each speaker transition, if Watson STT produced that information. You can suppress the speaker tags by setting this to false. It will still do a line break at each speaker. Defalt is false.


## Developing

see test.js for example

### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
# Watson\_Closed\_Captioning
