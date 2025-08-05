import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesEditDialogComponent } from './notes-edit-dialog.component';

describe('NotesEditDialogComponent', () => {
  let component: NotesEditDialogComponent;
  let fixture: ComponentFixture<NotesEditDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NotesEditDialogComponent]
    });
    fixture = TestBed.createComponent(NotesEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
