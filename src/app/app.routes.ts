import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'notes',
        loadComponent: () => import('./components/notes/notes.component').then(m => m.NotesComponent)
    },
    {
        path:'',
        loadComponent:() => import('./components/register/register.component').then(m => m.RegisterComponent)
    }
];
