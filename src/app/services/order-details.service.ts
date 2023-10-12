import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails (ng for)
  fooddetails = [
    {
      id:1,
      foodName:"Grilled sandwich",
      foodDetails:"pan-fried masala paneer",
      foodprice:200,
      foodImg:"https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JpbGxlZCUyMHNhbmR3aWljaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id:2,
      foodName:"Chiken Burger",
      foodDetails:"pan-fried masala paneer",
      foodprice:200,
      foodImg:"https://images.unsplash.com/photo-1634818462211-aa45f43dafdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QnVnZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id:3,
      foodName:"fried chicken",
      foodDetails:"pan-fried masala paneer",
      foodprice:200,
      foodImg:"https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:4,
      foodName:"Pizza",
      foodDetails:"pan-fried masala paneer",
      foodprice:200,
      foodImg:"https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id:5,
      foodName:"Cheese Pasta",
      foodDetails:"pan-fried masala paneer",
      foodprice:200,
      foodImg:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      id:6,
      foodName:"Bubble Tea",
      foodDetails:"pan-fried masala paneer",
      foodprice:200,
      foodImg:"https://images.unsplash.com/photo-1637273484213-3b41dfbdcf99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1YmJsZSUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
  ]
}
