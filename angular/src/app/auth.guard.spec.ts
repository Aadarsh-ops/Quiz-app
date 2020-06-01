import { TestBed, fakeAsync,tick, async } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { LinkService } from './link.service';
import { Router, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MainComponent } from './main/main.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('Auth Service Test', () => {
    let service: AuthGuard;
    let linkService: LinkService;
    const route: Routes = [{path: 'main', component: MainComponent}]
    let router = {
      navigate: jasmine.createSpy('navigate')
  };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [FormsModule, CommonModule,HttpClientModule],
        providers: [AuthGuard, LinkService,
            {provide: Router, useValue: router}
        ]
    })
        .compileComponents();
        service = TestBed.get(AuthGuard);
        linkService = TestBed.get(LinkService);
        router = TestBed.get(Router);
    }));
      it('be able to hit route when user is logged in', () => {
          linkService.loggedIn = () => true;
          expect(service.canActivate()).toBe(true);
      });
      it('not be able to hit route when user is not logged in', fakeAsync(() => {
        linkService.loggedIn = () => false;
        router.navigate('main');
        tick();
        expect(service.canActivate()).toBe(false);
    }));
  
});







// describe('Auth Service est', () => {
//   let service: AuthGuard;
//   let linkService: LinkService;
//   let router: Router; 
//   const route: Routes = [{path: 'main', component: MainComponent}]
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(route), ReactiveFormsModule, FormsModule],
//       providers: [AuthGuard, LinkService],
//       declarations: [MainComponent]
//     }).compileComponents()
//     service = TestBed.get(AuthGuard);
//     linkService = TestBed.get(LinkService);
//     router = TestBed.get(Router);
//   });

//   it('check active true', () => {
//     spyOn(linkService, 'loggedIn').and.returnValue(true);
//     expect(service.canActivate()).toBe(true);
//   })
//   it('check active false', fakeAsync(() => {
//     spyOn(linkService, 'loggedIn').and.returnValue(false);
//     router.navigateByUrl('main');
//     tick();
//     expect(router.url).toBe('/main');
//   }));

// })
// beforeEach(() => { 
//   console.log('CCCC');
// });

// it('#getValue should return real value', () => {
// console.log('Cool');
// expect().nothing();
// });
// });

