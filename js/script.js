// Declaring Global Variables

let itemsDisplayedPerPage = 10;
let listWrapper = document.getElementById('ListWrapper');
let listItems = listWrapper.getElementsByTagName("li");
let totalListItems = listItems.length;
let totalPages = Math.ceil(totalListItems / itemsDisplayedPerPage)
let paginationContainer = document.getElementsByClassName("pagination")[0];
let paginationLink = '<ul id="listLinks">';


window.onload = function(){

	// This for loop hides all li items
	for(i = 0; i < totalListItems; i+=1){
		listItems[i].style.display = 'none';
	}
	
	// This loop displays li items according to the ItemsDisplayedPerPage
	for(i = 0; i < itemsDisplayedPerPage; i+=1){
		listItems[i].style.display = 'block';
	}
	
	// for loop - WIll generate page links acccording to the number needed to browse all Li items
	for(i=1;i <= totalPages; i++ ){
		paginationLink += '<li> <a href="#">'+ i +'</a>  </li>';
	}
	
	paginationLink += '</ul>';
	

	
	paginationContainer.innerHTML = paginationLink;
	
	//once page links have created we select all a inside the div listLinks
	let liLinks = document.getElementById("listLinks").querySelectorAll('a');
	
	
	
	for(let i=0; i < liLinks.length; i++){
		
							
		// Event listener on click				
		liLinks[i].addEventListener('click', function() {
			
			// this line will basically get the number inside the clicked object
			let yu = this.textContent;
			// and since array start from 0 we need to deduct 1 in order to target the right item
			yu = yu -1;
			
			//this for Loop removes any class given to liLinks
			for(let i=0; i < liLinks.length; i++){
			liLinks[i].className = "";
			}

			// this line sets the class name active to the clicked a element	
			liLinks[yu].className = "active";

	
			// This For Loop hides again all items
			for(i = 0; i < totalListItems; i+=1){

			listItems[i].style.display = 'none';

			 }
			// This loop shows only the li items according page link clicked 
				for(i = yu * itemsDisplayedPerPage; i < (itemsDisplayedPerPage * yu) + itemsDisplayedPerPage; ++i){
				listItems[i].style.display = 'block';

				}

		});		
	}
	
// This will set the first pagination link with the class Active which will then be removed by the event listner 
	liLinks[0].className = "active";
		
};