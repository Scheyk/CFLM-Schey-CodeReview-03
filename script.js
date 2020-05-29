function calculateInsurance()
{
	var austria = Number(document.getElementById("power").value) * 100 / Number(document.getElementById("age").value) + 50;
	var hungary = Number(document.getElementById("power").value) * 120 / Number(document.getElementById("age").value) + 100;
	var greece = Number(document.getElementById("power").value) * 150 / (Number(document.getElementById("age").value) + 3) + 50;
	var ausgabe = "Dear mr/mss " + document.getElementById("name");

	switch(document.getElementById("country").value)
	{

		case "0":
		document.getElementById("ergebnis").innerHTML = ausgabe + "deine versicherungssummer beläuft sich auf " + austria;
			break;
		case "1":
		document.getElementById("ergebnis").innerHTML = ausgabe +"deine versicherungssummer beläuft sich auf " + hungary;
			break;
		case "2":
		document.getElementById("ergebnis").innerHTML = ausgabe + "your quoute is: " + greece;
			break;

	}
	
	document.getElementById("ergebnis").style.visibility = "visible";	
	
}

document.getElementById("submit").addEventListener("click", calculateInsurance);


