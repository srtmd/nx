const param = window.location.search;
const urlpa = new URLSearchParams(param);
if (urlpa.has('s')) {
	const usr = urlpa.get('s');
	if (usr.toLowerCase().includes("tesor")){
		document.getElementById("fuck").innerHTML = usr + " é BICHONA!";
	} else{
		document.getElementById("fuck").innerHTML = usr + " não é bicha!";
	}
	document.getElementById("iname").value == usr;
}


