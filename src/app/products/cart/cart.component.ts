import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import party from "party-js";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartitem:any=[];
  grand:number = 0;
  updatedgrand = 0;
  constructor(private cart:CartService, private router:Router) { }

  ngOnInit(): void {
    this.cart.cartlist.subscribe(
      (data:any)=>{
        console.log(data);
        this.cartitem=data;
        console.log(this.cartitem);       
        this.grand = this.cart.gettotal()
        
      }
    )
  }

  removecart(products:any){
    this.cart.removecart(products)
  }

  removeall(){
    this.cart.removeall()
  }

  //discount
  discount5per(source:any){
    party.confetti(source)
    let discount = (this.grand*5)/100
    this.updatedgrand=this.grand - discount;
  }

  discount10per(){
    let discount = (this.grand*10)/100
    this.updatedgrand=this.grand - discount;
  }

  discount50per(){
    let discount = (this.grand*50)/100
    this.updatedgrand=this.grand - discount;
  }

  //proceed
  proceed(){
  alert('Your order is placed');
  this.router.navigateByUrl('');
}

}
