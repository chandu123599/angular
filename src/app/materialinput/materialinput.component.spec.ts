import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialinputComponent } from './materialinput.component';

describe('MaterialinputComponent', () => {
  let component: MaterialinputComponent;
  let fixture: ComponentFixture<MaterialinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
