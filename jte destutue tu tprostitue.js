// ==UserScript==
// @name         JTE DESTITUE TU TPROSITUE
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.facebook.com/messages/read/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
	'use strict';
	var divMessages = document.querySelector('#messageGroup div:nth-child(2)').querySelectorAll('div.f');
	var tab = localStorage.getItem("mesMessages");
	if (!tab) {
		tab = [];
	} else {
		tab = JSON.parse(tab);
		console.log("divMessages",divMessages);
	}
	for (var i = 0;i < divMessages.length;i++) {
		var divMessage = divMessages[i];
		var span = divMessage.querySelector('div.br div span');
		console.log("span",span);
		if (span)
		{
			var text = divMessage.querySelector('div.br div span').innerText.trim();
			console.log("text",text);
			if (text.length)
				tab.push(text);
		}
	}
		open('http://localhost/index.php?datas='+JSON.stringify(tab))
	// localStorage.setItem('mesMessages', JSON.stringify(tab));
	var link = document.querySelector('#see_older');
	if(link)
		link.querySelector("a").click();
	else
	{
		localStorage.removeItem('mesMessages');
	}
})();