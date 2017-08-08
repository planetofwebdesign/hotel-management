import { Injectable } from '@angular/core';
import { ICity, IOccupation, IPerson, DataModel } from './dynamic-table.model';

@Injectable()
export class DynamicTableService {

    constructor() { }


    getPersons(): IPerson[] {
        return [{
            id: 1,
            name: 'Vikas'
        },
        {
            id: 2,
            name: 'Rajan'
        },
        {
            id: 3,
            name: 'Ekta'
        },
        {
            id: 4,
            name: 'Prashant'
        }];




    }

    getOccupations(): IOccupation[] {
        return [{
            id: 1,
            name: 'Softwar Engineer'
        },
        {
            id: 2,
            name: 'Sr. Analyst'
        },
        {
            id: 3,
            name: 'Software Architech'
        },
        {
            id: 4,
            name: 'Sr. Software Engineer'
        }];
    }

    getCities(): ICity[] {
        return [{
            id: 1,
            name: 'Pune'
        },
        {
            id: 2,
            name: 'Mumbai'
        },
        {
            id: 3,
            name: 'Delhi'
        },
        {
            id: 4,
            name: 'Banglore'
        }];
    }

    getBlankData(): DataModel {
        return {
            person: null,
            occupation: null,
            city: null
        };
    }
}