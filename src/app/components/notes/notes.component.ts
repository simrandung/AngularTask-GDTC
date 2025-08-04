import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Note } from '../../models/notes.model';
import { NotesService } from '../../service/notes.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { NotesEditDialogComponent } from '../notes-edit-dialog/notes-edit-dialog.component';

@Component({
  standalone: true,
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    NavbarComponent,
    MatDialogModule,
    NotesEditDialogComponent
  ]
})
export class NotesComponent implements OnInit {
  currentName: 'Tanmay';
  allNotes: Note[] = [];
  dataSource = new MatTableDataSource<Note>();
  displayedColumns: string[] = ['id', 'title', 'content', 'status','action'];
  currentTab: string = 'All Notes';

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private notesService: NotesService, public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allNotes = this.notesService.getAllNotes();
    this.loadNotes('All Notes');
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onTabChange(tab: string): void {
    this.currentTab = tab;
    this.loadNotes(tab);
  }

  loadNotes(tab: string): void {
    if (tab === 'All Notes') {
      this.dataSource.data = this.allNotes;
    } else if (tab === 'Completed') {
      this.dataSource.data = this.allNotes.filter(note => note.status === 'completed');
    } else if (tab === 'Pending') {
      this.dataSource.data = this.allNotes.filter(note => note.status === 'pending');
    } 

    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  deleteNote(id: number): void {
    this.notesService.deleteNote(id);
    this.allNotes = this.notesService.getAllNotes();
    this.loadNotes('Delete a Task');
  }

  editNote(note:Note){
    const dialogRef = this.dialog.open(NotesEditDialogComponent, {
      width: '400px',
      data: {...note}
    });

    dialogRef.afterClosed().subscribe(result=> {
     if(result){

      const index = this.allNotes.findIndex(n => n.id === result.id);

      if(index !== -1){
        this.allNotes[index] = result;
        this.dataSource.data = this.allNotes;
        this.loadNotes (this.currentTab);
      }

     }
    } 
    )

  }
}
