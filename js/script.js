//Timer

(function() {
	var seconds = Math.round(new Date().getTime()/1000/60/60/60/60/60/60);
	var minute = 0;

	function startTime() {
    	seconds =((seconds < 10) ? "0" : "") + seconds;
    
    	if (seconds > 59) {
  			minute++;
  			seconds = "0" + 0;
		}

  		if (minute > 59) {
  			minute = 0;
  			seconds = "0" + 0;
  		}

 		if (minute < 10) {
    		var clock = "0" + minute + ":" + seconds; 
  		} else {
    		var clock = minute + ":" + seconds; 
  		}
    
 		setTimeout(startTime, 1000); 
 
 		document.getElementById("timer").innerHTML = clock;

 		seconds ++;
	}

	startTime();

})();

//Timer-End

//bg header
setTimeout((function(){

	var bg = document.body.style.backgroundColor = "#E2CBF3";

	var wrapper = document.createElement('div');
	wrapper.className = 'wrapper';
	document.body.appendChild(wrapper);
	wrapper.style.width = "980px";
	wrapper.style.margin = "0 auto";

	//header-block
	var header = document.createElement('div'); 
	header.className = 'header';
	header.style.overflow = "hidden"; 

	//header img
	var logo = document.createElement('img');
	header.appendChild(logo);
	logo.style.float = "left";
	logo.style.marginRight = "100px";
	logo.style.width = "250px";
	logo.src = "https://cloud.githubusercontent.com/assets/16285199/13123682/6490b506-d5ce-11e5-92a9-fbd7c2d0c99a.png";

	//menu
	var menuItems = [
		{href: '#', text: 'Btn1'},
		{href: '#', text: 'Btn2'},
		{href: '#', text: 'Btn3'},
		{href: '#', text: 'Btn4'}
	];
	    
	var menu = document.createElement("ul"); 
	var menuItem, menuLink;
	    
	header.appendChild(menu);
	menu.className = 'menu';
	menu.style.float = "left";
	menu.style.width = "570px";
	menu.style.marginTop = "200px";
	    
	for (var i = 0; i < menuItems.length; i++) {
	      
	    menuItem = document.createElement("li");
	    menuLink = document.createElement("a");
	        
	    menuLink.href = menuItems[i].href;
	    menuLink.innerHTML = menuItems[i].text;
	        
	    menuItem.appendChild(menuLink);
	    menu.appendChild(menuItem);
	}
	        
	wrapper.appendChild(header);
//header-block-END
}), 1000);


//Timer on the page 
/*setTimeout((function(){

	var timer = document.createElement('div');
	
}), 3000);*/

//main-block
setTimeout((function(){

	var content = document.createElement('div'); 
	content.className = 'content';
	content.style.overflow = "hidden"; 

	//small-block
	var leftBlock = document.createElement('div'); 
	leftBlock.className = 'leftBlock';
	content.appendChild(leftBlock);
	leftBlock.style.width = '250px';
	leftBlock.style.backgroundColor = '#9DAEDA'; 
	leftBlock.style.float = 'left';

	//left ul block
	var categories = [
		{text: 'Category1'},
		{text: 'Category2'},
		{text: 'Category3'},
		{text: 'Category4'},
		{text: 'Category5'},
		{text: 'Category6'}
	];
	    
	var sidebar = document.createElement("ul"); 
	var category;
	    
	leftBlock.appendChild(sidebar);
	sidebar.className = 'sidebar';
	    
	for (var i = 0; i < categories.length; i++) {    
	    category = document.createElement("li");
	    sidebar.appendChild(category);
	    category.innerHTML = categories[i].text;
	}

	//large-block
	var rightBlock = document.createElement('div'); 
	rightBlock.className = 'rightBlock';
	content.appendChild(rightBlock);
	rightBlock.style.backgroundColor = '#5B9BD5'; 
	rightBlock.style.width = '713px';
	rightBlock.style.float = 'left';
	rightBlock.style.borderLeft = '4px solid #4D55BA';

	//right text block
	var textBlocks = [
		{text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac diam auctor, efficitur tortor ut'},

		{text: 'Aliquam consectetur sapien et tincidunt eleifend. Ut eget ipsum risus fringilla facilisis sed et sem.'},

		{text: 'Aliquam consectetur sapien et tincidunt eleifend. Ut eget ipsum risus fringilla facilisis sed et sem.'},

		{text: 'Aliquam consectetur sapien et tincidunt eleifend. Ut eget ipsum risus fringilla facilisis sed et sem.'},

		{text: 'Aliquam consectetur sapien et tincidunt eleifend. Ut eget ipsum risus fringilla facilisis sed et sem.'},

		{text: 'Aliquam consectetur sapien et tincidunt eleifend. Ut eget ipsum risus fringilla facilisis sed et sem.'}
	];
	    
	var description = document.createElement("div"); 
	var textBlock;
	    
	rightBlock.appendChild(description);
	description.className = 'description';
	description.style.padding = '20px';
	    
	for (var i = 0; i < textBlocks.length; i++) {  
		if  (i == 2) {
 			textBlock.setAttribute('id', 'flag');
		}
		if  (i == 3) {
 			textBlock.setAttribute('isDeleted', 'true');
		}
		if  (i == 4) {
 			textBlock.setAttribute('isDeleted', 'true');
		}

	    textBlock = document.createElement("p");
	    description.appendChild(textBlock);
	    textBlock.innerHTML = textBlocks[i].text;
	}

	var divWrapper = document.getElementsByClassName('wrapper');        
	divWrapper[0].appendChild(content);

}), 5000);
//main-block-END


//В большом блоке текст становиться курсивным, у первого и последнего абзаца цвет текста меняется на синий, шрифт увеличивается
setTimeout((function(){

	var cursiveText = document.getElementsByTagName('p');

	for (var i = 0; i<cursiveText.length; i++) {
		cursiveText[i].style.fontStyle = 'italic';

		//blue color
		cursiveText[0].style.color = 'blue';
		cursiveText[cursiveText.length-1].style.color = 'blue';

		//font-size - 16px
		cursiveText[0].style.fontSize = '20px';
		cursiveText[cursiveText.length-1].style.fontSize = '20px';
	}
}), 6000);	

//Список из «малого блока» меняет порядок элементов на обратный
setTimeout((function(){

	var sidebar = document.getElementsByClassName('sidebar');

	for (var i = 0; i < sidebar[0].childNodes.length; i++) {
		sidebar[0].insertBefore(sidebar[0].childNodes[i], sidebar[0].childNodes[0]);
	}
}), 7000);


//Появляется футер, содержащий 2 блока с текстом (span)
setTimeout((function(){

	var divWrapper = document.getElementsByClassName('wrapper'); 

	//footer-block
	var footer = document.createElement('div'); 
	footer.className = 'footer';
	footer.style.overflow = "hidden"; 

	//div-blocks
	var footerBlock = document.createElement('div');
	var footerBlock2 = document.createElement('div');
	footerBlock.className = 'textBlock';
	footerBlock2.className = 'textBlock';

	footer.appendChild(footerBlock); 
	footer.appendChild(footerBlock2); 

	//span
	var textBlock = document.createElement('span');
	var textBlock2 = document.createElement('span');

	footerBlock.appendChild(textBlock); 
	footerBlock2.appendChild(textBlock2);    

	//text
	var text = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac diam auctor, efficitur tortor ut.');
	var text2 = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac diam auctor, efficitur tortor ut.');

	textBlock.appendChild(text); 
	textBlock2.appendChild(text2);   

	divWrapper[0].appendChild(footer);
}), 9000);

//В «большом блоке» удаляются элементы с атрибутом isDeleted
setTimeout((function() {
	var divDescription,
		pElts; //p-elements in div

	divDescription = document.getElementsByClassName('description');
	pElts = divDescription[0].getElementsByTagName('p')

 	for (var i = 0; i < pElts.length; i++) { //никак не могу понять, почему удаляет только 1 элемент

  		if (divDescription[0].children[i].hasAttribute('isdeleted')) {
   			divDescription[0].children[i].remove(); 
  		} 
 	} 
}), 11000);

//Для двух соседних элементов относительно элемента с id = flag изменить background. Для верхнего на желтый, для нижнего на голубой
setTimeout((function(){
	var flagElement = document.getElementById('flag');
	
	flagElement.previousSibling.style.backgroundColor = 'yellow';
	flagElement.nextSibling.style.backgroundColor = 'blue';
}), 13000);

//В «малом блоке» у нечетных элементов списка заменить текст на новый (на ваше усмотрение, хоть анекдоты, хоть слова песен)
setTimeout((function() {
	var sidebar,
		liElts; //li-elements in ul

	sidebar = document.getElementsByClassName('sidebar');
	liElts = sidebar[0].getElementsByTagName('li')

	for(var i = 0; i < liElts.length; i++) {

		if (i%2 == 0) {
			sidebar[0].children[i].innerHTML = "Lorem Ipsum";
		}
	}
}), 15000);

//В «малом блоке» для четных элементов установить атрибут newAttribute = true
setTimeout((function() {
	var sidebar,
		liElts;

	sidebar = document.getElementsByClassName('sidebar');
	liElts = sidebar[0].getElementsByTagName('li')
	
	for(var i = 0; i < liElts.length; i++) {

		if (i%2 !== 0) {
			sidebar[0].children[i].setAttribute('newAttribute', 'true');
		}
	}
}), 17000);

//Для кнопок меню изменить положение: 1-ая кнопка offsetTop= 100px, 2-ая кнопка client Top= 100px, 2-ая кноп  scrollTop = 100px
setTimeout((function(){
	var menu,
		liElts;

	menu = document.getElementsByClassName('menu');
	liElts = menu[0].getElementsByTagName('li')

	for(var i = 0; i < liElts.length; i++) {
		menu[0].children[1].offsetTop = '100px';
		menu[0].children[2].clientTop = '100px';
		menu[0].children[3].scrollHeight = '100px';
	}

}), 19000);
