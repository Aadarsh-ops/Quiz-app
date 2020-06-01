import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selector,Respond,Result } from './interface';
import { HttpClient} from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from './data.service';
 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit{
  _url :string = '//opentdb.com/api.php?amount=10';
  SelectCategory: string='';
  SelectDifficulty: string='';
  SelectType: string='';
  Questions:Result[];
  Question:Result;
  no: number=0;
  yourAnswer: string;
  yourOption: string[];
  
    
  	categorys: selector[] = [
    // in this i have change the value to viewvalue by mistake
    {value: 'Any Category', viewValue: ''},{value:'General Knowledge',viewValue:'9'},{value:'Books',viewValue:'10'},{value:'films',viewValue:'11'},
    {value:'Music',viewValue:'12'},{value:'Television',viewValue:'14'},{value:'VideoGames',viewValue:'15'},
    {value:'BoardGames',viewValue:'16'},{value:'Science & Nature',viewValue:'17'},{value:'Computers',viewValue:'18'},{value:'MatheMatics',viewValue:'19'},
    {value:'Mythology',viewValue:'20'},{value:'Sports',viewValue:'21'},{value:'Geography',viewValue:'22'},{value:'History',viewValue:'23'},
    {value:'Politics',viewValue:'24'},{value:'Art',viewValue:'25'},{value:'Celebrities',viewValue:'26'},{value:'Animal',viewValue:'27'},
    {value:'Veichle',viewValue:'28'},{value:'Comics',viewValue:'29'},{value:'Science:Gadgets',viewValue:'30'},{value:'Anime',viewValue:'31'},
    {value:'Cartoon',viewValue:'32'}
       ];
  levels: selector[] =[
    {value: '', viewValue: 'Any Category'},
    {value: 'easy', viewValue: 'Easy'},
    {value: 'medium', viewValue: 'Medium'},
    {value: 'hard', viewValue: 'Hard'}
       ];
  types: selector[] =[
    {value: '', viewValue: 'Any Category'},
    {value: 'multiple', viewValue: 'MutipleChoice'},
    {value: 'boolean', viewValue: 'True/False'}
  ];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private _http : HttpClient,private _snackBar: MatSnackBar,
    private router: Router,private data: DataService) {}
  ngOnInit(){
      this.getQue().subscribe(res=>{
      this.Questions=(res.results);
       this.createQue();
     });
  }
  onChoose=()=>{ this.no=0;
                 this.getQue().subscribe((res:Respond)=>{
                 this.Questions=(res.results);
                 this.createQue();});}
  
  onSubmit(){
    if(this.yourAnswer === undefined)
      this.openSnackBar('First','Choose your answer');
    else{
    if(this.yourAnswer==this.Question.correct_answer){
      this.data.totalScore.push(1);
         this.openSnackBar(this.yourAnswer,'It is  correct answer');
    }else{
      this.data.totalScore.push(0);
      this.openSnackBar('Wrong',`${this.Question.correct_answer} is a correct answer`);
    }
    this.no+=1;
    this.createQue();
    this.yourAnswer =undefined;
    }}
  
  onFinish=()=>this.router.navigate(['result']);
  getQue=()=> this._http.get<Respond>(`${this._url}&category=${this.SelectCategory}&difficulty=${this.SelectDifficulty}&type=${this.SelectType}`);
  
  openSnackBar=(message: string,action: string)=>{
    this._snackBar.open(message,action,{
      duration: 3000,
    });
  }
  createQue=()=>{this.Question=this.Questions[this.no];
                 this.Question.incorrect_answers.splice(Math.floor(Math.random() * 2),0,this.Question.correct_answer);
                this.yourOption=this.Question.incorrect_answers}
}
