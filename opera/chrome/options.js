function save_options(){
	var key = document.getElementById('key').value;
	var secret = document.getElementById('secret').value;
	var ref = document.getElementById('ref').value;
	localStorage.APIKey = key;
	localStorage.APISecret = secret;
	localStorage.CKRefNum = ref;
	
	document.getElementById('status').innerHTML = "Options Saved!";
	setTimeout(function(){
		document.getElementById('status').innerHTML = "";
	}, 1200);
}

function restore_options(){
	document.getElementById('key').value = localStorage.APIKey;
	document.getElementById('secret').value = localStorage.APISecret;
	document.getElementById('ref').value = localStorage.CKRefNum;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);