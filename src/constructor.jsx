class car {

    constructor(name ){

        this.brand = name ;
    }

  greet(){
    console.log("hey i am this brand ", this.name);
    
  }
}

const car1  = new car("nissan")
const car2  = new car("honda")


export default car;