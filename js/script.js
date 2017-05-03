let itemsDisplayedPerPage = 10;
let listWrapper = document.getElementById('ListWrapper');
let listItems = document.getElementsByTagName("li");
let totalListItems = listItems.length;
let totalPages = Math.ceil(totalListItems / itemsDisplayedPerPage)
let paginationContainer = document.getElementsByClassName("pagination")[0];

let paginationLink = '<ul id="listLinks">';


window.onload = function(){
	
	
	
	for(i = 0; i < totalListItems; i+=1){
		
		listItems[i].style.display = 'none';
	
	}
	

	for(i = 0; i < itemsDisplayedPerPage; i+=1){
		
		listItems[i].style.display = 'block';
	
	}
	
	
	for(i=1;i <= totalPages; i++ ){
		
		paginationLink += '<li> <a href="#">'+ i +'</a>  </li>';
		
		
	}
	
	paginationLink += '</ul>';
	

	
	paginationContainer.innerHTML = paginationLink;
	
	let liLinks = document.getElementById("listLinks").querySelectorAll('a');
	console.log(liLinks);
	
	
	
	
	

	

	
	for(let i=0; i < liLinks.length; i++){
		liLinks[i].className= "";
			
		
		liLinks[i].addEventListener('click', function() {
			
			let yu = i;
			console.log(yu);
	
		console.log('you clicked ' + i);
			
			for(i = 0; i < totalListItems; i+=1){
		
		listItems[i].style.display = 'none';
	
	}
			
			///
			
			
			for(i = yu * itemsDisplayedPerPage; i < (itemsDisplayedPerPage * yu) + itemsDisplayedPerPage; i+=1){
		
		listItems[i].style.display = 'block';
	
						
			
			///
			}
		
			paginationLink += '</ul>';
			
	});
		
		
		
			
	}
	
	
	
	liLinks[0].className = "active";
	
	
	
	
};





