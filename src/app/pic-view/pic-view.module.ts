import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatIconModule, MatButtonModule, MatChipsModule, MatMenuModule,MatFormFieldModule, MatInputModule, MatExpansionModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PicViewComponent } from './pic-view.component';
import { PicNaviComponent } from './pic-navi.component';
import { TagSelectorComponent } from './tag-selector.component';
import { CurrentTagPipe } from './current-tag.pipe';
import { FolderViewComponent } from './folder-view.component';
import { ThumbnailComponent } from './thumbnail.component';
import { IconViewComponent } from './icon-view.component';

import { ViewService } from './view.service';
import { TmpViewComponent } from './tmp-view.component';
import { DownloaderComponent } from './downloader.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        ScrollingModule,
    ],
    declarations: [
        PicViewComponent,
        PicNaviComponent,
        TagSelectorComponent,
        CurrentTagPipe,
        FolderViewComponent,
        ThumbnailComponent,
        IconViewComponent,
        TmpViewComponent,
        DownloaderComponent,
    ],
    exports: [
        PicViewComponent,
        FolderViewComponent,
        ThumbnailComponent,
    ],
    providers: [
        ViewService,
    ],
})
export class PicViewModule { }
