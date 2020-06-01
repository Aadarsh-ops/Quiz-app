import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    // private numberSource= new BehaviorSubject();
    // currentNumber = this.numberSource.asObservable();

  constructor() { }

      // changeNumber(totalScore: number){
      //   this.numberSource.next(totalScore)
      // }
     totalScore: number[]=[];
}
