import { LayoutModule } from '@angular/cdk/layout';
import { async, ComponentFixture, TestBed, fakeAsync,tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

import { NavbarComponent } from './navbar.component';
import { LinkService } from '../link.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Question } from '../navbar/interface';
import { promise } from 'protractor';
import { resolve } from 'url';
import { tick } from '@angular/core/src/render3';

describe('NavbarComponent', () => {
  let linkService: LinkService;
  let component: NavbarComponent;
  let question: Question;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        HttpClientModule,
        FormsModule,RouterTestingModule
      ],
      providers: [LinkService,question]
    }).compileComponents();
    fixture = TestBed.createComponent(NavbarComponent)
        component = fixture.componentInstance;
        linkService = TestBed.get(LinkService);
  }));
  
  it('Provider component', fakeAsync(() => {
   spyOn(component, "getQue").and.returnValue((resolve, reject) => {
     resolve(question);
   });
   component.getQue();
   tick();
   expect(component.Question).toEqual(question);
  }))

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(NavbarComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should compile', () => {
  //   expect(component).toBeTruthy();
  // });
//   beforeEach(() => { 
//     console.log('CCCC');
//  });

// it('#getValue should return real value', () => {
// console.log('Cool');
// expect().nothing();
// });
});
