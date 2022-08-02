import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  BrowserAnimationsModule,
                  MatButtonModule ],

})
export class AppModule { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular';


  tablaProductos: {nombre: string, costo: string}[] = [
    {nombre: 'Antares APA', costo: '425'},
    {nombre: 'Quilmes CRISTAL', costo: '250'},
    {nombre: 'Iguana SUMMER', costo: '375'},
    {nombre: 'Patagonia IPA', costo: '450'},
  ];

  verLista = true;

  verProductos(): void{
    if (this.verLista===true){
      this.verLista=false;
    }else{
      this.verLista=true;
    }
  }

}
