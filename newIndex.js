
// // Create an object
// // const circle = {
// //     radious: 1,
// //     location: {
// //         x: 1,
// //         y: 2,
// //     },
// //     draw: function(){
// //         console.log('draw');
// //     }
// // }

// // factory function - A function that creates an object
// function createCircle(radius) {
//     return{
//         radius,
//         draw: function(){
//         console.log(radius*radius);
//         }
//     };    
// }

// const circle = createCircle(6);
// circle.draw();

// // constructors

function StopWatch(){

    let timeDiff, startTime,endTime = 0;
    let timerRunning = false;
    this.duration = 0;


    this.start = function(){
        if(timerRunning == false){
        startTime = new Date();
        timerRunning = true;
        } else {
            throw new Error ('The StopWatch has been started already');
        }
    };

    this.stop = function(){
        if(timerRunning !== false){
           endTime = new Date();
           timeDiff = endTime - startTime;
           timeDiff /= 1000;  

           duration = timeDiff;
           timerRunning = false;
        } else {
            throw new Error ('The StopWatch is not running yet')
        }
    };

    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        },
        set: function(){
            throw new Error ('This variable cannot be changed')
        }
    });

    this.reset = function(){
        timerRunning = false;
        startTime = null;
        endTime = null;
        timeDiff = 0;
    };

}

const sw = new StopWatch();



// function Circle(radius) {
//     this.radius = radius;
//     let defaultLocation = { x: 0, y: 0};
    
//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     }
    
//     this.draw = function(){
//         console.log('The new radius is : ' + radius);
//     };

//     Object.defineProperty(this, 'defaultLocation', {
//        get: function() {
//            return defaultLocation;
//        },
//        set: function(value) {
//            if (!value.x || !value.y)
//             throw new Error ('Invalid Location');
//            defaultLocation = value;
//        }
//     });
// }

// const circle = new Circle(2)
// circle.getDefaultLocation(); 
// circle.defaultLocation = 10;
// circle.draw();

 
// for (let key in circle){
//     if (typeof circle[key] !== 'function'){
//         console.log(key + ' its a function')    
//     }
    
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle)
//     console.log('Circle has a radius')

// Template literals `` 

const name = 'Friend';

const another = 
`Hi ${name},

Thank you for joining the list. 

Regards
Aldo`; 