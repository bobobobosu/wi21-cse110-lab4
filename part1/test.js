// function discountPrices (prices, discount) {
//     var discounted = [];
//     var finalPrice = 0;
//     for(var i=0;i < prices.length;i++){
//         var discountedPrice = prices[i]*(1-discount);
//         finalPrice = Math.round(discountedPrice * 100)/100;
//         discounted.push(finalPrice);
//     }

//     console.log(i);
//     console.log(discountedPrice);
//     console.log(finalPrice);
//     return discounted;
// }

// console.log(discountPrices ([100, 200, 300], .5))

// function discountPrices (prices, discount) {
//     let discounted = [];
//     let finalPrice = 0;
//     for(let i=0;i < prices.length;i++){
//         let discountedPrice = prices[i]*(1-discount);
//         finalPrice = Math.round(discountedPrice * 100)/100;
//         discounted.push(finalPrice);
//     }

//     // console.log(i);
//     // console.log(discountedPrice);
//     console.log(finalPrice);
//     return discounted;
// }

// console.log(discountPrices ([100, 200, 300], .5))

// function discountPrices (prices, discount) {
//     const discounted = [];
//     const finalPrice = 0;
//     for(let i=0;i < prices.length;i++){
//         const discountedPrice = prices[i]*(1-discount);
//         finalPrice = Math.round(discountedPrice * 100)/100;
//         discounted.push(finalPrice);
//     }

//     console.log(i);
//     console.log(discountedPrice);
//     console.log(finalPrice);
//     return discounted;
// }

// console.log(discountPrices ([100, 200, 300], .5))
// function discountPrices (prices, discount) {
//     const discounted = [];
//     const finalPrice = 0;
//     for(let i=0;i < prices.length;i++){
//         const discountedPrice = prices[i]*(1-discount);
//         finalPrice = Math.round(discountedPrice * 100)/100;
//         discounted.push(finalPrice);
//     }

//     console.log(i);
//     console.log(discountedPrice);
//     console.log(finalPrice);
//     return discounted;
// }

// console.log(discountPrices ([100, 200, 300], .5))


// console.log('3' + 2);
// console.log('3' - 2);
// console.log(3 + null);
// console.log('3' + null);
// console.log(true + 3);
// console.log(false + null);
// console.log("3" + undefined);
// console.log("3" - undefined);

// console.log('2' > 1)
// console.log('2' < '12')
// console.log(2 == '2')
// console.log(2 === '2')
// console.log(true == 2)
// console.log(true === Boolean(2))


// if (2 == true) {
//     console.log('Hello!');
// } else if (2){
//     console.log('How are you?');
// } else{
//     console.log('Goodbye')
// }

// function modifyArray(array, callback){
//     const newArr = [];
//     for(let i=0; i<array.length; i++){
//         newArr.push(callback(array[i], function(x){
//             return x * 2;
//         }))
//     }
//     return newArr;
// }

// function doSomething(num, callback){
//     return callback(num+2);
// }

// console.log( modifyArray([1,2,3], doSomething))

function printNums(){
    console.log(1);
    setTimeout(function(){console.log(2);}, 1000);
    setTimeout(function(){console.log(3);}, 0);
    console.log(4);
}
printNums();