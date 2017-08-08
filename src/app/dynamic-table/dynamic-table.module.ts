import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DynamicTableComponent } from './components/dynamic-table.component';

import { DynamicTableService }  from './components/dynamic-table.service';
@NgModule({
    declarations: [
        DynamicTableComponent
    ],
    imports:[
        CommonModule,
        FormsModule
    ],
    exports:[
        DynamicTableComponent
    ],
    providers: [
        DynamicTableService
    ]
})
export class DynamicTableModule {}