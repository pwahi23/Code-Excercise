const codingExercise1 = function() {

  let divResourceLinksRef = document.querySelectorAll('.leftanav__option__container .anavmfe__accordion__item');
  [].forEach.call(divResourceLinksRef, (element) => {
	if(element.querySelector('.anavmfe__accordion__item__name').textContent === 'Processor Generation') {
		element.parentElement.querySelector('.anavmfe__facets__wrapper_conatiner').after(element);
	}
  })
}
codingExercise1();