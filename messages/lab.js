// Your JavaScript goes here...


var request = new XMLHttpRequest();
function parse() {
	// Step 1: set up HTTP request. Three required arguments...:
	// ...HTTP method (string), URL (string), asynch (boolean)
	request.open("GET", "data.json", true);
	// Step 2: Set up callback function to deal with HTTP response data
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			message = request.responseText;
			obj = JSON.parse(message);

			for (i = 0; i < 2; i++)
			{
				var p = document.createElement("P");
				var text = document.createTextNode(obj[i].content + " " + obj[i].username);
				p.appendChild(text);
				document.getElementById("messages").appendChild(p);
			}
		}
	};
		request.send(null);
}