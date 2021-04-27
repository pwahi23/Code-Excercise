const codingExercise3 = (() => {
	
	let accessoriesHomePageContainer = document.querySelectorAll('.accessoriesHomePage .row .half-hero');
	[].forEach.call(accessoriesHomePageContainer, (element) => {
		if(element.querySelector('.half-hero-outer-container .text-white').textContent === "Power, Batteries & Adapters") {
			element.parentElement.classList.add('power-battery-wrapper');
		} else if(element.querySelector('.half-hero-outer-container .text-white').textContent === "Networking") {
			element.parentElement.classList.add('networking-wrapper');
		}else if(element.querySelector('.half-hero-outer-container .text-white').textContent === "Cameras, Photo & Video") {
			element.parentElement.classList.add('camera-photo-video-wrapper');
		}
	})
	let networkingRef = document.querySelector('.networking-wrapper');
	
	const replaceImages = () => {
		let cameraPhotoVideoRef = document.querySelector('.camera-photo-video-wrapper');
		let cameraPhotoVideoImagesArr = [];
		let cameraPhotoVideoRefChildren = cameraPhotoVideoRef.querySelector('.half-modules-outer-container').children;
		[].forEach.call(cameraPhotoVideoRefChildren, (element) => {
			let imageSrc = element.querySelector('.half-inner-module-image').firstElementChild.getAttribute('src');
			cameraPhotoVideoImagesArr.push(imageSrc)
		});
		
		if(cameraPhotoVideoImagesArr.length > 0) {
			let networkingRefChildren = networkingRef.querySelector('.half-modules-outer-container').children;
			[].forEach.call(networkingRefChildren, (element, index) => {
			  element.querySelector('.half-inner-module-image').firstElementChild.setAttribute('src', cameraPhotoVideoImagesArr[index]);				
			});
		}
	}

	const changeBackgroundColor = () => {
		networkingRef.querySelector('.half-image-module').classList.remove('gray-light');
		networkingRef.querySelector('.half-image-module').style.backgroundColor = 'purple';
	}

	const calculateSum = () => {
		let powerBatteryAdapterRef = document.querySelector('.power-battery-wrapper');
		let powerBatteryAdapterChildren = powerBatteryAdapterRef.querySelector('.half-hero .half-modules-outer-container').children;
		let totalSum = 0;
		[].forEach.call(powerBatteryAdapterChildren, (element) => {
		  let sumValue = element.querySelector('.half-hero-pricing').textContent.split('$')['1'].trim();
		  totalSum += parseFloat(sumValue);
		});
		alert('$'+ ' ' + totalSum);
	}

	calculateSum();

	return {
	  callReplaceImages: () => {
	    replaceImages();
      },
	 callChangeBackgroundColor: () => {
	    changeBackgroundColor();
      }		  
	};

})();

codingExercise3.callReplaceImages();
codingExercise3.callChangeBackgroundColor();