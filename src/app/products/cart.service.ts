import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartarray:any=[]; //array
  cartlist=new BehaviorSubject([])//list
  constructor() { }

  // addtocart
  addtocart(products:any){
     this.cartarray.push(products);
     this.cartlist.next(this.cartarray)//stream of data
     console.log(this.cartlist);
     let total = this.gettotal()
     console.log(total);
     
     
  }

  //calculate grandtotal
  gettotal(){
    let grandtotal=0;
    this.cartarray.map((item:any)=>{
    grandtotal += item.price;
    })
    return grandtotal;
  }

//remove a single item from the cart
removecart(products:any){
 this.cartarray.map((item:any,index:any)=>{
  if(products.id === item.id){
    this.cartarray.splice(index,1) //remove from cart
  }
 })
 this.cartlist.next(this.cartarray)//update cartlist
}

//empty the cart list
removeall(){
  this.cartarray=[];
  this.cartlist.next(this.cartarray)
}


}
