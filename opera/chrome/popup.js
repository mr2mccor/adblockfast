const EXTENSION = chrome.extension;

document.addEventListener('DOMContentLoaded', function() {
	var opts = {
		lines: 7, 
		length: 8, 
		width: 5, 
		radius: 9, 
		scale: 1, 
		corners: 1, 
		color: '#000', 
		opacity: 0.25, 
		rotate: 11, 
		direction: 1, 
		speed: 1, 
		trail: 60, 
		fps: 20, 
		zIndex: 2e9, 
		className: 'spinner', 
		top: '50%', 
		left: '50%', 
		shadow: false, 
		hwaccel: false, 
		position: 'absolute'
	}
	var target = document.getElementById('qrcode')
	var spinner = new Spinner(opts).spin(target);

	EXTENSION.sendRequest({action: 'popupLoad'}, function(response) {
		spinner.stop();
		document.getElementById('toggle').innerHTML = response.whitelistStatus;
		document.getElementById('balance').innerHTML = response.bitcoinBalance + " btc";
		new QRCode(document.getElementById("qrcode"),{
			text: response.bitcoinAddress,
			width: 100,
			height: 100,
			correctLevel : QRCode.CorrectLevel.L
		});
	});
});

function toggleMessage() {
	EXTENSION.sendRequest({action: 'whitelistToggle'}, function(response) {
		document.getElementById('toggle').innerHTML = response.whitelistStatus;
	});
}

document.getElementById('toggle').addEventListener('click', toggleMessage);