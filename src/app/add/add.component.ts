import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  productCode=""
  name=""
  manufDate=""
  expDate=""
  brand=""
  price=""
  seller=""
  distName=""

  constructor(private api:ApiService){}

  readProductValue = ()=>{
    let productData:any={"productCode":this.productCode,"name":this.name,"manufDate":this.manufDate,
    "expDate":this.expDate,"brand":this.brand,"price":this.price,"seller":this.seller,
    "distName":this.distName}
    // console.log(Data)
    this.api.addProducts(productData).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("Product Added Successfully")
          
        }
        else{
          alert("Something wrong happened!")
        }
      }
    )

  }

}
