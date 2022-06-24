import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
let fixture: ComponentFixture<LikeWidgetComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [LikeWidgetModule],
  })
  .compileComponents();

  fixture = TestBed.createComponent(LikeWidgetComponent);
});

it('should create component', () => {
  const component = fixture.componentInstance;
  expect(component).toBeTruthy();
});

it('should generate id when id input property is missing', () => {
  const component = fixture.componentInstance;
  fixture.detectChanges();
  expect(component.id).toBeTruthy();
});
});
