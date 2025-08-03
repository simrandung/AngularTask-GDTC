import { Routes } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/notes/notes.component').then(m => m.NotesComponent)
    }
];
