$(function(){
	var note = $('#note'),
  	
  	//date - year, month, day - the month is zero based - i.e. 0 = jan, 1 = feb etc
  	//you'll want to edit this to be your blast off date
	ts = new Date(2013, 0, 10);

	$('#countdown').countdown({
		timestamp   : ts,
		callback    : function(days, hours, minutes, seconds){
			var message = "";
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
			message += "left until blast off";
			note.html(message);
		}
	});
 });