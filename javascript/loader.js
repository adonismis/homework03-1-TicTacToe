requirejs.config({
	baseUrl: 'bower_components/',
	paths:{
		'jquery':'jquery/dist/jquery.min'
	}
});

require(
		[
			'jquery',
			'bower_components/jquery-ui/ui/jquery-ui.js',
			'bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
			'javascript/main.js'
		],function () {
			console.log('Loader');
			$('.grid').playRound();
		}
		);