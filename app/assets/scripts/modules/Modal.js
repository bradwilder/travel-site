import $ from 'jquery';

class Modal {
	constructor()
	{
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}
	
	events()
	{
		// open
		this.openModalButton.click(this.openModal.bind(this));
		
		// close (x)
		this.closeModalButton.click(this.closeModal.bind(this));
		
		// any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}
	
	keyPressHandler(e)
	{
		// escape key
		if (e.keyCode == 27)
		{
			this.closeModal();
		}
	}
	
	openModal()
	{
		this.modal.addClass('modal--is-visible');
		// This will prevent the link with href='#' from scrolling the page to the top
		return false;
	}
	
	closeModal()
	{
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;
