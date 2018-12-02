import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { take, delay } from 'rxjs/operators';

import { DownloadService } from 'api';

@Component({
    selector: 'downloader',
    templateUrl: './downloader.component.html',
    styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit {

    @Input() tag: string;
    @Output() downloaded: EventEmitter<void> = new EventEmitter<void>();

    urlLines: string;

    constructor(
        private downloader: DownloadService
    ) { }

    ngOnInit() {
    }

    download() {
        if (this.tag == null) {
            return;
        }

        const urls = this.urlLines.split(/r\n|\r|\n/);
        this.downloader.download(this.tag, urls).pipe(
            take(1),
            delay(1000)
        ).subscribe(result => {
            this.urlLines = "";
            this.downloaded.emit();
        });
    }
}
