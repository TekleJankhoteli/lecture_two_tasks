// შექმენით მასივი სახელით ‘students’ და მოათავსეთ მასში 5 ელემენტი და
// -დაალაგეთ მასივში არსებული ელემენტები საპირისპირო მიმართებულით

let students = ["tekle", "ana", "nia", "lizi"];
console.log(students.reverse());

// სტუდენტების, მასივი გაფილტრეთ და ყველა სტუდენტი,რომლის სახელშიც არის A
// შეინახეთ ცვლადში studentsWithA.

let studentsWithA = students.filter((student) => student.includes("a"));
console.log("students with 'a' in their name:" + studentsWithA);

//შექმენით მასივი persons=[’David’, ‘Elene’, ‘Teona’, ’Giorgi’]
// მასივის ერთ-ერთი მეთოდის გამოყენებით დაადგინეთ persons-ს მასივში არის თუ არა
// სახელი Elene და ნებისმიერი შედეგი შეინახეთ ცვლადში hasElene.
// გამოიყენეთ პირობითი ოპერატორი თუ’Elene’ არის მასივის ერთ-ერთი ელემენტი,
// კონსოლში დაბეჭდეთ ‘Elene is in the persons array’ სხვა შემთხვევაში დაბეჭდეთ ‘Elene
// is not in the persons array’.

let persons = ["David", "Elene", "Teona", "Giorgi"];

let hasElene = persons.includes("Elene");
console.log(hasElene);

if (hasElene) {
  console.log("Elene is in the persons array");
} else {
  console.log("Elene is not in the persons array");
}

//მოცემული გაქვთ მასივი [1,7,35,15,30] დაალაგეთ ელემენტები ზრდადობით და დაბეჭდეთ შედეგი.
let numbers = [1, 7, 35, 15, 30];
console.log(numbers.sort((a, b) => a - b));

// გამოიყენეთ prompt მეთოდი და მომხარებელსაც ჩააწერინეთ user და passCode.
// თუ მომხმარებლის მიერ ჩაწერილი user და passCode დაემთხვევა, წინასწარ შენახულ
// ინფორმაციას, კონსოლში დაბეჭდეთ"Login successful. Welcome!"
// თუ, რომელიმე არ დაემთხვევა დაბეჭდეთ შესაბამისი მესიჯი : Incorrect username ან
// Incorrect password ;სხვა შემთხვევაში, დაბეჭდეთ Login failed. Please try again.

// let user = "admin";
// let passCode = 12345;

// let loginUser = prompt("Please use your user Id ");
// let loginPasscode = prompt("Please use your Passcode");

// if (loginUser == user && loginPasscode == passCode) {
//   console.log("Login successful.welcome!!!");
// } else if (loginUser !== user || loginPasscode !== passCode) {
//   console.log("Incorrect username or password");
// } else {
//   console.log("Login failed. Please try again");
// }

//შექმენით კითხვარი prompt-ის გამოყენებით ‘What is your favorite fruit? (apple, banana,
// orange);თუ მომხმარებელი ჩაწერს apple-ს, დაბეჭდეთ Apples are great for a quick snack!
// თუ მომხმარებელი ჩაწერს banana-ს, დაბეჭდეთ Bananas are full of potassium!
// თუ მომხმარებელი ჩაწერს orange-ს, დაბეჭდეთ Oranges are a great source of vitamin
// C! სხვა შემთხვევაში, დაბეჭდეთ ‘That's an interesting choice! I don't know much about
// that fruit.’

let favFruit = prompt("what is your fevorite Fruit?");

if (favFruit == "apple") {
  console.log("Apples are great for a quick snack!");
} else if (favFruit == "banana") {
  console.log("Bananas are full of potassium!");
} else if (favFruit == "orange") {
  console.log("Oranges are a great source of vitamin C!");
} else {
  console.log(
    "That's an interesting choice! I don't know much about that fruit"
  );
}
