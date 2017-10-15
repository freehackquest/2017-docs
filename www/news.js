var config = {
	'start_game': '9.10.2017',
	'end_game': '15.10.2017',
};

var news = [

	{
		date: '15.10.2017',
		text: 'Хорошие новости, <b>игра продлена до 19.10.2017 !<b> Решайте все, что двигается! И да, завезли немного хинтов',
	},{
		date: '09.10.2017',
		text: '<a target="_blank" href="http://2017-tasks.freehackquest.com/?registration=">Регистрация открыта</a>',
	},{
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
