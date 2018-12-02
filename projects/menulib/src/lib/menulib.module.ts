import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { MenubarComponent } from './menubar.component';
import { ItemComponent } from './item.component';

@NgModule({
    imports: [
        BrowserModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    declarations: [
        MenubarComponent,
        ItemComponent,
    ],
    exports: [
        MenubarComponent,
        ItemComponent,
    ]
})
export class MenulibModule { }
