//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function(){
	focusSearch();
});

function focusSearch(){
	let searchInput = document.querySelector('.input');

	if(searchInput)
	{
		searchInput.focus();
	}
}