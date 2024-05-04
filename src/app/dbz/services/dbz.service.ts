import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable(
  {providedIn: 'root'}
)
export class DbzService {

  constructor(){
    //cuando se iniciliaza el componente se llama a esta funcion
    //donde se carga la nueva lista en el local storage
    this.loadLocalStorage();
  }

  public characters:Character[] = [
    {
      id: uuid(),
      name:'krilin',
      power:1000
    },
    {
      id: uuid(),
      name:'Goku',
      power:9500
    },
    {
      id: uuid(),
      name:'Vegeta',
      power:7500
    }
  ];

  addCharacter(character:Character):void{


    const newCharacter:Character = {
      id:uuid(),
      ...character
    }

    this.characters.push(newCharacter);
    this.saveLocalStorage()
  }

  public saveLocalStorage():void{
    localStorage.setItem('character',JSON.stringify(this.characters));
    console.log(this.characters)
  }

  public loadLocalStorage():void{
    if(!localStorage.getItem('character'))return;

    //not null assertion operator para indicar que siempre vendra el local
    //storage
    this.characters = JSON.parse(localStorage.getItem('character')!);

  }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
    this.saveLocalStorage();
  }

}
