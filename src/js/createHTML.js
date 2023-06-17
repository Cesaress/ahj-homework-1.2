export default function createHTML(tag, quantity) {
	const perentElement = document.querySelector('.table-game');

	for (let i = 0; i < quantity; i++) {
		let element = document.createElement(tag);
		element.classList.add('cell');

		perentElement.insertAdjacentElement("beforeend", element);
	};
}

export default function createHTML(arr, flag) {
	let tableEl = document.querySelector('.table');
	tableEl.innerHTML = '';

	let stringEl = document.createElement('tr');
	
	if(!flag) {
		stringEl.innerHTML = `<td class="heading">id</td>
			<td class="heading">title</td>
			<td class="heading">year</td>
			<td class="heading">imdb</td>`;
	} else {
		stringEl.innerHTML = `<td class="heading">id <img class="image" src="./img/down-icon.png" alt=""></td>
			<td class="heading">title</td>
			<td class="heading">year</td>
			<td class="heading">imdb</td>`;
	}
	
	tableEl.insertAdjacentElement('beforeend', stringEl);
	
	
	arr.forEach(element => {
		stringEl = document.createElement('tr');
		stringEl.innerHTML += `<td class="cell">${element.id}</td>
		<td class="cell">${element.title}</td>
		<td class="cell">${element.year}</td>
		<td class="cell">imdb: ${element.imdb.toFixed(2)}</td>`;
		tableEl.insertAdjacentElement('beforeend', stringEl); 
	});
}