import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { ApiModule } from './api.module';

@Injectable({
    providedIn: ApiModule
})
export class DownloadService {

    constructor(
        private http: HttpClient
    ) { }

    download(tag: string, urls: string[]): Observable<string> {
        return this.http.post('picture/resources/folder/download_tmp/' + tag, urls).pipe(
            map(response => "comp")
        );
    }
}
