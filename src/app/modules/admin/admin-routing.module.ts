import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebaradminComponent } from 'src/app/shared/component/sidebar/sidebaradmin/sidebaradmin.component';
import { KelolaperanComponent } from './kelolaperan/kelolaperan.component';

const routes: Routes = [
  {
    path: '',
    component: SidebaradminComponent,
    outlet: 'sidebaradmin'
  }, {
    path: 'kelolaperan',
    component: KelolaperanComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{}