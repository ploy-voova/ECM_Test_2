import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'new-job',
        loadChildren: () => import('../new-job/new-job.module').then( m => m.NewJobPageModule)
      },
      {
        path: 'job',
        loadChildren: () => import('../job/job.module').then( m => m.JobPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then( m => m.ContactsPageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('../inbox/inbox.module').then( m => m.InboxPageModule)
      },
      {
        path: 'quote-preview/:quoteId',
        loadChildren: () => import('../quote-preview/quote-preview.module').then( m => m.QuotePreviewPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/quote-preview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
