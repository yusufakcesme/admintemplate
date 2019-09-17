
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

var nav_btn = document.querySelectorAll('.nav_btn');

function activeBtn() {
	removeActive();
	this.classList.add("active");
}
function removeActive() {
	nav_btn.forEach(item => item.classList.remove("active"));
}
nav_btn.forEach(item => item.addEventListener('click', activeBtn));