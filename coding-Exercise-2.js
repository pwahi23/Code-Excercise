const codingExercise2 = function() {

	let divResourceLinksRef = document.querySelector('#divResourceLinks .container');
	divResourceLinksCopy = divResourceLinksRef ? divResourceLinksRef.cloneNode(true): '';
	let divResourceLinksCopyChildren = divResourceLinksCopy !== '' ? divResourceLinksCopy.firstElementChild.children: [];
	
	let divEnterpriseProductLinksRef = document.querySelector('#divEnterpriseProductLinks .container');
	divEnterpriseProductLinksCopy = divEnterpriseProductLinksRef ? divEnterpriseProductLinksRef.cloneNode(true): '';
	
	if (divEnterpriseProductLinksCopy !== '') {
		divEnterpriseProductLinksCopy.children['0'].remove();
		divEnterpriseProductLinksCopy.firstElementChild.classList.remove('pb-md-14');
	}

	let divEnterpriseProductLinksCopyChildren = divEnterpriseProductLinksCopy !== '' ? divEnterpriseProductLinksCopy.firstElementChild.children: [];
	
	if(divEnterpriseProductLinksRef) {
		Array.prototype.forEach.call(divResourceLinksCopyChildren, function(element) {
			element.classList.remove('col-lg-3', 'mb-lg-0');
			element.classList.add('col-lg-6');
		});
		
		Array.prototype.forEach.call(divEnterpriseProductLinksCopyChildren, function(element) {
			element.classList.remove('col-md-6');
			element.classList.add('col-md-12');
		});
		
		let documentFragment = document.createDocumentFragment();
		let div = document.createElement('div');
		div.classList.add('row');
		div.innerHTML = '<div class="col-md-6 col-sm-12">'+ divResourceLinksCopy.innerHTML +'</div> <div class="col-md-6 col-sm-12">'+ divEnterpriseProductLinksCopy.innerHTML +'</div>';
		documentFragment.appendChild(div);
		
		divEnterpriseProductLinksRef ? divEnterpriseProductLinksRef.parentElement.remove(): '';
		divResourceLinksRef.children['0'].remove();
		divResourceLinksRef.appendChild(documentFragment);
	}
}
codingExercise2();