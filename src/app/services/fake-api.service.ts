import { Injectable } from '@angular/core';
import { CrudInterface } from './crud';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService implements CrudInterface {
  names = [
    'Liam',
    'Noah',
    'William',
    'James',
    'Oliver',
    'Benjamin',
    'Elijah',
    'Lucas',
    'Mason',
    'Logan',
    'Alexander',
    'Ethan',
    'Jacob',
    'Michael',
    'Daniel',
    'Henry',
    'Jackson',
    'Sebastian',
    'Aiden',
    'Matthew',
    'Samuel',
    'David',
    'Joseph',
    'Carter',
    'Owen',
    'Wyatt',
    'John',
    'Jack',
    'Luke',
    'Jayden',
    'Dylan',
    'Grayson',
    'Levi',
    'Issac',
    'Gabriel',
    'Julian',
    'Mateo',
    'Anthony',
    'Jaxon',
    'Lincoln',
    'Joshua',
    'Christopher',
    'Andrew',
    'Theodore',
    'Caleb',
    'Ryan',
    'Asher',
    'Nathan',
    'Thomas',
    'Leo',
    'Isaiah',
    'Charles',
    'Josiah',
    'Hudson',
    'Christian',
    'Hunter',
    'Connor',
    'Eli',
    'Ezra',
    'Aaron',
    'Landon',
    'Adrian',
    'Jonathan',
    'Nolan',
    'Jeremiah',
    'Easton',
    'Elias',
    'Colton',
    'Cameron',
    'Carson',
    'Robert',
    'Angel',
    'Maverick',
    'Nicholas',
    'Dominic',
    'Jaxson',
    'Greyson',
    'Adam',
    'Ian',
    'Austin',
    'Santiago',
    'Jordan',
    'Cooper',
    'Brayden',
    'Roman',
    'Evan',
    'Ezekiel',
    'Xavier',
    'Jose',
    'Jace',
    'Jameson',
    'Leonardo',
    'Bryson',
    'Axel',
    'Everett',
    'Parker',
    'Kayden',
    'Miles',
    'Sawyer',
    'Jason',
  ];

  create(item: string): Observable<string> {
    console.log('FAKE API CALL -- CREATE ITEM');

    return from(
      new Promise((resolve) => {
        setTimeout(() => {
          this.names.unshift(item);
          resolve(item);
        }, 800);
      })
    ) as Observable<string>;
  }

  read(
    searchString,
    { offset, limit }
  ): Observable<{ data: string[]; total: number }> {
    console.log('FAKE API CALL -- GET ALL ITEMS');
    return from(
      new Promise((resolve) => {
        setTimeout(() => {
          const itemsSubset =
            searchString.trim() !== ''
              ? this.names.filter((item) =>
                  item.toLowerCase().includes(searchString.toLowerCase())
                )
              : this.names;
          resolve({
            data: itemsSubset.slice(offset, offset + limit),
            total: itemsSubset.length,
          });
        }, 1000);
      })
    ) as Observable<{ data: string[]; total: number }>;
  }

  update(index, itemName): Observable<string> {
    console.log('FAKE API CALL -- UPDATE ITEM');

    return from(
      new Promise((resolve) => {
        setTimeout(() => {
          this.names[index] = itemName;
          resolve(this.names[index]);
        }, 700);
      })
    ) as Observable<string>;
  }

  destroy(index): Observable<string> {
    console.log('FAKE API CALL -- DELETE ITEM');

    return from(
      new Promise((resolve) => {
        setTimeout(() => {
          const itemToRemove = this.names[index];
          this.names.splice(index, 1);
          resolve(itemToRemove);
        }, 600);
      })
    ) as Observable<string>;
  }
}
