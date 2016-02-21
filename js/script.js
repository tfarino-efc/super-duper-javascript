(function(){
	var table = document.getElementsByTagName('table')[0];
	table.addEventListener('click', addRows);
	var addRow = document.getElementsByClassName('addRow');
	var removeRow = document.getElementsByClassName('removeRow');


	function addRows(e) {
		var container = document.getElementsByClassName('container')[0],
			row = document.createElement('tr'),
			column,
			lastColumn = {text: 'Удалить строку -'};

		//создание td в tr
		for (var i = 0; i < 5; i++) {
			column = document.createElement('td');
			row.appendChild(column);
			var link = document.createElement('a');
			link.className = 'removeRow';

			//добавление ссылки
			if (i == 4) {
			column.appendChild(link);	
			link.innerHTML = lastColumn.text;
			}	
		}

		var target = e.target,
			containerBox = target.parentNode.parentNode.parentNode.nextSibling;
			console.log(containerBox);

		//добавление строки	
		if (target.className == 'addRow') {
			containerBox.appendChild(row);
		}

		//удаление строки				
		if (target.className == 'removeRow') {
			var	tr = target.parentNode.parentNode;

			tr.remove();

		}	

		//Добавление соответствующего номера строчке
		//var containerBox = target.parentNode.parentNode;
		var firstColumnNumber = containerBox.getElementsByTagName('tr');
		for (var i = 0; i < firstColumnNumber.length; i++) {
		 	firstColumnNumber[i].children[0].innerHTML = i + 1;
		}

	}


})();
