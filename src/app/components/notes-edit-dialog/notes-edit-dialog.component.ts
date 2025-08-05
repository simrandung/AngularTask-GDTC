import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatButtonModule } from '@angular/material/button'; 
import { CommonModule } from '@angular/common'; 
import { MatSelectModule } from '@angular/material/select';
import { MatOption, MatOptionModule } from '@angular/material/core';



export interface NoteEditData {
  id: number;
  title: string;
  content: string;
  status: string;
}


@Component({
  standalone: true,
  selector: 'app-notes-edit-dialog',
  template: `
    <h2 mat-dialog-title>Edit Note</h2>
    <div mat-dialog-content>
      <mat-form-field appearance="fill">
        <mat-label>Title</mat-label>
        <input matInput [(ngModel)]="data.title">
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Content</mat-label>
        <textarea matInput [(ngModel)]="data.content"></textarea>
      </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Status</mat-label>
        <mat-select [(ngModel)]="data.status">
          <mat-option value="completed">Completed</mat-option>
          <mat-option value="pending">Pending</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onCancel()">Cancel</button>
      <button mat-raised-button color="primary" (click)="onSave()">Save</button>
    </div>
  `,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class NotesEditDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NotesEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NoteEditData
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.data);
  }
}
