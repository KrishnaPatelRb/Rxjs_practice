import { Component, OnInit } from '@angular/core';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products1!: any[];
  products2!: any[];
  search:any=""
    first = 0;
    rows = 10;
 
  constructor() { 
  }

  ngOnInit() {
    this.products1=[
      {
        "id": "1000",
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1001",
        "code": "nvklal433",
        "name": "Black Watch",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "price": 72,
        "category": "Accessories",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1003",
        "code": "244wgerg2",
        "name": "Blue T-Shirt",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 29,
        "category": "Clothing",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1004",
        "code": "h456wer53",
        "name": "Bracelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 15,
        "category": "Accessories",
        "quantity": 73,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1005",
        "code": "av2231fwg",
        "name": "Brown Purse",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "price": 120,
        "category": "Accessories",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bib36pfvm",
        "name": "Chakra Bracelet",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "price": 32,
        "category": "Accessories",
        "quantity": 5,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1007",
        "code": "mbvjkgip5",
        "name": "Galaxy Earrings",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "price": 34,
        "category": "Accessories",
        "quantity": 23,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb124btr",
        "name": "Game Controller",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "price": 99,
        "category": "Electronics",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm230f032",
        "name": "Gaming Set",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "price": 299,
        "category": "Electronics",
        "quantity": 63,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "10000",
        "code": "f2300tytfh0g3",
        "name": "ghadi",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 650,
        "category": "other",
        "quantity": 50,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1001",
        "code": "nthtrhvklal4yhtr33",
        "name": "pencil",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "price": 72,
        "category": "other",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "black pen Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 10,
        "category": "other",
        "quantity": 2000,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1003",
        "code": "rtrsfds",
        "name": "jacket",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 2900,
        "category": "other",
        "quantity": 250,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1004",
        "code": "dsfftfsgfd",
        "name": "Bracnecjlaceelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 10,
        "category": "other",
        "quantity": 45,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1005",
        "code": "tyrthgttg",
        "name": "Burge",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "price": 100,
        "category": "other",
        "quantity": 10,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bibtert53t56pfvm",
        "name": "Cet",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "price": 320,
        "category": "other",
        "quantity": 50,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1007",
        "code": "erewrerv",
        "name": "table",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "price": 512,
        "category": "other",
        "quantity": 10,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb1rtt24btr",
        "name": "soap",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "price": 90,
        "category": "other",
        "quantity": 20,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm2rthg30kuyf032",
        "name": "Gaming chair",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "price": 2990,
        "category": "other",
        "quantity": 6,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      }
    ]
    this.products2=[
      {
        "id": "1000",
        "code": "f230fh0g3",
        "name": "Bamboo Watch",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 65,
        "category": "Accessories",
        "quantity": 24,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1001",
        "code": "nvklal433",
        "name": "Black Watch",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "price": 72,
        "category": "Accessories",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "Blue Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 79,
        "category": "Fitness",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1003",
        "code": "244wgerg2",
        "name": "Blue T-Shirt",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 29,
        "category": "Clothing",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1004",
        "code": "h456wer53",
        "name": "Bracelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 15,
        "category": "Accessories",
        "quantity": 73,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1005",
        "code": "av2231fwg",
        "name": "Brown Purse",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "price": 120,
        "category": "Accessories",
        "quantity": 0,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bib36pfvm",
        "name": "Chakra Bracelet",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "price": 32,
        "category": "Accessories",
        "quantity": 5,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1007",
        "code": "mbvjkgip5",
        "name": "Galaxy Earrings",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "price": 34,
        "category": "Accessories",
        "quantity": 23,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb124btr",
        "name": "Game Controller",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "price": 99,
        "category": "Electronics",
        "quantity": 2,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm230f032",
        "name": "Gaming Set",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "price": 299,
        "category": "Electronics",
        "quantity": 63,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "10000",
        "code": "f2300tytfh0g3",
        "name": "ghadi",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "price": 650,
        "category": "other",
        "quantity": 50,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1001",
        "code": "nthtrhvklal4yhtr33",
        "name": "pencil",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "price": 72,
        "category": "other",
        "quantity": 61,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "name": "black pen Band",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "price": 10,
        "category": "other",
        "quantity": 2000,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1003",
        "code": "rtrsfds",
        "name": "jacket",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "price": 2900,
        "category": "other",
        "quantity": 250,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1004",
        "code": "dsfftfsgfd",
        "name": "Bracnecjlaceelet",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "price": 10,
        "category": "other",
        "quantity": 45,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "1005",
        "code": "tyrthgttg",
        "name": "Burge",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "price": 100,
        "category": "other",
        "quantity": 10,
        "inventoryStatus": "OUTOFSTOCK",
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bibtert53t56pfvm",
        "name": "Cet",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "price": 320,
        "category": "other",
        "quantity": 50,
        "inventoryStatus": "LOWSTOCK",
        "rating": 3
      },
      {
        "id": "1007",
        "code": "erewrerv",
        "name": "table",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "price": 512,
        "category": "other",
        "quantity": 10,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb1rtt24btr",
        "name": "soap",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "price": 90,
        "category": "other",
        "quantity": 20,
        "inventoryStatus": "LOWSTOCK",
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm2rthg30kuyf032",
        "name": "Gaming chair",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "price": 2990,
        "category": "other",
        "quantity": 6,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      }
    ]
  }

  searchKeyword=(search:any)=>{
   this.products1= this.products2.filter((current)=>{
    let currentData=`${current.name} ${current.price} ${current.code} ${current.category}
    ${current.quantity}`.toLocaleLowerCase()
  
    return currentData.includes(search.toLocaleLowerCase())
   })
  }

}
