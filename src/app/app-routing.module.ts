import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {PhotoListComponent} from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component'; 
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { NavigationComponent } from './components/navigation/navigation.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoListComponent
  },
  {
    path: 'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
