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
    MatButtonModule
  ]
})
export class NotesComponent implements OnInit {
  allNotes: Note[] = [];
  dataSource = new MatTableDataSource<Note>();
  displayedColumns: string[] = ['id', 'title', 'content', 'status'];
  currentTab: string = 'All Notes';

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private notesService: NotesService) {}

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
      this.displayedColumns = ['id', 'title', 'content', 'status'];
    } else if (tab === 'Completed') {
      this.dataSource.data = this.allNotes.filter(note => note.status === 'completed');
      this.displayedColumns = ['id', 'title', 'content', 'status'];
    } else if (tab === 'Pending') {
      this.dataSource.data = this.allNotes.filter(note => note.status === 'pending');
      this.displayedColumns = ['id', 'title', 'content', 'status'];
    } else if (tab === 'Delete a Task') {
      this.dataSource.data = this.allNotes;
      this.displayedColumns = ['id', 'title', 'content', 'status', 'action'];
    }

    if (this.paginator) this.dataSource.paginator = this.paginator;
    if (this.sort) this.dataSource.sort = this.sort;
  }

  deleteNote(id: number): void {
    this.notesService.deleteNote(id);
    this.allNotes = this.notesService.getAllNotes();
    this.loadNotes('Delete a Task');
  }
}
