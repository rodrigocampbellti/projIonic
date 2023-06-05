import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'user-form',
    loadChildren: () => import('./pages/user-form/user-form.module').then( m => m.UserFormPageModule)
  },
  {
    path: 'product-form',
    loadChildren: () => import('./pages/product-form/product-form.module').then( m => m.ProductFormPageModule)
  },
  {
    path: 'user-enter',
    loadChildren: () => import('./pages/user-enter/user-enter.module').then( m => m.UserEnterPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./pages/user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/product-list/product-list.module').then( m => m.ProductListPageModule)
  },
  {
    path: 'product-form',
    loadChildren: () => import('./pages/product-form/product-form.module').then( m => m.ProductFormPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
