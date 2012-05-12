module.exports = function(bot, module) {

	var words = [
		'arse',
		'ass',
		'bastard',
		'bugger',
		'bollocks',
		'bullshit',
		'cock',
		'cunt',
		'damn',
		'dick',
		'douche',
		'fag',
		'fuck',
		'fucked',
		'piss',
		'shit',
		'wank'
	];

	module.addTrigger({
		match: new RegExp('(?:^|\\s)(' + words.join('|') + ')(?:\\s|\\.|\\?|!|$)', 'i'),
		func: function(request) {
			request.reply = 'You have been fined one credit for a violation of the verbal morality statute.';
			bot.reply(request);
		}
	});

};
