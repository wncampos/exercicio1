import { LightningElement, api } from "lwc";

export default class App extends LightningElement {

 cod="01";
  nome="joão";
   phone="8372933";
   email="bababa@gmail.com";
   rating="warm";
  
  trocarvalor(){
    if(this.nome=="joão"){
    this.cod="02";
    this.nome="maria";
    this.phone="8876776576";
    this.email="cacaca@gmail.com";
    this.rating="cold";
    }else{
    this.cod="01";
    this.nome="joão";
    this.phone="8372933";
     this.email="bababa@gmail.com";
     this.rating="warm";
  }
  }

}
