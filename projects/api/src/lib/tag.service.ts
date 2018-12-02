import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiModule } from './api.module';

@Injectable({
    providedIn: ApiModule,
})
export class TagService {

    constructor(
        private http: HttpClient
    ) { }

    getTagList(tmp: boolean): Observable<string[]> {
        return this.http.get<string[]>('picture/resources/' + (tmp ? "tag/tmp/list" : "tag/list"));
    }
}
