import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'pic-navi',
    templateUrl: './pic-navi.component.html',
    styleUrls: ['./pic-navi.component.css']
})
export class PicNaviComponent implements OnInit {

    private _length: number;
    @Input() set length(len: number) {
        this.current = 0;
        this._length = len;
    }

    @Input() current: number;
    @Output() currentChange: EventEmitter<number> = new EventEmitter<number>();
  
    constructor() { }

    ngOnInit() {
        this.current = 0;
    }

    prev() {
        if (this.current > 0) {
            this.current = this.current - 1;
            this.currentChange.emit(this.current);
        }
    }

    next() {
        if (this.current <  this._length - 1) {
            this.current = this.current + 1;
            this.currentChange.emit(this.current);
        }
    }

    start() {
        this.current = 0;
        this.currentChange.emit(this.current);
    }

    end() {
        this.current = this._length - 1;
        this.currentChange.emit(this.current);
    }
}
