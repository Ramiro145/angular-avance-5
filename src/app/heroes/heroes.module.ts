import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";
//Es necesario importar CommonModule para usar directivas fuera del modulo principal

@NgModule({
  imports:[CommonModule],
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ]
})

export class HerosModule{

};
