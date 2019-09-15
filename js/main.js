
var profile_text = document.getElementById('profile-text');
var profile_box = document.getElementById('profile-box');

function profileOn() {
	
	if (profile_box.style.height === "140px") {
		profile_box.style.height = "0px";
		function textOpen() {
			profile_text.style.display = "none";
		}
		setTimeout(textOpen, 0);
	} else {
		profile_box.style.height = "140px";
		function textClose() {
			profile_text.style.display = "block";
		}
		setTimeout(textClose, 250);
	}

}



