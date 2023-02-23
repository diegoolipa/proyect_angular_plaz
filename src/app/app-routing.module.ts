import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {CustomPreloadService} from "./services/custom-preload.service";
import {QuicklinkStrategy} from "ngx-quicklink";
import {AdminGuard} from "./guards/admin.guard";

const routes: Routes = [

  { //importando el modulo website
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule),
    data:{
      preload:true,
    }
  },

  {// ruta para enlazar  con el modulo cms dlp-interesante
    path: 'cms',
    canActivate:[AdminGuard],
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**', //** = QUE NO ESCUENTA NINGUNA RUTA
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy:QuicklinkStrategy // (QuicklinkStrategy)precarga modulos segun el routerlink //PRE CARGAR MODULOS presonalidado @dlp_interesting (PreloadAllModules)(CustomPreloadService
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
