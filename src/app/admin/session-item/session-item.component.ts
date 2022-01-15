import { Component, OnInit,Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-session-item',
  templateUrl: './session-item.component.html',
  styleUrls: ['./session-item.component.css']
})
export class SessionItemComponent implements OnInit {
  alignement='right';
  couleur='red';
  
@Input() session:any;
 @Output() participantsChange= new EventEmitter<any>();

  constructor() { }

 
inscrire(){
  console.log('Nouvelle Inscription..');
  this.session.name='Formation web avancé';
  this.session.participants= +this.session.participants+1;
  console.log(this.session.participants + 'Participants..');
  this.participantsChange.emit({value: this.session.participants
     });
     if (this.session.participants >=20){

this.session.isCompleted=true;
    }
 
}
 ngOnInit(): void {
  }
}
