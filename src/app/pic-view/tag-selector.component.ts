import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'tag-selector',
  templateUrl: './tag-selector.component.html',
  styleUrls: ['./tag-selector.component.css']
})
export class TagSelectorComponent implements OnInit {

    @Input() tags: string[];
    @Output() onSelect: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

    onChange(event: any) {
        this.onSelect.emit(event.value);
    }
}
