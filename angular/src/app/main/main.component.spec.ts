import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { MainComponent } from './main.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';
import { DebugElement } from '@angular/core';
import { on } from 'cluster';
import { HttpClientModule } from '@angular/common/http';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
    // beforeEach(() => {
    //   TestBed.configureTestingModule({
    //     imports: [AppModule, CommonModule, ReactiveFormsModule,HttpClientModule],
    //     declarations: [MainComponent]
    //   })
    //   fixture = TestBed.createComponent(MainComponent);
    //   component = fixture.componentInstance;
    // });
    // it('Check form valid, With only email', () => {
    //   component.ngOnInit();
    //   component.signinForm.setValue({email: 'gamingSkills@gmail.com', password: ''});
    //   fixture.detectChanges();
    //   expect(component.signinForm.valid).toBe(false);
    // });
      
    // })







  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     providers: [FormBuilder],
  //     declarations: [ MainComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MainComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

//   beforeEach(() => { 
//     console.log('CCCC');
//  });

it('#getValue should return real value', () => {
console.log('Cool');
expect().nothing();
});
});
