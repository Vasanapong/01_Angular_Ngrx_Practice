import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-reducer';

  constructor(private store:Store<{ store:any }>) {
     // Return Observable ... use subscribe to see states
    this.store.select('store').subscribe((res)=>console.log(res))
  }

  addFive(){
    this.store.dispatch({type:'RANDOM_NUMBER',payload:150})
  }
}
