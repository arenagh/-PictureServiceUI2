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
   
    isTmp: boolean;
 
    constructor(
        private tagService: TagService, 
        private picInfoService: PictureInfoService
    ) {
    }

    requestTagList(tmp: boolean) {
        this.tagListSubject.next(null);
        this.isTmp = tmp;
        this.tagService.getTagList(tmp).pipe(
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
        const tmpStr = this.isTmp ? "tmp/" : "";
        return this.picInfoService.getPictureInfoList(tag, this.isTmp).pipe(
            map(result => 
                result.sort((a: any, b: any) => {
                    return new Date(b.downloaded).getTime() - new Date(a.downloaded).getTime();
                }).map(info => new ImageInfo("picture/resources/thumbnail/" + tmpStr + info.id, "picture/resources/picture/" + tmpStr + info.id))
            )
        );
    }
}
