 export class car {

    constructor(name ){

        this.brand = name ;
    }

  greet(){
    console.log("hey i am this brand ", this.name);
    
  }
}

 export const car1  = new car("nissan")
export const car2  = new car("honda")


