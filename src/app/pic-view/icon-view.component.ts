import { Component, Input, Output, EventEmitter, OnInit, ViewChildren, QueryList, AfterViewInit, OnDestroy } from '@angular/core';

import { ThumbnailComponent } from './thumbnail.component';
import { ShowPictureService } from '../show-picture.service';

@Component({
    selector: 'icon-view',
    templateUrl: './icon-view.component.html',
    styleUrls: ['./icon-view.component.css']
})
export class IconViewComponent implements OnInit, AfterViewInit, OnDestroy {

    @Input() pictures: { thumbnailUrl: string, imageUrl: string }[];

    @Input() position: number;
    @Output() positionChange: EventEmitter<number> = new EventEmitter<number>();

    @ViewChildren(ThumbnailComponent) thumbnails: QueryList<ThumbnailComponent>;

    @Input() height: number;

    thumbnailObserver: IntersectionObserver;
    thumbnailSubscription; Subscription;

    constructor(
        private showPictureService: ShowPictureService
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.thumbnailObserver = new IntersectionObserver(entries => this.showThumbs(entries));
        this.thumbnailSubscription = this.thumbnails.changes.subscribe(thumbs => {
            thumbs.forEach(element => this.thumbnailObserver.observe(element.elementRef.nativeElement));
        });
    }

    ngOnDestroy() {
        if (this.thumbnailSubscription) {
            this.thumbnailSubscription.unsubscribe();
        }
    }

    showThumbs(entries: IntersectionObserverEntry[]) {
        entries.filter(entry => entry.isIntersecting).forEach(entry => {
            this.thumbnails.toArray()[Number(entry.target.attributes['id'].value.substr(6))].showed = true;
        });
    }

    selected(pos: number) {
        this.position = pos;
        this.positionChange.emit(pos);
    }
}
