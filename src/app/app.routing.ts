import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

  export const routes: Routes = [
  //   // {
  //   //   path: '',
  //   //   redirectTo: DefaultLayoutComponent,
  //   //   pathMatch: 'full',
  //   // },
   {
      path: '',
      component: DefaultLayoutComponent,
      data: {
        title: 'Home'
      },
      children: [
      ]
    }
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
// export const routing: ModuleWithProviders = RouterModule.forRoot(AppModule.forRoutes());
export class AppRoutingModule {}
