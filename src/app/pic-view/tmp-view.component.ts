import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { filter, take } from 'rxjs/operators';

import { ViewService } from './view.service';
import { ShowPictureService } from '../show-picture.service';

import { ImageInfo } from './image-info';
import { IconViewOwner } from './icon-view-owner';

@Component({
  selector: 'tmp-view',
  templateUrl: './tmp-view.component.html',
  styleUrls: ['./folder-view.component.css']
})
export class TmpViewComponent implements OnInit {

    selected: string;
    tags: string[];

    @ViewChild('iconView', { read: ElementRef }) iconView: ElementRef;

    pictures: ImageInfo[] = [];

    position: number = 0;

    iconViewHeight: number;

    constructor(
        private viewService: ViewService,
        private showPictureService: ShowPictureService
    ) {
        this.viewService.requestTagList(true);
        this.viewService.tagList().pipe(
            filter(tagList => tagList != null),
            take(1)
        ).subscribe(tagList => {
            this.tags = tagList;
        });
    }

    ngOnInit() {
        this.viewService.regist(this);
    }

    tagSelected(tag: string) {
        this.viewService.fitIconView(this);
        this.selected = tag;
        this.viewService.tagSelected(tag).pipe(
            take(1)
        ).subscribe(result => {
            this.pictures = result;
        });
    }

    expansionChanged() {
        this.viewService.fitIconView(this);
    }

    showPic(pos: number) {
        this.position = pos;
        this.showPictureService.showPicture(this.pictures[pos].imageUrl);
    }
}
