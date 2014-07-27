require(
			[
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/jquery-ui/ui/jquery-ui.js',
				'bower_components/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js',
				'javascript/main.js'
			],function () {
				console.log('Loader');
				$('.grid').playRound();
			}
		);