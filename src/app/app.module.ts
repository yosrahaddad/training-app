import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SessionItemComponent } from './session-item/session-item.component';

import { SessionItemListComponent } from './session-item-list/session-item-list.component';

//import { InscriptionDisabledDirective } from './inscription-disabled.directive';

import {Routes,RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FakeSessionItemService } from './admin/FakeSessionItemService';

const appRoutes: Routes = [
{
path: 'list',
component: SessionItemListComponent},
{
path: 'admin',
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
},
{ path: '', redirectTo: '/list', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];
@NgModule({
declarations: [
AppComponent,
SessionItemComponent,
SessionItemListComponent,
PageNotFoundComponent,
PageNotFoundComponent,
],
imports: [RouterModule.forRoot(
appRoutes,
{ enableTracing: true }
),
BrowserModule,
FormsModule
],
providers: [FakeSessionItemService],
bootstrap: [AppComponent]
})
export class AppModule { }

