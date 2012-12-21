(function($){

	$.fn.tweet_dl = function(dl_link){

		//Контейнер для твит кнопки
		var this_div = $(this);
		//Добавляем кнопку к контейнеру
		this_div.append('<a href="https://twitter.com/share" class="twitter-share-button" data-lang="ru">Твитнуть</a>');

		//Функция скачивания
		function downloader(intent_event){
			//Редирект на ссылку с файлом
			window.location = dl_link;
		}

		//Навешиваем нашу функцию скачивания на событие твита
		//Полный список событий: click, tweet, retweet, favorite, follow
		twttr.events.bind('tweet', downloader);

	}

})(jQuery);