import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule, MatButtonModule, MatChipsModule, MatMenuModule } from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { PicViewComponent } from './pic-view.component';
import { PicNaviComponent } from './pic-navi.component';
import { TagSelectorComponent } from './tag-selector.component';
import { CurrentTagPipe } from './current-tag.pipe';
import { FolderViewComponent } from './folder-view.component';
import { ThumbnailComponent } from './thumbnail.component';
import { IconViewComponent } from './icon-view.component';

import { ViewService } from './view.service';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatChipsModule,
        MatMenuModule,
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
