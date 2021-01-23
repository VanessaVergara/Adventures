
function abbrevName(name){
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

const formatDate = (date = new Date()) => {
    const days = date.getDate() +1 ;
    const months = date.getMonth() +1 ;
    const years =  date.getFullYear();
    return `${days}/${months}/${years}`;
}
 
console.log(formatDate());

const addNew = (str) => 
    str.indexOf('New!') === 0 ? str : `New! ${str}`;
    
console.log(addNew('New! Offers'));


const maNewString = () => 
  str.length < 3 ? str : str.slice(0,3) + str.slice(-3)
// note: -3 means counting backwards from the last char 
//(0,3) means it will slice from 0-2

const firstHalf = (str) => str.slice(0, str.length/2);

console.log(firstHalf('temp'));

const concatenate = (str1,str2) => 
    str1.slice(1) + str2.slice(1);
//.slice(1) means the string will start at index one, slicing the 0 index

const closetTo100 = (a,b) => (100 - a) < (100 -b) ? a : b;

const countChars = (str,char) => 
  str.split('').filter(ch => ch === char).length;

const contains2To4 = (str,char) =>
  countChars(str,char) >= 2 && countChars(str, char) <= 4;
  // first const establishes the number occurences of the char in the string
//second const check if it fits the condition

const countEventNumbers = (arr) => arr.filter(num => num % 2 === 0).length;


const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i += 1) {
    returnArray.push(i);
  }
  return returnArray;
}
// difference between countEvent Numbers(will check each number in the array if it is an even number) and createArrayOfNumbers(will create the array of numbers) 
const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i +=1) {
    if(arr[i + 1] < arr[i])
//the previous number compared to the presend number
      return false;
  }
  return true;
}

const largestEvent = (arr) => Math.max(...arr.filter(num => num % 2 === 0));

const replaceFirstDigit = (str) => str.replace(/[0-9]/, '$')
//only one char that it first finds because no 'g'

const isLeapYear = (year) => year % 4 === 0;

const objectsEqual = (a,b) => 
  Objects.keys(a).every(key => b[key]);
  console.log(objectsEqual(objA,objB));

const getRandomHexNumber = () => 
  Math.floor(Math.random() * 16).toString(16);

const getRandomHex = () => '#' + Array.from({ length: 6}).map(getRandomHexNumber).join('');

//blank array that 6 items long.map places get RandomHexNumber and then join it to the variable

[1,2,3,4,5], (x) => x > 3

const isEveryElem = (arr,fn) => {
  for (let i=0; i<arr.length; i+=1) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
};

console.log(isEveryElem([1,2,3,4,5], (x) => x > 0))

const alphabeticalOrder = (str) =>
    str.split('').sort((a,b) => a > b ?1 : -1).join('');

const countLetters = (str,letters =['a','e','i','u']) => str
    .split('')
    .filter(s => letters.indexOf(s) > -1)
    .length;
// -1 value means it is not found in the letters array
//the first parameter is overwritten when we pass in a second parameter

const countCoins =(money, coins = [25,10,5,2,1]) => {
  const totalCoins = [];
  for (let i=0; i<coins.length; i+=1) {
    const thisCoinNum = Math.floor(money / coins[i]);
  //loops through all coins to see which coins are needed
  for (let y=0; y<thisCoinNum; y+=1) {
    totalCoins.push(coins[i]);
    //pushes the coins to the array
  }
 money -= coins[i] * thisCoinNum;
  }
return totalCoins;
}

const getUniqueChars = (str) => 
  str.split('').filter(
      (item,index,arr) =>
        arr.slice(index + 1).indexOf(item) === -1
        //if it is -1 meaning there is no other occurence of this char and it will not be sliced
  );

  console.log(getUniqeChars('aaabbcc'))

function getChar(c){
  return String.fromCharCode(c);
}
//will return the corresponding ascii value 

function seatsInTheater(nCols,nRows,col,row) {
  return (nCols - col + 1 * nRows) * (nRows - row);
}
//ncols * nrows; will know the number of people in the block
// -col and - row will minus the not needed number of seats 

function points(games) {
  return games.reduce((acc,game) => {
    const [x,y] = game.split(':');
    const points = x > y ? 3 : x === y ? 1 : 0;
    ace += points;
    return acc;
  },0);
}

//Note: condition ? exprIfTrue : exprIfFalse
//the more semicolon the the more else if conditions

//Array Methods Exercise



const averageIncome = () => people.reduce ((accumulator,person) => accumulator + person.salary);

//read more on using methods in ES5 and ES6





