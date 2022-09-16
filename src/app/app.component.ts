import { Component, OnInit, HostBinding, HostListener, Renderer2, OnDestroy } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular';
  stopListening: Function; 
  
  
  constructor(private renderer: Renderer2) {
    this.stopListening = renderer.listen('window', 'message', this.handleMessage.bind(this));
  }
  
  handleMessage(event: Event) {
    const message = event as MessageEvent;
	  
	  if(message.origin=='http://login.vidyapun.com')
	  {
		  console.log("message.data",message.data);
		  localStorage.setItem('currentUser', JSON.stringify(message.data));
	  }
	  else
	  {
		  localStorage.removeItem('currentUser');
		  return false;
	  }   

    
  }
  
  ngOnDestroy() {
    this.stopListening();
  }
 
  
  ngOnInit() {
  	/*-------------------------------------
    Offcanvas Menu activation code
    -------------------------------------*/
    $('.navbar').on('click', '.offcanvas-menu-btn', function (e) {
      e.preventDefault();
      var $this = $(this),
          wrapper = $(this).parents('body').find('>.navbar'),
          wrapMask = $('<div />').addClass('offcanvas-mask'),
          offCancas = $('#offcanvas-wrap'),
          position = offCancas.data('position') || 'left';

      if ($this.hasClass('menu-status-open')) {
          wrapper.addClass('open').append(wrapMask);
          $this.removeClass('menu-status-open').addClass('menu-status-close');
          offCancas.css({
              'transform': 'translateX(0)'
          });
      } else {
          removeOffcanvas();
      }

      function removeOffcanvas() {
          wrapper.removeClass('open').find('> .offcanvas-mask').remove();
          $this.removeClass('menu-status-close').addClass('menu-status-open');
          if (position === 'left') {
              offCancas.css({
                  'transform': 'translateX(-100%)'
              });
          } else {
              offCancas.css({
                  'transform': 'translateX(100%)'
              });
          }
      }
      $(".offcanvas-mask, .offcanvas-close").on('click', function () {
          removeOffcanvas();
      });

      return false;
  });

  }
}
