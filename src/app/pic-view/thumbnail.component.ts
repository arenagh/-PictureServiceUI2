import { Component, Input, Output, EventEmitter, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {

    @Input() index: string;
    @Input() thumbUrl: string;
    @Output() onImageClick: EventEmitter<void> = new EventEmitter<void>();

    showed: boolean = false;

    constructor(
        public elementRef: ElementRef
    ) { }

    ngOnInit() {
    }

    clicked() {
        this.onImageClick.emit();
    }
}
