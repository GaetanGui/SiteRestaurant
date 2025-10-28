import { Routes } from '@angular/router';
import { HomePageComponent } from './home/page/home-page/home-page.component';
import { MenuPageComponent } from './menu/page/menu-page/menu-page.component';
import { NewsPageComponent } from './news/page/news-page/news-page.component';
import { ContactPageComponent } from './contact/page/contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'menu',
        component: MenuPageComponent
    },
    {
        path: 'news',
        component: NewsPageComponent
    },
    {
        path: 'contact',
        component: ContactPageComponent
    }
];
