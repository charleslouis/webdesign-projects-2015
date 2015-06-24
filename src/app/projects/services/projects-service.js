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
			'name': 'Julie VIGNARAJAH',
			'title': 'PARIS FoodStole',
			'description': 'Occidental restaurant in Sri Lanka',
			'logo': 'yeoman.png',
			'url': 'projects/B00309675',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00309675/img/logo.jpg'
		},
		{
			'id': 'B00342015',
			'name': 'Juliette PIAT',
			'title': 'Juliette and Tyler',
			'description': 'Our Story in five dates close to our hearts',
			'logo': 'yeoman.png',
			'url': 'projects/B00342015',
			'imagePath': 'https://dl.dropboxusercontent.com/s/70tnygbf0dxru8w/Photo%202%20Our%20story%20Page.JPG?dl=0'
		},
		{
			'id': 'B00437942',
			'name': 'Laurence LAI-KING',
			'title': 'Curried',
			'description': 'We\'re preparing finger-licking Indian food, just what you wanted!',
			'logo': 'yeoman.png',
			'url': 'projects/B00437942',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00437942/imgks/logocurried.png'
		},
		{
			'id': 'B00462613',
			'name': 'Samy SADOU',
			'title': 'Freeletics',
			'pic': 'https://lh3.googleusercontent.com/-2n1fa_NYRAg/AAAAAAAAAAI/AAAAAAAAAEY/-GzBsaAyysw/s90-c-k-no/photo.jpg',
			'description': 'Freeletics Locations and Training Assistant',
			'logo': 'yeoman.png',
			'url': 'projects/B00462613',
			'imagePath': 'http://www.google.fr/url?source=imglanding&ct=img&q=http://motivationsportive.fr/wp-content/uploads/2014/09/freeletics.jpg&sa=X&ved=0CAkQ8wdqFQoTCOevj96pjcYCFQY9FAodejsAMQ&usg=AFQjCNECCzhNl4f3IVXPt5b1Lc_ykymD8A'
		},
		{
			'id': 'B00470439',
			'name': 'Boris FABRE',
			'title': 'Random Event',
			'description': 'RandomEvent is a collaborative platform that allows you to find local events organized by real local people.',
			'logo': 'yeoman.png',
			'url': 'projects/B00470439',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00470439/img/4.jpg'
		},
		{
			'id': 'B00496963',
			'name': 'Maud GUBLER',
			'title': 'CHARE',
			'description': 'Chare is a sharing platform for homeworks. It is not like every one of us has never struggled with a homework at school.',
			'logo': 'yeoman.png',
			'url': 'projects/B00496963',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00496963/img/fin.jpg'
		},
		{
			'id': 'B00497716',
			'name': 'Déborah BOMPANE',
			'title': 'MY VERY OWN WORLD TOUR',
			'description': 'French adventurer | travelling to find myself, to discover, to dare, to live alife...',
			'logo': 'yeoman.png',
			'url': 'projects/B00497716',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00497716/img/bagpack.jpg'
		},
		{
			'id': 'B00514339',
			'name': 'Guillaume JARDINE',
			'title': 'QUENZY',
			'description': 'QUENZY Official Website',
			'logo': 'yeoman.png',
			'url': 'projects/B00514339',
			'imagePath': 'http://imagizer.imageshack.us/v2/xq90/537/iBsrcV.jpg'
		},
		{
			'id': 'B00522473',
			'name': 'Jérôme MOVSCHIN',
			'title': 'JERVCHIN',
			'description': 'Coopérative bédéhique bio',
			'logo': 'yeoman.png',
			'url': 'projects/B00522473',
			'imagePath': 'http://codetricks.eu/wd-submissions-2015/projects/B00522473/img/comics/Caverne03.png'
		},
		{
			'id': 'B00571183',
			'name': 'Manuel HEUTEUX',
			'title': 'Bespoke bar & restaurant',
			'description': 'In a cosy ambiance, you can enjoy our original coktails or you can ask our barman to do something "bespoke" for you !',
			'logo': 'yeoman.png',
			'url': 'projects/B00571183',
			'imagePath': 'http://www.bkrw.com/wp-content/uploads/2014/07/MG_27051.jpg'
		},
		{
			'id': 'B00573117',
			'name': 'Thuong BUI',
			'title': 'Thuong BUI',
			'description': 'My personal website',
			'logo': 'yeoman.png',
			'url': 'projects/B00573117',
			'imagePath': 'http://i62.tinypic.com/vem0ef.jpg'
		},
		{
			'id': 'B00592919',
			'name': 'Gutty MOTINDO',
			'title': 'Ulysse On The Road',
			'description': 'Les Tribulations d\'un promeneur solitaire',
			'logo': 'yeoman.png',
			'url': 'http://www.ulysseontheroad.com/',
			'imagePath': 'http://www.ulysseontheroad.com/images/Ulysse.JPG'
		},
		{
			'id': 'B00417581',
			'name': 'Laurie PERNIOLA',
			'title': 'Adèle Jallet',
			'description': 'Artiste peintre et plasticienne',
			'logo': 'yeoman.png',
			'url': 'projects/B00417581',
			'imagePath': 'projects/B00417581/img/logomoi.jpg'
		}
    ];
  });
