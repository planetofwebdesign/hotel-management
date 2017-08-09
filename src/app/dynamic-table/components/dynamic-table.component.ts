import { Component, OnInit, OnChanges, Input } from '@angular/core';


import { ICity, IOccupation, IPerson, DataModel } from './dynamic-table.model';

import { DynamicTableService } from './dynamic-table.service'

@Component({
    selector: 'app-dynamic-table',
    templateUrl: 'dynamic-table.component.html',
    styleUrls: ['dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit, OnChanges {


    persons: IPerson[];
    occupations: IOccupation[];
    cities: ICity[];
    @Input()
    data: DataModel[];;


    constructor(
        private dynamicTableService: DynamicTableService
    ) {

    }

    ngOnChanges(): void {
        this.persons = this.dynamicTableService.getPersons();
        this.occupations = this.dynamicTableService.getOccupations();
        this.cities = this.dynamicTableService.getCities();
    }
    ngOnInit(): void {

    }

    compareFn(optionOne, optionTwo): boolean {
        return optionOne && optionTwo ? optionOne.id === optionTwo.id : optionOne === optionTwo;
    }

    addRow() {
        this.data.push(this.dynamicTableService.getBlankData());
    }

    removeRow(index) {

        this.data.splice(index, 1);

    }

}
