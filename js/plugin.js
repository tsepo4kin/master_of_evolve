let slide = document.querySelector('.fa-caret-down');
let underquest = document.querySelectorAll

slide.addEventListener('click', function(e){
	let parent = e.target.closest('.quest');
	let child = parent.querySelector('.underquests-list');
	child.classList.toggle('visually-hidden');
})