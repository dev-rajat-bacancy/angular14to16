import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginService } from './shared/services/login.service';
import { guestUserGuard } from './shared/guard/guest-user.guard';

export const routes: Routes = [ 
    {
        path: 'home', 
        loadComponent: () => import('./home/home.component').then(mod => mod.HomeComponent),
        title: 'Home',
        canActivate: [()=> inject(LoginService).isLoggedIn()]
    },
    {
        path: 'admin', 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate:[guestUserGuard]
    },
    {
        path: 'contact', 
        loadComponent: () => import('./contact/contact.component').then(mod => mod.ContactComponent),
        title: 'contact',
    },
    {
        path: 'about-us/:id', 
        data: { title: "Rajat" },
        resolve: { searchData: () => 'Yoda' },
        loadComponent: () => import('./about-us/about-us.component'),
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: '**',  
        loadComponent: () => import('./page-not-found/page-not-found.component').then(mod => mod.PageNotFoundComponent),
        title: 'page not found'
    }
];
