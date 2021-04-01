//Object literal
// const person = {
//     person_name : "nayem" ,
//     person_hobby : "gaming",
//     do_gaming : function() {
//         console.log("i am gayming")
//     },
//     do_programming : function(){
//         console.log("i dont even know what programming is");
//     }
// };


//Factory function
// function dperson(name,hobby){
//     return {
//         person_name : name,
//         person_hobby : hobby ,
//         do_gaming : function(){
//             if(hobby == "gaming")
//             console.log("gaming for newbs");
//         },
//         do_programming: function(){
//             if(hobby == "programming")
//             console.log("programming is life");
//         }
//     };
// }

// Constructor Function
// function Person(name , hobby){
//     this.person_name = name;
//     this.person_hobby = hobby;
//     this.hobbylist = hobby.split(" ");
//     this.do_gaming = function () {
//         if(this.hobbylist[0] == "gaming" )
//         console.log("I am Pro at gaming");
//     };
//     this.do_programming = function (){
//         if(this.hobbylist[1] == "programming")
//         console.log("I am pro at coding");
//     };
// }


//Functions are objects also so they have constructors as well

// const Dperson = new Function("name","hobby",`
//     this.person_name = name;
//     this.person_hobby = hobby;
//     this.hobbylist = hobby.split(" ");
//     this.do_gaming = function () {
//         if(this.hobbylist[0] == "gaming" )
//         console.log("I am Pro at gaming");
//     };
//     this.do_programming = function (){
//         if(this.hobbylist[1] == "programming")
//         console.log("I am pro at coding");
//     };
// `);

// person.do_gaming();
// person.do_programming();
// console.log("------------------");
// const aperson = dperson("nayem","gaming");
// aperson.do_gaming();
// aperson.do_programming();
// console.log("------------------");
// const bperson = new Person("nayem","gaming programming");
// // const bperson = Person.call({},"nayem","gaming programming");
// bperson.do_gaming();
// bperson.do_programming();
// console.log("------------------");
// const cperson = new Dperson("nayem","gaming programming");
// cperson.do_gaming();
// cperson.do_programming();

//primitives || objects

// ***Primitives are copied by value***
// ***Objects are copied by refrence***

// let x = 10 ;
// let y = x ;
// x = 20 ;
// y = ?
// console.log(y);
// the value of y will be 10 . cz primitives are copied by their value so the value of x was copied not x's address
// so if we change the value of x it still remains 20 in y 

// let x = { value : 10 };
// let y = x ;
// x.value = 20 ;
// y = ?
// console.log(y) ;
// here the value of y will be 20 cz here copying is held on reference not value


// *** anoteher example ***

// let number = 10 ;

// function increment(number){
//     number++ ;
// }

// increment(number) ;
// console.log(number);

// How can we solve this ?

// *** first approach : return value of number from function

// let number = 10 ;

// function increment(number){  // though the name 'number' is same but they mean two different thing (address) 
//     number++ ;      // when the increment function is called the number parameter object is also being copied in this
//     return number ;  // with name 'number' but they are not same so we are returning the value of the copy version of the
// }                   // 'number' premetive then assiging it to the real (raw) number   

// number = increment(number) ;
// console.log(number);


// *** Second Approach ***

// let number = {value : 10} ; 

// function increment(obj){ // here not only the value of number is passed but the who object was send to increment function
//     obj.value++ ;   // so obj and number both are refrering to the same object and increment function reallu increamenting
// }       // the value of number not any kind of copy item 

// increment(number);

// console.log(number.value);

// *** Adding property

// const bird = function(name,color) {
//     this.name = name;
//     this.color = color ;
// }

// const peigion = new bird("kobitor","grey");

// peigion.leg = "choto" ;
// peigion.fly = function(){
//     console.log("ami ure berai , moja kore , hingse hoi , amr moto urte chao :)");
// }

// console.log(peigion.name, peigion.color , peigion.leg);
// peigion.fly()

// Enumerating properties

// function Circle(){
//     this.radius = 1 ;
//     this.draw = function(){
//         console.log("draw a circle");
//     };
// }

// const circle1 = new Circle();

// for (key in circle1){ // iterating through all the keys in circle1 obj
//     console.log(key);
// }

// console.log(Object.keys(circle1)); // another way of iterating through the obj keys

// console.log(typeof circle1["draw"]) // typeof returns type of the object

// for (key in circle1){
//     if( typeof circle1[key] !== "function") // only printing the properties not methods
//     {
//         console.log(key);
//     }
// }

// if ( 'radius' in circle1){ // checking if circel1 object has a key called radius
//     console.log("the circle has radius");
// }

// if( 'position' in circle1){
//     console.log("this circle got position");
// }

// else {
//     console.log("the circle has no position");
// }

// *** Abstruction*** //

// show the only essential part , hide the complicated part(calculation part)
// like DVD player


// think of a person , the person eats food and also do "paikhana / pesab"
// but the food id absorbed in body in many complicated way but that is not really
//that much essential to the user , the user as a noraml person only wants to see daily Bahirer kaj not Vitorer kaj

// function Person() {
//     this.eat = function () {
//         console.log("eating food");
//     };
    
//     let hozom = function () {  // here hozom() is local method 
//         console.log("vaat hozom hocche");
//     }

//     this.paikhana = function () {
//         hozom();
//         console.log("paikhana hocche");
//     }
// }

// sarjin = new Person();
// sarjin.eat();
// sarjin.paikhana();

// what if we call hozom() method from outside of the Function

// sarjin.hozom()

// we got an error . Can you tell where the error occured ?


// Answer : the hozom() method is declared here locally not associated with object
// so we can not call hozom method outside the function called People() as the hozom has a scope
// with in the Person function . so can not access the hozom method with its object.

// *** Getter ***

// now think about a story that Sarjin oneday got terrible sickness as she is not having Aramer paikhana
// so she went to a doctor for her checkup the doctor checked and called for a test if she is haing kharap hozom
// so we want hozom value from outside Person function , How can we do that as the value of hozom will be revealed but 
// not changable like (READ-only)

// thus the idea of get came into the place 
// we can get any local object value with get however we can not change them at our own


// ***Naive approach of returning private value with helping fuction

// function Person () {
//     this.eat = function () {
//         console.log("eating food");
//     };
    
//     let hozom = function () {  // here hozom() is local method 
//         console.log("vaat hozom kom hose")
//     };

//     this.hozomkemon = function() {
//         return hozom() ; 
//     };
//     this.paikhana = function () {
//         hozom() ;
//         console.log("paikhan kharap hocce");
//     }

// }

// let Sharjin = new Person();
// Sharjin.hozomkemon();

// However I really dont like the syntax , we are requesting for property but we are calling method
// Does this really make any sense ??
// So we have get

// function Person () {
//     this.eat = function () {
//         console.log("eating food");
//     };
    
//     let hozom = function () {  // here hozom() is local method 
//         return "vaat hozom kom hose"
//     };

//     this.paikhana = function () {
//         if( hozom() == "vaat hozom kom hose" ) {
//         console.log("paikhan kharap hocce");
//         } 
//         else {
//             console.log("paikhan valo hose")
//         }
//     }


//     Object.defineProperty(this, 'hozom_obostha' , {
//     get: function(){     // get is like key value peer , uses object notation
//         return hozom();  // the first parameter is the object we are looking for here this 
//         }    // referes to the Sharjin object and second is the name which we will call to get the value outside of the function
//     });  // the last one is the get function what will be done when we call the get method
// }

// Sharjin = new Person();
// Sharjin.eat();
// Sharjin.paikhana();
// console.log(Sharjin.hozom_obostha); // here with the help of get we can see what the problem really occured in sharjin's
    // stomach thus the doctor know the problem 

// *** Setter


// Now think about the after story , Now doctor knows thet Sharjin is having stomach pain cz of vaat kom hozom hocche
// So the doctor wants to set kharap hozom to valo hozom 
// Means How to change the local property of the object.

// thus the idea of setter comes into the play

// function Person(){
//     this.eat = function () {
//         console.log("eating food");
//     };
    
//     let hozom = function () {  // here hozom() is local method 
//         return "vaat hozom kom hose"
//     };

//     this.paikhana = function () {
//         if( hozom() == "vaat hozom kom hose" ) {
//         console.log("paikhan kharap hocce");
//         } 
//         else {
//             console.log("paikhan valo hose")
//         }
//     };

//     Object.defineProperty(this,'valo_koro',{
//         set :
//             hozom = function() {
//                 return "vaat hozom hoye geche" ;
//             }
//     });
// }

// Sharjin = new Person() ;
// Sharjin.valo_koro ;
// Sharjin.paikhana()

// ** prototypes and prototypical inheritence

// Prototype --> Parent

// let x = {}
// console.log(x);

// Object Base is the root of all object and it dont have any parent or prototype

// when we have a object( x ) we also have some prototypical methods and properties such as to string()
// but tostring dont have any parent or prototype so it is the parent

// For example :

// we have another object ,
//let y = {}

// Object.getPrototypeOf(x) == Object.getPrototypeOf(y)

// true cz both inherited from same object base prototype -- so their parent is the same
// in meaning Object base is the Parent of all Objects

// another example :

// let myarray = [];
// console.log(myarray);

// Protypical graph:

// myarray --> arraybase --> object base (multilevel inheritence)

// another exmple :

// function Circel (radius) {
//     this.radius = radius ;

//     this.draw = function (){
//         console.log("draw");
//     };
// }

// const circle = new Circel(1) ;


// Objects created by a given constructor will have the same proptotype .

// so whenever we create a object of Cicle the prototype of the circel will be copied to its objects

// lets say we have another object of Cicel base

// const circle2 = new Circel(2);

// console.log(Object.getPrototypeOf(circle) == Object.getPrototypeOf(circle2)) ;

// true

// so every object created  of Cicle base will have same prototype 

// circel --> Circle Base --> Object base


// *** Property Descriptor


// person = { name : 'nayem'} ;
// ObjectBase = Object.getPrototypeOf(person) ;

// console.log(Object.getOwnPropertyDescriptor(ObjectBase,'toString'))

// { value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true }

// here enumerable value is false so we can not enumerate through Prototype key of person prototype


// Object.defineProperty(person, 'name' , {
//     writable : false,   // in default the value of these reamains True
//     enumerable : false, // means objects can be configurable , writeable and most impotantly enumuratable
//     configurable: false
// })

// person.name = 'ruhul' 

// what will be output of the following :

// console.log(person.name) ;

// the output is nayem , why this happend ???

// because we set property of person object --> writable : false 
// so we can not change the value of name property .

// now say what will be the output of the following :

// console.log(Object.keys(person)) ;

// see now we dont have any key named 'name' cz we set it to not enamuratable

// console.log(Object.getOwnPropertyDescriptor(person,'name'));

// we get the property descriptor of person 

// now say what will be the output of the following :

// delete person.name ;


// ** constructor Prototype 

// function Circle (radius) {
//     this.radius =  radius ;
// }

// const circle = new Circle(2);
// now say what will be the output of the following :

// console.log( Circle.prototype == Object.getPrototypeOf(circle) )

// this is because circle object is created on the same constructor prototype as Circle function


// Prototype vs Instance Member

// When we look for a property or method of a object JS engine first search in Object it selt then searches in its prototypes
// First Child (Object) then Parent ( prototype)

// *** we can add methods in  prototypes

// function Person(name) {
//     this.name = name ;
// }

// Person.prototype.scientific_name = function () {
//     return "Homo Sapiens" ;
// }

// const nayem = new Person("nayem") ;
// const ruhul = new Person("ruhul") ;

// console.log(nayem.scientific_name());
// console.log(ruhul.scientific_name())

// console.log(Object.getPrototypeOf(nayem));

// here scientific_name() is a prototypical method other than instance method

// let x = {} ;

// we have a object called x , in general it has a prototyoical  method called toString ()
// but can we override the prototypical method of x ??

// yes we can like below :

// x.__proto__.toString = function () {
//     console.log("i changed the prototype function");
// }

// console.log(x.toString()) ;
// let y = {};
// console.log(y.toString()) ;

// see we changed the object base for all the objects 

// But it is not a good practice to change the objectbase methods or prototypes

// in Instance Method we can call Prototye methods and vice versa

// function Circle(radius) {
//     this.radius = radius ;

//     this.draw = function() {
//         console.log("drawing")
//     } 
// }

// Circle.prototype.move = function() {
//     this.draw() ;
//     console.log("moving")
// }

// circle = new Circle(1) ;
// circle.move();

// we can do the oposite as well

// function RCircle(radius) {
//     this.radius = radius ;

//     this.draw = function () {
//         this.move() ;
//         console.log("drawing")
//     };
// }


// bcircle = new RCircle(2) ;

// bcircle.__proto__.move = function() {
//     console.log("moving");    
// };

// ccircle = new RCircle(3);
// bcircle.draw() ; 
// ccircle.draw() ;

// this means we can add / delete to prototype protperties , change (override) them
// Circle.prototype == circle.__proto__ cz both indicets to same construct function that was used to create the objects (function is also a object)


// Now our task is to iterate through the keys of RCircle object

// but there arose a problem

// we generally use objects.keys(RCircle) to get the keys

// console.log(Object.keys(ccircle));

// see we get only ['radius' , 'draw'] methods but not the proto method 'move'
// how can we get that as well ??

// by using for in loop we can get the proto properties as well

// for (key in ccircle) console.log(key);

// this time we get ( instance + proto ) mehods both .

// but if someone ask you to find only the proto methods not both ??

// for this we get use following ...

// console.log(Object.keys(ccircle.__proto__)) ;

// see we get only the proto methods

// *** Inheritence 


// prototypical inheritence 

// function Shape() {

// }

// Shape.prototype.duplicate = function () {
//     console.log("duplicate");
// }

// function Circle(radius) {
//     this.radius = radius ;
// }

// Circle.prototype.draw = function () {
//     console.log("draw") ;
// }

// now we want Circle base (circle.prototype) to have shape.prototype's properties 

// how can we do that ??


// by doing following we can do that :

// Circle.prototype = Object.create(Shape.prototype);

// c = new Circle(12) ;

// *** Resetting the constructor

// new Circle() === new Circle.prototype.constructor()

// so when we are inhering the proto we should also reset the construct property else the construct
// will indicate to the object where it was inherited from

// How can we do that ??? 

// Circel.prototype.constructor = Circle


// ** super constructor **

// suppose we have a cirle object we want to set color of the shape object on the same object
//how can we do that ??

// function shape(color){
//     this.color = color ;
// }

// shape.prototype.duplicate = function() {
//     console.log("duplicate") ;
// }

// function circle(radius,color) {
//     this.radius = radius ;
//     shape(color) ;
// }

// circle.prototype = Object.create(shape.prototype);

// c = new circle(1,'pink')

// console.log(window.color) ;
// But why this didn't work

// in JS the the new keyword means a creating a empty object and passing the object to the fuction object
// but when we dont diclare new what really happens >

// in that case the object refers to the global object such as 'Window' object

// so on top we passed two parameter radius and color , but in circle we didn't diclare any object so by default the 
// object was window object 

// then how can we solve that problem

// by typing new keyword ??

// NO . cz that will create another new oject and pass it we dont want that , we want our circle object to have shape color not 
// any new object , so how can we do that ??

// now we can use the concept of super contructor .
// means constructor under a constructor .
// did not get that ,, okay i am simplifying that for you.

// at beginning we are declaring a new object and passing it through the circle object now we want this object to pass to the shape 
// object

// in color object we can use something like this :
// shape.call(this,color);

// shape = function (color){
//     this.color = color ;
// }

// shape.prototype.duplicate = function() {
//     console.log("duplicate") ;
// }

// function circle(radius,color) {
//     this.radius = radius ;
//     shape.call(this,color) ;
// }

// circle.prototype = Object.create(shape.prototype);

// c = new circle(1,'pink')

// console.log(c.color) ;

// Method Overridding

// function extend(Child , Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child ;
// }

// function shape() {

// }

// shape.prototype.duplicate = function() {
//     console.log("duplicate") ;
// }

// function Circle() {

// }
// extend(Circle, shape) ;

// const c = new Circle() ;
// // console.log(c.duplicate()) ;

// Circle.prototype.duplicate = function() {
//     shape.prototype.duplicate.call(this);

//     console.log("circle duplicate");
// }

// console.log(c.duplicate());
// console.log(c.__proto__.__proto__.duplicate());


// *** Inheritence***

// function extend(Child , Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child ;
// }

// function Shape() {

// }

// Shape.prototype.duplicate = function() {
//     console.log("duplicate") ;
// }

// function Circle() {

// }
// extend(Circle, Shape) ;

// // console.log(c.duplicate()) ;

// Circle.prototype.duplicate = function() {
//     console.log("circle duplicate");
// }

// function Square() {

// }
// extend(Square,Shape);

// Square.prototype.duplicate = function() {
//     console.log("square dupliacte");
// }

// const c = new Circle() ;
// const s = new Square() ;

// // console.log(s.duplicate());
// // console.log(c.duplicate());

// // what is the power of polimorphism ??

// // here it is :

// shapes = [ c , s ]

// for (let shape of shapes){
//     console.log(shape.duplicate());
// }

// function extend(Child , Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child ;
// }

// function Animal(){

// }
// Animal.prototype.eat = function() {
//     console.log("eats everything");
// }

// Animal.prototype.walk = function() {
//     console.log("walks on four leg");
// }

// function Person() {

// }

// extend(Person,Animal);

// Person.prototype.eat = function() {
//     console.log("eats halal");
// }

// Person.prototype.walk = function() {
//     console.log("walks on two legs only");
// }

// function Dog() {

// }

// extend(Dog, Animal);

// Dog.prototype.eat = function() {
//     console.log("eats doggie food");
// }

// function Crocodile() {

// }

// extend(Crocodile,Animal);

// animals= [ new Person() ,  new Dog() , new Crocodile()]

// for (animal of animals) {
//     console.log(animal.name);
//     animal.eat() ;
//     animal.walk() ;
// }

// ***Mixins 

// const canEat = {
//     eat : function() {
//         console.log("eating");
//     }
// };

// const canWalk = {
//     walk : function () {
//         console.log("walking");
//     }
// };

// const canSwim = {
//     swim : function () {
//         console.log("swimming");
//     }
// };

// function Person() {
//     this.think = function () {
//         console.log("thinking");
//     };
// }

// Object.assign(Person.prototype,canEat, canWalk);

// const nayem = new Person() ;
// nayem.eat() ;
//  nayem.walk();

// function Dog() {

// }

// Object.assign(Dog.prototype , canEat , canWalk) ;

// const tommy = new Dog() ;

// tommy.eat() ;
// tommy.walk() ;

// function Fish () {

// }

// Object.assign(Fish.prototype, canEat , canSwim) ;

// const goldfish = new Fish() ;

// goldfish.eat() ;
// goldfish.swim() ;


// const person = {
//     name : "nayem" ,
//     age : 13,
//     roll : 23 ,
//     hasnid : function () {
//         if(person.age > 18)
//             return true;
//         else return false ;    
//     }
// }

// console.log(person.name , person.age , person.roll , person.hasnid());

// function person(name,age,roll) {
//     return {
//         name : name ,
//         age : age ,
//         roll : roll ,
//         hasnid : function() {
//             if(age > 18 )
//                 return true;
//             else return false;    
//         }
//     }
// }

// sarjin = person("sharjin",28,3);

// person.prototype.gender = function() {
//     return "female" ;
// }

// sarjin.gender = "female" ;
// sarjin.__proto__.gender = "male" ; 
// console.log(sarjin.name, sarjin.age , sarjin.roll , sarjin.hasnid(), sarjin.gender);

// const person = function(name,age,roll) {
//     this.name = name ;
//     this.age = age ;
//     this.roll = roll ;
// }

// under the hood this happend

// const person = new Function('name','age','roll' , `
//     this.name = name ;
//     this.age = age ;
//     this.roll = roll ;
// `);

// person.prototype.interestedin = "male+femlae" ;

// console.log(person.gender)

// const nayem = new person("nayem" , 19 , 13);
// nayem.interestedin = "female" ;
// // console.log(nayem.name , nayem.roll, nayem.age , nayem.interestedin , nayem.__proto__.interestedin);

// const cat = function() {
//     this.
// }

// cat.prototype = Object.create(person.prototype);

// const mini = new cat() ;
// console.log(mini.interestedin);

// const sophia = cat.call({});
// console.log(sophia.interestedin) ;

// const field = function (height,width) {
//     this.height = height ;
//     this.width = width ;
//     this.area = height*width ;
//     this.price = this.area * 1000 ;
// };

// const my_field = {} ;
//  field.call(my_field , '20','30');

// *** ES6 Class

// these classes are not like C# or java 
// its just having sentactic sugar over prototypes

// function Circle(radius) {
//     this.radius = radius ;
// }

// function draw() {
//     console.log(draw);
// }
// Circle.prototype.draw = draw ;

// class Circle2 {
//     constructor(radius) {
//         this.radius = radius ;
//     }

//     draw() { // draw() { }
//         console.log("draw");
//     };
// }

// a = new Circle(2);
// b = new Circle2(2);
// a.draw(); b.draw() ;


// *** Hoisting 

// Function Declaraction are hoited on the top so we can call them before we declare them

// Example:

// draw() ;

// function draw() {
//     console.log("drawing");
// }

// But with function expression we can not do that thing :

// Example :

// draw() ;

// const draw = function() {
//     console.log("draw");
// }

// but we can not do that with classes :

// const d = new draw() ;

// class draw{
//     constructor() {
//         this.draw = function () {
//             console.log("draw");
//         }
//     }
// }

// *** static method

// class Circle {
//     constructor(radius) {
//         this.radius = radius ;
//     }

//     draw() {
//         console.log("draw");
//     }

//     static parse(str) {
//         const radius = JSON.parse(str).parse;
//         return new Circle(radius);
//     }
// }

// const c = Circle.parse('{"radius": 1}');
// console.log(c.radius);

// *** Symbol()

// Old way :

// const Circle = function(radius) {
//     radius = radius ;
//     Object.defineProperty(this,'radius',{
//         get : 
//             function () {
//                 return radius;
//             } ,
//         set : function(r) {
//                 radius = r ;
//             }    
//     });
// }

// circel = new Circle(2) ;
// console.log(circel.radius) ;
// circel.radius = 5 ;
// console.log(circel.radius);

// New way :
// const _radius = Symbol() ;

// class Circle {
//     constructor(radius){
//         this[_radius] = radius ;
//     }
//     get radius(){
//         return this[_radius];
//     }
//     set radius(r){
//         this[_radius] = r ;
//     }
// }

// circle = new Circle(1);
// console.log(circle.radius);
// circle.radius = 12 ;
// console.log(circle.radius);

//*** weakmap()

// const _radius = new WeakMap();
// const _draw = new WeakMap();

// class Circel{
//     constructor(radius) {
//         _radius.set(this, radius) ;
//         _draw.set(this, () => {
//             // console.log("draw");
//             return "draw" ;
//         });
//     };
//     get radius(){
//         return _radius.get(this);
//     }

//     get draw() {
//         return _draw.get(this) ;
//     }
// }

// circle = new Circel(1);
// b_circle = new Circel(2);
// console.log(circle.radius);
// console.log(circle.draw()) ;
// console.log(b_circle.radius);
// console.log(b_circle.draw());

