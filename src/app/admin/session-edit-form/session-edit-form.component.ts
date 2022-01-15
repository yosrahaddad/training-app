import { Component, OnInit } from '@angular/core';


import { ActivatedRoute } from '@angular/router';

import { Observable} from 'rxjs';
import { SessionHttpService } from 'src/app/session-http.service';
import { FakeSessionItemService } from '../FakeSessionItemService';
@Component({
  selector: 'app-session-edit-form',
  templateUrl: './session-edit-form.component.html',
  styleUrls: ['./session-edit-form.component.css']
})
export class SessionEditFormComponent implements OnInit {
  id: any;
  private sub: any;
  session:any;
   tracks = ['MEAN', 'Angular','NodeJS', 'Android', 'Swift', 
'Xamarin'];

  constructor(private route: ActivatedRoute, private sessionItemService: 
    FakeSessionItemService,
    private sessionhttp: SessionHttpService) { }
  ngOnInit() {
    this.session = this.sessionItemService.getSession(1);
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
  });
  console.log('Session ID ' + this.id.toString());
 this.session = this.sessionItemService.getSession(this.id);
 }

  editSession(sessionItem: any) {
    console.log(sessionItem);
    }


}
