import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-empty-screen',
  templateUrl: './empty-screen.component.html',
  styleUrls: ['./empty-screen.component.css']
})
export class EmptyScreenComponent implements OnInit {

@Input() model:any;

constructor(){}

ngOnInit() {
  
}

}
