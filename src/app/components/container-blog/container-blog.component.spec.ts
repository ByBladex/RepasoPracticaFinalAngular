import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBlogComponent } from './container-blog.component';

describe('ContainerBlogComponent', () => {
  let component: ContainerBlogComponent;
  let fixture: ComponentFixture<ContainerBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
