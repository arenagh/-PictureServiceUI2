import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { TagService, PictureInfoService } from 'api';

import { PicViewModule } from './pic-view.module';

import { IconViewOwner } from './icon-view-owner';
import { ImageInfo } from './image-info';

@Injectable()
export class ViewService {

    tagListSubject: Subject<string[]> = new BehaviorSubject<string[]>(null);
    
    constructor(
        tagService: TagService, 
        private picInfoService: PictureInfoService
    ) {
        tagService.getTagList(false).pipe(
            take(1)
        ).subscribe(tagList => {
            this.tagListSubject.next(tagList);
        });
    }

    regist(target: IconViewOwner) {
        this.fitIconView(target);
        window.addEventListener('resize', () => {
            this.fitIconView(target);
        });
    }

    fitIconView(target: IconViewOwner) {
        target.iconViewHeight = window.innerHeight - target.controller.nativeElement.getBoundingClientRect().bottom;
    }

    tagList(): Observable<string[]> {
        return this.tagListSubject.asObservable();
    }

    tagSelected(tag: string): Observable<ImageInfo[]> {
        return this.picInfoService.getPictureInfoList(tag, false).pipe(
            map(result => 
                result.sort((a: any, b: any) => {
                    return b.downloaded - a.downloaded;
                }).map(info => new ImageInfo("picture/resources/thumbnail/" + info.id, "picture/resources/picture/" + info.id))
            )
        );
    }
}
