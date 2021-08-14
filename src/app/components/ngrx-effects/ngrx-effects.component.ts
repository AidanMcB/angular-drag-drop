import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngrx-effects',
  templateUrl: './ngrx-effects.component.html',
  styleUrls: ['./ngrx-effects.component.scss']
})
export class NgrxEffectsComponent implements OnInit {

  
  constructor( private _http: HttpClient){}
  
  public testFetch(): void {
    this._http.get('https://ngrxeffects-default-rtdb.firebaseio.com/').subscribe( res => {
      console.log(res)
    })
  }
  
  ngOnInit(): void {
  }

}
