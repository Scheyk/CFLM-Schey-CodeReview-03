function calculateInsurance()
{
	var austria = Number(document.getElementById("power").value) * 100 / Number(document.getElementById("age").value) + 50;
	var hungary = Number(document.getElementById("power").value) * 120 / Number(document.getElementById("age").value) + 100;
	var greece = Number(document.getElementById("power").value) * 150 / (Number(document.getElementById("age").value) + 3) + 50;
	var name = "Dear mr/mss " + document.getElementById("name").value;

	switch(document.getElementById("country").value)
	{

		case "0":
		document.getElementById("ergebnis").innerHTML = name + " your quoute is: " + austria.toFixed(2) + " \u20ac";
			break;
		case "1":
		document.getElementById("ergebnis").innerHTML = name + " your quoute is: " + hungary.toFixed(2) + " \u20ac";
			break;
		case "2":
		document.getElementById("ergebnis").innerHTML = name + " your quoute is: " + greece.toFixed(2)  + " \u20ac";
			break;

	}
	
	document.getElementById("ergebnis").style.visibility = "visible";	
	
}

document.getElementById("submit").addEventListener("click", calculateInsurance);


