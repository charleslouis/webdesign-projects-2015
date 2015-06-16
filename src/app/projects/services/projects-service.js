'use strict';
/**
 * @ngdoc service
 * @name webdesignProjects2015.projects
 * @description
 * # projects
 * Service in the webdesignProjects2015.
 */
angular.module('webdesignProjects2015')
  .service('projectsService', function () {
// AngularJS will instantiate a singleton by calling 'new' on this function
    this.projects = [
		{
			'id': 'B00309675',
			'name': 'Prénom NOM',
			'title': 'B00309675',
			'description': 'B00309675',
			'logo': 'yeoman.png',
			'url': 'projects/B00309675',
			'report_url': 'projects/B00309675/report',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00309675/img/logo.jpg'
		},
		{
			'id': 'B00342015',
			'name': 'Prénom NOM',
			'title': 'Juliette and Tyler',
			'description': 'Our Story in five dates close to our hearts',
			'logo': 'yeoman.png',
			'url': 'projects/B00342015',
			'report_url': 'projects/B00342015/report',
			'imagePath': 'https://dl.dropboxusercontent.com/s/70tnygbf0dxru8w/Photo%202%20Our%20story%20Page.JPG?dl=0'
		},
		{
			'id': 'B00437942',
			'name': 'Prénom NOM',
			'title': 'Curried',
			'description': 'We\'re preparing finger-licking Indian food, just what you wanted!',
			'logo': 'yeoman.png',
			'url': 'projects/B00437942',
			'report_url': 'projects/B00437942/report',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00437942/imgks/logocurried.png'
		},
		{
			'id': 'B00462613',
			'name': 'Prénom NOM',
			'title': 'Freeletics',
			'description': 'Freeletics Locations and Training Assistant',
			'logo': 'yeoman.png',
			'url': 'projects/B00462613',
			'report_url': 'projects/B00462613/report',
			'imagePath': 'http://www.google.fr/url?source=imglanding&ct=img&q=http://motivationsportive.fr/wp-content/uploads/2014/09/freeletics.jpg&sa=X&ved=0CAkQ8wdqFQoTCOevj96pjcYCFQY9FAodejsAMQ&usg=AFQjCNECCzhNl4f3IVXPt5b1Lc_ykymD8A'
		},
		{
			'id': 'B00470439',
			'name': 'Prénom NOM',
			'title': 'Random Event',
			'description': 'RandomEvent is a collaborative platform that allows you to find local events organized by real local people.',
			'logo': 'yeoman.png',
			'url': 'projects/B00470439',
			'report_url': 'projects/B00470439/report',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00470439/img/4.jpg'
		},
		{
			'id': 'B00496963',
			'name': 'Prénom NOM',
			'title': 'CHARE',
			'description': 'Chare is a sharing platform for homeworks. It is not like every one of us has never struggled with a homework at school.',
			'logo': 'yeoman.png',
			'url': 'projects/B00496963',
			'report_url': 'projects/B00496963/report',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00496963/img/fin.jpg'
		},
		{
			'id': 'B00497716',
			'name': 'Prénom NOM',
			'title': 'MY VERY OWN WORLD TOUR',
			'description': 'FRENCH ADVENTURER | TRAVELLING TO FIND MYSELF, TO DISCOVER, TO DARE, TO LIVE A LIFE...',
			'logo': 'yeoman.png',
			'url': 'projects/B00497716',
			'report_url': 'projects/B00497716/report',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00497716/img/bagpack.jpg'
		},
		{
			'id': 'B00514339',
			'name': 'Prénom NOM',
			'title': 'QUENZY',
			'description': 'QUENZY Official Website',
			'logo': 'yeoman.png',
			'url': 'projects/B00514339',
			'report_url': 'projects/B00514339/report',
			'imagePath': 'http://imagizer.imageshack.us/v2/xq90/537/iBsrcV.jpg'
		},
		{
			'id': 'B00522473',
			'name': 'Prénom NOM',
			'title': 'JERVCHIN',
			'description': 'Coopérative bédéhique bio',
			'logo': 'yeoman.png',
			'url': 'projects/B00522473',
			'report_url': 'projects/B00522473/report',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00522473/img/comics/Caverne03.png'
		},
		{
			'id': 'B00571183',
			'name': 'Prénom NOM',
			'title': 'Bespoke bar & restaurant',
			'description': 'In a cosy ambiance, you can enjoy our original coktails or you can ask our barman to do something "bespoke" for you !',
			'logo': 'yeoman.png',
			'url': 'projects/B00571183',
			'report_url': 'projects/B00571183/report',
			'imagePath': 'http://www.bkrw.com/wp-content/uploads/2014/07/MG_27051.jpg'
		},
		{
			'id': 'B00573117',
			'name': 'Prénom NOM',
			'title': 'Thuong BUI',
			'description': 'My personal website',
			'logo': 'yeoman.png',
			'url': 'projects/B00573117',
			'report_url': 'projects/B00573117/report',
			'imagePath': 'http://i62.tinypic.com/vem0ef.jpg'
		}
    ];
  });
