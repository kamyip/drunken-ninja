//	------------------------------------------------------------------------
//
//	Simple example of using private variables
//
//	To start the stopwatch:
//		obj.start();
//
//	To get the duration in milliseconds without pausing / resuming:
//		var	x	= obj.time();
//
//	To pause the stopwatch:
//		var	x	= obj.stop();	// Result is duration in milliseconds
//
//	To resume a paused stopwatch
//		var	x	= obj.start();	// Result is duration in milliseconds
//
//	To reset a paused stopwatch
//		obj.stop();
//	
var	clsStopwatch	= 
	function()
	{
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds

		var	now	= 
			function() 
			{
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		this.start	= 	// Start or resume
			function()
			{
				startAt	= now(); 
					return	lapTime; 
			};	// this.start

		this.stop	=	// Stop or pause
			function()
			{
				// If running, update elapsed time otherwise reset
				lapTime	= startAt ? lapTime + now() - startAt : 0;
				startAt	= 0;	// Paused

				return	lapTime; 
			};	// this.stop

		this.time	=	// Duration
			function()
			{
				return	lapTime + (startAt ? now() - startAt : 0); 
			};	// this.time
	};	// clsStopwatch
//
//	------------------------------------------------------------------------
//
//	Demo
//var	x	= new clsStopwatch();
//
//	See how long it takes to press [OK]
//x.start();	// Start the stopwatch
//alert('Press [OK]'); 
//alert('You took ' + (x.stop() / 1000) + ' seconds');	// Pause the stopwatch whilst displaying result
//
//alert('Stopwatch resumed at ' + (x.start() / 1000) + 'seconds. Press [OK]'); 
alert('You took ' + (x.stop() / 1000) + ' seconds for both');	// Pause
x.stop();	// Reset