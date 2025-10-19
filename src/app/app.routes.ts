import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { Vision } from './components/vision/vision';
import { Values } from './components/values/values';
import { Details } from './components/details/details';
import { Login } from './components/login/login';
import { authGuardGuard } from './guards/auth-guard-guard';
import { AddProduct } from './components/add-product/add-product';
import { Order } from './components/order/order';
import { Register } from './components/register/register';

export const routes: Routes = [
    {path:'', pathMatch:'full',redirectTo:'HomePath'},
    { path: 'HomePath', component: Home },
    { path: 'OrderPath', component: Order },
    { path: 'RegisterPath', component: Register },
   {
    path: 'ProductPath',
    canActivate: [authGuardGuard],
    loadComponent: () =>
      import('./components/product/product').then(m => m.Product)
  },
    { path: 'AboutPath', component: About,children:[
        {path:'', pathMatch:'full',redirectTo:'VisionPath'},
        {path:'VisionPath', component:Vision},
        {path:'ValuesPath', component:Values},
    ] },
    {path:"DetailsPath/:id",component:Details},
    {path:"LoginPath",component:Login},
    {path:"addProductPath",component:AddProduct},
    { path:'**', component: NotFound}
];
