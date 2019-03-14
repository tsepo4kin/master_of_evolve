let planToDay = document.querySelector('.plan-today');
let addMainQuest = document.querySelector('.add-quest-task');
let addUnderQuest = document.querySelector('.add-underquest-task');

function generatePlans(mainText) {
	let planToDay = document.querySelector('.plan-today');
	let liQuest = document.createElement('li');
	let qText = document.createElement('p');
	let iconDown = document.createElement('i');
	let iconClose = document.createElement('i');
	let underquestsList = document.createElement('ul');
	let underquestsForm = document.createElement('form');
	let label = document.createElement('label');
	let input = document.createElement('input');
	let addBtn = document.createElement('button');

	liQuest.className = 'quest';
	qText.className = 'quest-text';
	qText.textContent = mainText;
	iconClose.className = 'icon-plan fas fa-times'
	iconDown.className = 'icon-plan fas fa-caret-down';
	underquestsList.className = 'underquests-list visually-hidden';
	underquestsForm.className = 'underquest-input-form visually-hidden';
	label.className = 'underquest-input-label';
	label.textContent = 'Добавление подзадачи';
	input.className = 'underquest-input-input';
	addBtn.className = 'add-underquest-task';
	addBtn.textContent = 'Добавить подзадачу';

	underquestsForm.appendChild(label);
	underquestsForm.appendChild(input);
	underquestsForm.appendChild(addBtn);

	liQuest.appendChild(qText);
	liQuest.appendChild(iconDown);
	liQuest.appendChild(iconClose);
	liQuest.appendChild(underquestsList);
	liQuest.appendChild(underquestsForm);


	planToDay.appendChild(liQuest);
}

function generateUnderPlans(underText) {
	let underQuest = document.createElement('li');
	underQuest.className = 'underquest-task-text';
	underQuest.textContent = '• ' + underText;

	return underQuest;
}

planToDay.addEventListener('click', function(e){
	if(e.target.classList.contains('fa-times')) {
		let parent = e.target.closest('.quest');
		parent.remove();
	}

	if(e.target.classList.contains('fa-caret-down')){
		let parent = e.target.closest('.quest');
		let child = parent.querySelector('.underquests-list');
		child.classList.toggle('visually-hidden');
		parent.querySelector('.underquest-input-form').classList.toggle('visually-hidden');
	}
});

addMainQuest.addEventListener('click', function(e){
	e.preventDefault();
	let inputQuest = document.getElementById('quest-input').value;
	if(!inputQuest) {
		alert('Напиши задачу');
		return;
	}
	generatePlans(inputQuest);
})

addUnderQuest.addEventListener('click', function(e){
	e.preventDefault();
	let parentQ = e.target.closest('.quest');
	let parent = parentQ.querySelector('.underquests-list');
	let inputUndQuest = document.getElementById('underquest-input').value;
	let underq = generateUnderPlans(inputUndQuest);
	console.log(underq);

	parent.appendChild(underq);
})