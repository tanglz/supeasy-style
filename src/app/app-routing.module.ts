import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MianLayoutComponent } from './layouts/mian-layout/mian-layout.component';
import { HomeComponent } from './pages/clients/home/home.component';
import { CreateProductComponent } from './pages/create-product/create-product.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index' },
  { path: 'index', component:MianLayoutComponent,children:[
    {path:'welcome',component:WelcomeComponent},
    {path:'product-list',component:ProductListComponent},
    {path:'create-product',component:CreateProductComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'client/home/:id',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
