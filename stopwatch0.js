 /* stopwatch object
 To use:
1. include the StopWatch.js file
2. var _StopWatch = new StopWatch();
3. _StopWatch.start();
4. _StopWatch.stop();
5. alert(_StopWatch.duration()); */
//example return: 3.567(seconds)

 function StopWatch(){

var startTime = null;
var stopTime = null;
var running = false;

this.start = function(){
    
    if (running == true)
        return;
    else if (startTime != null)
        stopTime = null;
    
    running = true;    
    startTime = getTime();
}

this.stop = function(){
    
    if (running == false)
        return;    
    
    stopTime = getTime();
    running = false;
}

this.duration = function(){
    if (startTime == null || stopTime == null)
        return 'Undefined';
    else
        return (stopTime - startTime) / 1000;
}

this.isRunning = function() { return running; }

function getTime(){
    var day = new Date();
    return day.getTime();
}


}