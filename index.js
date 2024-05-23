window.addEventListener('scroll', function() {
	var menu = document.getElementById('menu');
	if (window.pageYOffset > 0) {
		menu.style.backgroundColor = '#2b2b2b';
	} else {
		menu.style.backgroundColor = 'transparent';
	}
});