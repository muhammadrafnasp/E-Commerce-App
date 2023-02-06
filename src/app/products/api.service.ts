import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getAllproducts(){
    return this.http.get('http://localhost:3000/all-products')
    //json data
  }

  searchKey = new BehaviorSubject('')

  //add to wishlist
addtowishlist(products:any){
 console.log(products.title);
 
  const body ={
    id:products.id,
    title:products.title,
    price:products.price,
    image:products.image,
    description:products.description
  }
    return  this.http.post('http://localhost:3000/addtowishlist',body)
}

//get wishlist product
getwishlist(){
  return this.http.get('http://localhost:3000/getwishlist')
}

//delete from wishlist

deletewish(id:any){
  return this.http.delete('http://localhost:3000/deletewish/' + id)
}

}
