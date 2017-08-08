export interface DataModel {
    person: IPerson;
    occupation: IOccupation;
    city: ICity;
}


export interface IPerson {
    id: number;
    name: string;
}

export interface IOccupation {
    id: number;
    name: string;
}

export interface ICity {
    id: number;
    name: string;
}