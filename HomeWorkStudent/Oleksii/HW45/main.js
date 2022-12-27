 async function getResponse(){
	let response = await fetch('http://localhost:8888/photo.json');
	let content = await response.json();
	content = content.splice(0,8);
	 
	 let list = document.querySelector('.posts');
	 
	 let key;
	 for(key in content){
		 list.innerHTML +=`
			 <li  class="post">
				 <h2>${content[key].title}</h2>
				 <img src="${content[key].url}" width="500" alt="${content[key].alt}"/>
				 <p>${content[key].description}</p>	
			 </li>
			`

	 }
 }
getResponse();



