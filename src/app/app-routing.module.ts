import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'createpost',
    loadChildren: () => import('./createpost/createpost.module').then( m => m.CreatepostPageModule)
  },
  {
    path: 'qualification',
    loadChildren: () => import('./qualification/qualification.module').then( m => m.QualificationPageModule)
  },
  {
    path: 'myqualification',
    loadChildren: () => import('./myqualification/myqualification.module').then( m => m.MyqualificationPageModule)
  },
  {
    path: 'dummyapi',
    loadChildren: () => import('./dummyapi/dummyapi.module').then( m => m.DummyapiPageModule)
  },
  {
    path: 'productlist',
    loadChildren: () => import('./productlist/productlist.module').then( m => m.ProductlistPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'addproduct',
    loadChildren: () => import('./addproduct/addproduct.module').then( m => m.AddproductPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
