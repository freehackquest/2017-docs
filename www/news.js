var config = {
	'start_game': '9.10.2017',
	'end_game': '15.10.2017',
};

var news = [
	{
		date: '11.08.2017',
		text: 'Игра будет проходить с 9.10.2017 по 15.10.2017',
	}
];


function renderNews(){
	for(var i in news){
		$('#small_news').append(''
			+ '<h5 class="blockquote-title-mini">' + news[i].date + '</h5>'
			+ '<p class="blockquote-content">' + news[i].text + '</p>')
	}
}
renderNews();
