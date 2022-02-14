import { LightningElement, api } from "lwc";

export default class App extends LightningElement {

 cod="01";
  nome="joão";
   phone="8372933";
   email="bababa@gmail.com";
   rating="warm";
   img="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg";
  
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
trocarimagem(){
  if(this.img=="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg"){
    this.img="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/98a48255-bedb-46d7-8f6e-a54229d3c75d.jpg";
  }
  else{this.img="https://img.playbuzz.com/image/upload/ar_1.5,c_pad,f_jpg,b_auto/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_1/cdn/5dd1da62-7fad-4065-ac16-928d743a2176/7af3b478-4cfa-4fce-8c24-af07c24c38c5.jpg"}
}
}
