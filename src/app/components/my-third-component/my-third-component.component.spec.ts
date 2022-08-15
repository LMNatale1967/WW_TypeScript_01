import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyThirdComponentComponent } from './my-third-component.component';

describe('MyThirdComponentComponent', () => {
  let component: MyThirdComponentComponent;
  let fixture: ComponentFixture<MyThirdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyThirdComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyThirdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
