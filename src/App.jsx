class Robo {

    constructor(name, colour){
        this.name = name ;
        this.colour = colour;
    }

    

}   
class Model extends Robo {

    constructor(name,model){
        super(name);
        this.model = model ;
    }

sayhi(){

        console.log(" bebeeb  + ", this.name , this.model );
        
    }
   
}
const Model1 = new Model("loki",22)

Model1.sayhi();
export default Robo;