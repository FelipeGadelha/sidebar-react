
// export class Pet {
//   id: number;
//   name: string;
//   gender: string
//   constructor(
//     id: number,
//     name: string,
//     gender: string
//   ) {
//     this.id = id,
//     this.name = name,
//     this.gender = (gender === "FEMALE") ? "Fêmea" : "Macho";
//   }
//   print() {
//     if(this.gender === "FEMALE") {
//       return "Fêmea"
//     }
//     return "Macho";
//   }
// }

export type Pet = {
  bloodType: string,
  birthDate: string,
  primaryColor: string,
  secondyColor: string
} & PetBasic

export type PetBasic = {
  id: number,
  name: string,
  gender: string
}

export type PetDetail = {} & Pet

export type Pets = PetBasic[]

export enum Gender {
  FEMALE = 'Fêmea',
  MALE = 'Macho'
}

//const Gender = {
//  FEMALE: 'Fêmea',
//  MALE: 'Macho'
//}