class Person {
    properties
        

    //methods
        constructor(name, favoriteColor){
            this.name = name;
            this.favoriteColor = favoriteColor;
        }
        speak: function() {
            console.log("Hi, I'm " + this.name + " my favorite color is " + this.favoriteColor);
          }




};

const p = new Person();