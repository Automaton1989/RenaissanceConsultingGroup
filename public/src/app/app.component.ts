/* 
  ||--------------------------------||
  ||   Main Component for Website   ||
  ||--------------------------------||
*/

import { Component, enableProdMode } from '@angular/core'; enableProdMode();
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = "RC";
  navbarOpen = false;
  hamburgerOpen = false;
  session: any;
  admin: any;

  constructor(private _httpService: HttpService, private router: Router, private titleService: Title) {
    this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
  }

/* 
  ||--------------------------------||
  ||       On Init Functions        ||
  ||--------------------------------||
*/

  ngOnInit() {
    this.setTitle("RC | Home");
    this.receiveMessage(this.session);
  } 

  /* Set Title for document header for browser */

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  /* This will toggle the side navbar for the browser */ 

  toggleNavbar()
  {
    this.navbarOpen = !this.navbarOpen;
  }

  /* This will toggle the hamburger menu on smaller screens */

  toggleHamburger()
  {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  /* This is for passing session data accross the angular components */

  receiveMessage(session) {
    this.session = session;
  }

}
