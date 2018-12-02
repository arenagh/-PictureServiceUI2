import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiModule } from './api.module';

import { PictureInfo } from './picture-info';

@Injectable({
    providedIn: ApiModule,
})
export class PictureInfoService {

    constructor(
        private http: HttpClient
    ) { }

    getPictureInfoList(tag: string, tmp: boolean): Observable<PictureInfo[]> {
        return this.http.get<{ [key: string]: PictureInfo }>('picture/resources/' + (tmp ? "info/tmp/list/" : "info/list/") + tag).pipe(
            map(infos => Object.keys(infos).map(key => this.getElement(key, infos)))
        );
    }

    getDownloadedInfoList(): Observable<PictureInfo[]> {
        return this.http.get<{ [key: string]: PictureInfo }>('picture/resources/info/downloaded/list').pipe(
            map(infos => Object.keys(infos).map(key => this.getElement(key, infos)))
        );
    }

    getElement(key: string, list: { [key: string]: PictureInfo }): PictureInfo {
        const element = list[key];
        element.id = key;

        return element;
    }
}
