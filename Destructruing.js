/* 
    A SHORT, CLEAN SYNTAX TO  'UNPACK'.
    ------>VALUES  FROM AN ARRAY.
    ------>PROPERTIES FROM OBJECT INTO
    DISTINCT VARIABLES.
    ....................................
    IT BASICALLY ENHANCE OWR OLDER WAY
    OF GETTING DATA FROM AN ARRAY OR
    OBJECT.
    const array = [1,2,3,4,5];
    const one = array[0];
    const two = array[1];
    //easiest and shortest way, Destructuring
    //SYNTAX IN CASE OF AN ARRAY =>
    let [variables] = array;
    const [one,two,three] = array;
    console.log(one);//1
    console.log(two);//2
    console.log(three);//3
    //HERE THE ORDER MATTERS THE MOST
*/
//---------------------Array Destructuring-------------------------
const array = [1, 2, 3, 4, 5, 6];
let [one, ...others] = array;
console.log(`One => ${one}`);
console.log(`Others => ${others}`);
[one, , ...others] = array;
console.log(`One => ${one}`);
console.log(`Others => ${others}`);
[one, two, three, ...others] = array;
console.log(`One => ${one}`);
console.log(`Two => ${two}`);
console.log(`Three => ${three}`);
console.log(others);
const max = others.reduce((max, currentVal) => Math.max(max, currentVal));
console.log(`Maximum value => ${max}`);
