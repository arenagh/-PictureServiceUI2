import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'pic-view',
    templateUrl: './pic-view.component.html',
    styleUrls: ['./pic-view.component.css']
})
export class PicViewComponent implements OnInit {

    @Input() icon: string;
    @Input() title: string;

    @Input() tags: string[];
    @Output() onTagSelected: EventEmitter<string> = new EventEmitter<string>();

    @Input() itemCount: number;

    @Input() position: number;
    @Output() positionChange: EventEmitter<number> = new EventEmitter<number>();

    constructor() { }

    ngOnInit() {
    }

    tagSelect(tag: string) {
        this.onTagSelected.emit(tag);
    }

    posChange(pos: number) {
        this.position = pos;
        this.positionChange.emit(this.position);
    }
}
