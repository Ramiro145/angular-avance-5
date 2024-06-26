import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{

  //inyectando el servicio
  constructor( private dbzService: DbzService ){
  }

  //el getter se usa como propiedad y no como funcion
  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }

}
