import { Injectable } from '@angular/core';

import { AppModule } from './app.module';

@Injectable({
    providedIn: 'root',
})
export class ShowPictureService {

    childWindow: any;

    constructor() {
    }

    showPicture(picUrl: string) {
        this.childWindow = window.open("", "pic");
	const width = this.childWindow.innerWidth;
	const height = this.childWindow.innerHeight;

	const url = picUrl + (((width == 0) || (height == 0)) ? "" : ("?width=" + width + "&height=" + height));

	this.childWindow.open(url, "pic");
    }
}
