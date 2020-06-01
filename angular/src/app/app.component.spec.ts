import { TestBed, async, fakeAsync,tick, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultComponent } from './navbar/result/result.component';
import { routes } from './app-routing.module';
import { componentFactoryName } from '@angular/compiler';
 

describe('Router: App', () => {

  let location: Location;
  let router: Router;
  let component: AppComponent;
  let fixture;
  

   
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(routes)],
//       declarations: [
//         MainComponent,
//         NavbarComponent,
//         ResultComponent,
//         AppComponent
//       ]
//     });
   
//     router = TestBed.get(Router);
//     location = TestBed.get(Location);
//     router.initialNavigation();

//     it('navigate to "" redirect you to /main' , fakeAsync(() => {
//       router.navigate(['']);
//       tick();
//       expect(location.path()).toBe('/main');
//     }))

//     it('navigate to "" redirect you to /navbar' , fakeAsync(() => {
//       router.navigate(['navbar']);
//       tick();
//       expect(location.path()).toBe('/navbar');
//     }))

//     it('navigate to "" redirect you to /result' , fakeAsync(() => {
//       router.navigate(["result"]);
//       tick();
//       expect(location.path()).toBe("/result");
//     }))
// });

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
 
  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('FunctionHall app is running!');
  // });
});


  

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule
//       ],
//       declarations: [
//         AppComponent,
//       ],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'trivia-quiz-app'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('trivia-quiz-app');
//   });

//   it('should render title in a h1 tag', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('h1').textContent).toContain('Welcome to trivia-quiz-app!');
//   });
// });
