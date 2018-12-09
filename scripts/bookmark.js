javascript:(function() {
	const CORE  = "https://cdn.jsdelivr.net/gh/Xaruh/loader@master/scripts/core.js";
	var Request = new XMLHttpRequest();
	Request.open("GET", CORE);
	Request.send();
	Request.onload = function() {
		if(Request.status !== 200) {
			return false;
		} else {
			var Script = document.createElement("script");
			Script.src = CORE;
			document.querySelector("head").appendChild(Script);

			return true;
		}
	}
})();