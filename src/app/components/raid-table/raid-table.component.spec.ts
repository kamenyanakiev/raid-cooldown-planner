/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaidTableComponent } from './raid-table.component';

describe('RaidTableComponent', () => {
  let component: RaidTableComponent;
  let fixture: ComponentFixture<RaidTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaidTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
