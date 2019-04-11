/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AlertActionComponent } from './alert-action.component';

describe('AlertActionComponent', () => {
  let component: AlertActionComponent;
  let fixture: ComponentFixture<AlertActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
