document.addEventListener('DOMContentLoaded', () => {
	
	//Открытие формы регистрации
	const buttonShowForm = document.querySelector('.showForm');
	const formLayer = document.querySelector('.registration')
	if (buttonShowForm) {
		buttonShowForm.addEventListener('click', showForm);
		function showForm() {
			formLayer.classList.add('active');
		}
	}

	//Переключение между табами в форме регистрации
	let tabNavs = document.querySelectorAll('.registration__step-item');
	let buttonNavs = document.querySelectorAll('.registration__button-next')
	let tabPanes = document.querySelectorAll('.registration__window-elements');

	for (let i = 0; i < tabNavs.length; i++) {
	  tabNavs[i].addEventListener("click", function(e){
	    e.preventDefault();
	    let activeTabAttr = e.target.getAttribute("data-tab");
	    for (let j = 0; j < tabNavs.length; j++) {
	      let contentAttr = tabPanes[j].getAttribute("data-tab-content");
	      if (activeTabAttr === contentAttr) {
	        tabNavs[j].classList.add("active");
	        tabPanes[j].classList.add("active"); 
	      } else {
	        tabNavs[j].classList.remove("active");
	        tabPanes[j].classList.remove("active");
	      }
	    };
	  });
	}


	//load document
	let inputdata = document.querySelector('.input__file');
	
	if (inputdata) {
		inputdata.addEventListener('input', showInput)
	}
	function showInput() {
	let input = document.querySelector('.input__file').files;
	let label = document.querySelector('.form__label');
	let files = document.querySelector('.file__names')
		input = document.querySelector('.input__file').files;
		if (input.length !== 0) {
			label.classList.add('remove');
			for(let i = 0; i < input.length; i++) {
				files.innerHTML += input[i].name + '<br>';
			}
		}
	}

	//close form
	const closebutton = document.querySelector('.registration__button-next.close');
	const closeForm = () => {
		formLayer.classList.remove('active')
	}
	
	if (closebutton) {
		closebutton.addEventListener('click', closeForm);
	}
})