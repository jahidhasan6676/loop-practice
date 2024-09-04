// const friends = ['jahid', 'hasan', 'kamrul', 'samir', 'saimon']
// console.log(friends);
// for(const friend of friends ){
//     console.log(friend)
// }

// const numbers = [5, 4, 34, 34, 34, 34, 54, 65,];
// console.log(numbers);
// for(const num of numbers){
//     console.log(num);
// }
// let sum = 0;
// for(i = 0; i <=10; i++){
//     console.log(i);
//     sum = sum + i;
    
//     console.log('sum', sum);

// }

// let n = 11;
// let sum = 0;
// while(n <= 20){
//     console.log(n);
//     sum = sum + n;
//     console.log('sum', sum);
//     n++;
// }

// for(let i = 61; i <= 100; i++){
    
//     if(i % 2 === 0){
//         console.log('even number', i)
//     }
    
// }

// let n = 78;
// while(n <= 98){
//     if(n % 2 === 0){
//         console.log(n);
//     }
//     n++;
// }

// for(i = 61; i <= 100; i++){
//     if(i % 2 === 1){
//         console.log(i);
//     }
// }

// let n = 130;
// while(n <= 160){
//     if(n % 2 === 1){
//         console.log(n)
//     }
//     n++;
// }


// let n = 81;
// let sum = 0;
// while(n <= 131){
//     console.log(n);
//     sum = sum + n;
//     console.log('sum', sum);
//     n++;
// }


// let total = 0;
// for(i = 81; i <= 131; i++){
    
//     if(i % 2 === 1){
        
//         total = total + i;
//         console.log(total);
//     }
    
// }

// let i = 206;
// let sum = 0;
// while(i <= 311){
//     if(i % 2 === 0){
//         console.log(i);
//         sum = sum + i;
//         console.log('sum', sum);
        
//     }
//     i++;
// }


// for(i = 21; i >= 15; i--){
//     console.log(i);
// }

// let n = 1;
// while(n <= 200){
//     console.log(n);
//     if(n >= 100){
//         break;
        
//     }
    
//     n++;
    
// }

// let sum = 0;
// for(i = 0; i <= 200; i++){
//     console.log(i);
//     sum = sum + i;
//     console.log('sum', sum);
//     if(sum > 100){
//         break;
//     }

// }

// for(i = 1; i <= 40; i++){
//     if(i % 2 === 0){
        
//         continue;
//     }
//     console.log(i);
// }

// let i = 55;
// while(i <= 85){
//     i++;
//     if(i % 2 === 1){
//         console.log(i);
        
//     }
    
//     if(i % 5 === 0){
//         continue;
//     }
//     console.log(i);
   
   
    
// }
// let sum = 0;
// for(let i = 11; i <= 20; i++){
//     sum = sum + i;
//     console.log(i);
// }
// console.log('sum of numbers 11 to 20:', sum);

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }
// while(i < 5)

// let n = 10;
// do{
//     console.log(n);
//     n++;
// }
// while(n <9 )

// let n = 50;
// while(n < 70){
    
//     console.log(n);
//     if(n > 60){
//         break;
//     }
//     n++;
    
// }

// let i = 1;
// while(i <= 60){
//     console.log("I will invest at least 6 hrs every single day for next 60 days!");
//     i++;
// }

// let num = 5;
// let i = 1;

// while (i <= 10) {
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++;
// }

// let num = 5;
// let i = 1;
// while(i <= 10){
//     console.log(`${num} x ${i} = ${num * i}`);
//     i++;
// }

// let n = 9;
// for(let i = 1;    i <= 10; i++){
//     console.log(`${n} x ${i} = ${n * i}`);

// }
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//    }

// for (let i = 1; i <= 100; i++) {
//     if (Math.sqrt(i) % 1 === 0) { // Check if i is a square number
//         break; // Stop the loop
//     }
//     console.log(i);
// }

// let i = 1;

// while (i <= 100) {
//     if (Math.sqrt(i) % 1 === 0) { // Check if i is a square number
//         break; // Stop the loop
//     }
//     console.log(i);
//     i++;
// }


// let i = 55;

// while (i <= 85) {
//     if (i % 2 !== 0) { // Check if the number is odd
//         if (i % 5 !== 0) { // Check if the number is not divisible by 5
//             console.log(i);
//         }
//     }
//     i++;
// }


// for(let i = 55; i <= 85; i++){
//     if(i % 2 === 0 || i % 5 === 0){
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 2; i <= 100; i++) {
//     console.log(i);
//     if (Math.sqrt(i) % 1 === 0) { // Check if i is a square number
//         break; // Stop the loop
//     }
    
// }

// for (let i = 1; i <= 100; i++) {
    
//     // Check if the square root of the current number is an integer
//     if (Math.sqrt(i)){
//          // Print the square number
        
//         break; // Exit the loop
//     }
//     console.log(i);
// }

for(let i = 2; i <= 100; i++){
    console.log(i);
    if (Number.isInteger(Math.sqrt(i))){
       
        break;
    }
    
}