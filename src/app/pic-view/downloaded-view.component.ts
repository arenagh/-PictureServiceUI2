import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { filter, take } from 'rxjs/operators';

import { ViewService } from './view.service';
import { ShowPictureService } from '../show-picture.service';

import { ImageInfo } from './image-info';
import { IconViewOwner } from './icon-view-owner';

@Component({
  selector: 'downloaded-view',
  templateUrl: './downloaded-view.component.html',
  styleUrls: ['./downloaded-view.component.css']
})
export class DownloadedViewComponent implements OnInit {

    @ViewChild('iconView', { read: ElementRef }) iconView: ElementRef;

    pictures: ImageInfo[] = [];

    position: number = 0;

    iconViewHeight: number;

    constructor(
        private viewService: ViewService,
        private showPictureService: ShowPictureService
    ) {
        this.viewService.getDownloaded().pipe(
            filter(picList => picList != null),
            take(1)
        ).subscribe(picList => {
            this.pictures = picList;
        });
    }

    ngOnInit() {
        this.viewService.regist(this);
    }

    showPic(pos: number) {
        this.position = pos;
        this.showPictureService.showPicture(this.pictures[pos].imageUrl);
    }
}
