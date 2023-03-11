// Problem 1: 1 থেকে n পর্যন্ত সংখ্যার যোগফল নির্ণয় করো।
let n = 10;
let sum = 0; // If we want to addition anything and store them, the initial value must 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
// console.log(sum);

// Problem 2: ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
/*
  3 * 1=3
  3 * 2=6
  3 * 3=9
  3 * 4=12
  3 * 5=15
  3 * 6=18
  3 * 7=21
  3 * 8=24
  3 * 9=27
  3 *10=30
 */

let sum2 = 1; // If operation is multiply the initial value must >- 1
for (let i = 1; i <= 10; i++) {
  sum2 = i * 5;
  //   console.log(sum2);
}

// Problem 3 = এমন একটা ফাংশন বানাও যেটা একটি অ্যারে নিবে ইনপুট হিসেবে। তারপর সেই অ্যারের সকল  উপাদান এর মধ্যে ৫ এর চেয়ে বড় যে সকল সংখ্যা আছে তাদের কাউন্ট নির্ণয় করবে।

// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   if (element > 5) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

function graterThanFive(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > 5) count++;
  }
  return count;
}

const numbers = [-1, 2, -3, 4, 5, 6, -7, 8, -9, 33, 10];
const result = graterThanFive(numbers);
// console.log(result);

// Problem 4: তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো।

function twoFriends(friends) {
  const friendOne = friends[0];
  const friendTwo = friends[1];
  if (friendOne.length > friendTwo.length) {
    return friendOne.split("").reverse().join("");
  }
  return friendTwo.split("").reverse().join("");
}

const friends = ["monjur", "ali"];
const result4 = twoFriends(friends);
console.log(result4);
