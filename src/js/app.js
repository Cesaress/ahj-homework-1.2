import createHTML from './createHTML';

createHTML('div', 16);

const arrayCell = document.querySelectorAll('.cell');
arrayCell[0].classList.add('active_cell');
let beforeindex = 0;

setInterval(() => {
	let index = Math.floor(Math.random() * arrayCell.length);

	if(index != beforeindex) {
		arrayCell[beforeindex].classList.remove('active_cell');
		arrayCell[index].classList.add('active_cell');
		beforeindex = index;
	}
}, 1000);

const arrayJSON = [
  {
    "id": 26,
    "title": "Побег из Шоушенка",
    "imdb": 9.30,
    "year": 1994
  },
  {
    "id": 25,
    "title": "Крёстный отец",
    "imdb": 9.20,
    "year": 1972
  },
  {
    "id": 27,
    "title": "Крёстный отец 2",
    "imdb": 9.00,
    "year": 1974
  },
  {
    "id": 1047,
    "title": "Тёмный рыцарь",
    "imdb": 9.00,
    "year": 2008
  },
  {
    "id": 223,
    "title": "Криминальное чтиво",
    "imdb": 8.90,
    "year": 1994
  }
];

createHTML(arrayJSON, false);

setTimeout(() => {
	arrayJSON.sort((a, b) => {
		if (a.id > b.id) {
			return 1;
		};
		
		if (a.id < b.id) {
			return -1;
		};
		
		return 0;
	});

	createHTML(arrayJSON, true);
}, 15000);