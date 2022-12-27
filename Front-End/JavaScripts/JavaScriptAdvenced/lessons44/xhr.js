// XMLHttpRequest

let xhr = new XMLHttpRequest();
//console.log(xhr);
xhr.open("GET", "book.json", true);
xhr.send();

xhr.onreadystatechange = function(){
	if(xhr.readyState !=4) return;
	if(xhr.status !=200){
		console.log(xhr.status + ": " + xhr.statusText);
	}else{
		console.log(xhr.responseText);//responseXML
	}
}