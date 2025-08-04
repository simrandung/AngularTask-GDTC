import { Injectable } from '@angular/core';
import { Note } from '../models/notes.model';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private notes: Note[] = [
    { id: 1, title: 'Buy Groceries', content: 'Milk, Bread, Eggs', status: 'completed' },
    { id: 2, title: 'Study Angular', content: 'Components and Services', status: 'pending' },
    { id: 3, title: 'Morning Run', content: '5km jog', status: 'completed' },
    { id: 4, title: 'Meeting with Team', content: 'Project discussion', status: 'pending' },
    { id: 5, title: 'Gym Workout', content: 'Leg day', status: 'completed' },
    { id: 6, title: 'Code Review', content: 'Review PRs on GitHub', status: 'completed' },
    { id: 7, title: 'Read Book', content: 'Clean Code by Robert C. Martin', status: 'pending' },
    { id: 8, title: 'Call Mom', content: 'Weekly check-in', status: 'completed' },
    { id: 9, title: 'Laundry', content: 'Wash and fold clothes', status: 'pending' },
    { id: 10, title: 'Fix Bugs', content: 'Resolve login issue', status: 'completed' },
    { id: 11, title: 'Write Blog', content: 'Post about Angular Signals', status: 'pending' },
    { id: 12, title: 'Team Lunch', content: 'Pizza and mocktails', status: 'completed' },
    { id: 13, title: 'Clean Desk', content: 'Organize workspace', status: 'pending' },
    { id: 14, title: 'Online Course', content: 'Complete Java module', status: 'completed' },
    { id: 15, title: 'Plan Trip', content: 'Weekend getaway planning', status: 'pending' },
    { id: 16, title: 'Write Resume', content: 'Update project details', status: 'completed' },
    { id: 17, title: 'Meditation', content: 'Evening session', status: 'completed' },
    { id: 18, title: 'Practice Leetcode', content: 'Binary Trees & Graphs', status: 'pending' },
    { id: 19, title: 'Water Plants', content: 'Indoor and balcony plants', status: 'completed' },
    { id: 20, title: 'Watch Tutorial', content: 'Angular Material table', status: 'pending' }
  ];

  getAllNotes(): Note[] {
    return [...this.notes];
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter(n => n.id !== id);
  }
}
