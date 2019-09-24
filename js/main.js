
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
//-------------------------------------------------------

//--------------------------------------------------------

var nav_btn = document.querySelectorAll('.nav_btn');
var info_section = document.getElementById('info-section');
var panel_form = document.getElementById('panel-form');
var hakkinda_panel = document.getElementById("hakkinda-panel");

function activeButton() {
	removeActive();
	this.classList.add('active');

	if (this.id === "anasayfa") {
		info_section.style.display = "flex";
		panel_form.style.display = "none";
		hakkinda_panel.style.display = "none";
	} else if (this.id === "ayarlar") {
		info_section.style.display = "none";
		panel_form.style.display = "block";
		hakkinda_panel.style.display = "none";
	} else if (this.id === "hakkinda") {
		info_section.style.display = "none";
		panel_form.style.display = "none";
		hakkinda_panel.style.display = "block";
	}




}

function removeActive() {

	nav_btn.forEach(item => item.classList.remove('active'));
}





nav_btn.forEach(item => item.addEventListener('click', activeButton));




