import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FolderViewComponent } from './pic-view/folder-view.component';
import { TmpViewComponent } from './pic-view/tmp-view.component';
import { DownloadedViewComponent } from './pic-view/downloaded-view.component';

const appRoutes: Routes = [
    { path: 'folder', component: FolderViewComponent, },
    { path: 'tmp', component: TmpViewComponent, },
    { path: 'download', component: DownloadedViewComponent, },
    { path: '', redirectTo: 'tmp', pathMatch: 'full', },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
    ],
    exports: [
        RouterModule,
    ],
})
export class AppRoutingModule { }
