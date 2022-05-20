import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurlanguagesComponent } from './ourlanguages.component';

describe('OurlanguagesComponent', () => {
  let component: OurlanguagesComponent;
  let fixture: ComponentFixture<OurlanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurlanguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurlanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
