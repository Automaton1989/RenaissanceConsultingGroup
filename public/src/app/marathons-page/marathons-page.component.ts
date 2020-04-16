import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marathons-page',
  templateUrl: './marathons-page.component.html',
  styleUrls: ['./marathons-page.component.css']
})
export class MarathonsPageComponent implements OnInit {

  session: any;

  slides = [
    {src: "https://wallpapercave.com/wp/wp1980778.jpg"},
    {src: "/assets/img/myriathon_background.jpg"},
    {src: "https://thumbs.dreamstime.com/b/autumn-oak-leaf-fantastic-beautiful-spray-bubbles-blue-background-magic-autumn-blue-background-yellow-oak-leaf-158238643.jpg"},
  ];

  constructor(private _httpService: HttpService, private router : Router) 
  { 
    this._httpService.stream$.subscribe(this.receiveMessage.bind(this));
  }

  ngOnInit() 
  {
    this.checkSession();
    this.receiveMessage(this.session);
  }

  receiveMessage(session)
  {
    this.session = session;
  }
  checkSession()
  {
    let observable = this._httpService.checkSession();
    observable.subscribe(data => 
      {
        if(data['success'] == false)
        {
          console.log("No session found!")
        }
        else
        {
          this.session = data['user'];
          this._httpService.send(this.session);
        }
      })
  }

}
