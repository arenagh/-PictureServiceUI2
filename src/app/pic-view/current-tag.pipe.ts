import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currentTag'
})
export class CurrentTagPipe implements PipeTransform {

    static readonly CURRENT_LABEL: string = "Current: ";

    transform(value: string | string[]): string {
        if (value == null) {
            return CurrentTagPipe.CURRENT_LABEL;
        } else if (typeof value === 'string') {
            return CurrentTagPipe.CURRENT_LABEL + value;
        } else {
            return CurrentTagPipe.CURRENT_LABEL + value.join(", ");
        }
    }

}
