import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
let fixture: ComponentFixture<LikeWidgetComponent>;
let component: LikeWidgetComponent;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [LikeWidgetModule],
  })
  .compileComponents();

  fixture = TestBed.createComponent(LikeWidgetComponent);
  component = fixture.componentInstance;
});

it('should create component', () => {
  expect(component).toBeTruthy();
});

it('should generate id when id input property is missing', () => {
  fixture.detectChanges();
  expect(component.id).toBeTruthy();
});

it('should not generate id when id input property is filled', () => {
  const someId = 'someId';
  component.id = someId;
  fixture.detectChanges();
  expect(component.id).toBe(someId);
});

it(`#${LikeWidgetComponent.prototype.like.name}
  should trigger emition when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges();
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
});
});
