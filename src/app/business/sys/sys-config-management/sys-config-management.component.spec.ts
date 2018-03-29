import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysConfigManagementComponent } from './sys-config-management.component';

describe('SysConfigManagementComponent', () => {
  let component: SysConfigManagementComponent;
  let fixture: ComponentFixture<SysConfigManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysConfigManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysConfigManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
