console.log('js linked');

$(document).ready(function()
{
	$('.btn').click(function(event){
		event.preventDefault();
		console.log('button clicked');

		var fullname = $('.fullname').val();
		var email = $('.email').val();
		var message = $('.message').val();
		var statusElm = $('.status');
		statusElm.empty();

		if( email.length > 5 && email.includes('@') && email.includes('.'))
		{
			console.log('email is valid')
		}
		else
		{
			statusElm.append('<div><p>Email is invalid</p></div>');
			event.preventDefault();
		}

		if ( message.length > 2) 
		{
			console.log('message is valid')
		}
		else
		{
			statusElm.append('<div><p>Message is invalid</p></div>');
			event.preventDefault();
		}

	})
});