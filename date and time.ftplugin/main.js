define(function(require, exports, module) {
	'use strict';

	var Extensions = require('ft/core/extensions').Extensions,
		DateUtils = require('ft/util/date');

	Extensions.addCommand({
		name: 'date',
		description: 'Insert the current date',
		performCommand: function (editor) {
			var now = new Date();
			editor.replaceSelection(now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate(),
					'around');
		}
	});

	Extensions.addCommand({
		name: 'time',
		description: 'Insert the current time',
		performCommand: function (editor) {
			var now = new Date();
			editor.replaceSelection(now.getHours() + ':' + now.getMinutes(), 'around');
		}
	});

});
