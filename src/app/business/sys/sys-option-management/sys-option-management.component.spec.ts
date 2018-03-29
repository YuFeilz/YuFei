import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysOptionManagementComponent } from './sys-option-management.component';

describe('SysOptionManagementComponent', () => {
  let component: SysOptionManagementComponent;
  let fixture: ComponentFixture<SysOptionManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysOptionManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysOptionManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
