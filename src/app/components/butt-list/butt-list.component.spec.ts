import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtListComponent } from './butt-list.component';

describe('ButtListComponent', () => {
  let component: ButtListComponent;
  let fixture: ComponentFixture<ButtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
