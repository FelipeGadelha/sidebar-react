
//export class Pet {
//  constructor(
//    public id: string,
//    public name: string,
//    public gender: Gender
//  ) {
//
//  }
//}

export type Pet = {
  id: string,
  name: string,
  gender: typeof Gender
}

export type PetDetail = {} & Pet

export type Pets = Pet[]

enum Gender {
  FEMALE = 'Fêmea',
  MALE = 'Macho'
}

//const Gender = {
//  FEMALE: 'Fêmea',
//  MALE: 'Macho'
//}