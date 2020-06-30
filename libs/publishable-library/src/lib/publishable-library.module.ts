import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContainerComponent }]),
  ],
})
export class PublishableLibraryModule {}
