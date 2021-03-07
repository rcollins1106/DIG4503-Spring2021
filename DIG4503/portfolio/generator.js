import person from "./Randall";

function generator(){

    const result = '';
    const characters = person;

for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
 }
 return result;
}

export default generator;
