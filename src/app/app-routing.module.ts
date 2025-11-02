import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingsDetailPageComponent } from './listings-detail-page/listings-detail-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { EditListingsPageComponent } from './edit-listings-page/edit-listings-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsPageComponent } from './new-listings-page/new-listings-page.component';

const routes: Routes = [
  {
    path: 'listings',
    component: ListingsPageComponent,
    pathMatch: 'full', //listings page route will match without this even if it is listings/123 as well
  },
  {
    path: 'listings/:id', //:id is URL parameter. used for particular Listing.
    component: ListingsDetailPageComponent,
  },
  {
    path: 'contact/:id',
    component: ContactsPageComponent,
  },
  {
    path: 'edit-listings/:id',
    component: EditListingsPageComponent,
  },
  {
    path: 'my-listings',
    component: MyListingsPageComponent,
  },
  {
    path: 'new-listings',
    component: NewListingsPageComponent,
  },
  {
    path: '',
    redirectTo: '/listings',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
