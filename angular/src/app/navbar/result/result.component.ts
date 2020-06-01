import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  
   right: number=0;
   total: number=0;
   wrong:number=0;
  
   constructor(private data: DataService,private router: Router) { }
  
  ngOnInit() {
   this.result();
  }
  
  onback=()=> this.router.navigate(['navbar']);
  logout=()=>{
    this.router.navigate(['/main']);
    return localStorage.removeItem('token');
  }
  result=()=>{ if(this.data.totalScore.length!=0){
              this.right= this.data.totalScore.reduce((acc,curr)=> acc+curr );
               this.total = this.data.totalScore.length;
               this.wrong=this.total-this.right;}
 }
 
}