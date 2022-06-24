	//SLIDER
		let slider=document.querySelectorAll(".slider");
	slider.forEach(el => {
		let sliderItem = new Glide(el, {
			type: 'carousel',
			perView: 1,
		});
		sliderItem.mount();
	});