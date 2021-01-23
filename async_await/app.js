async function getData(){
const response = await axios.get('https://swapi.dev/api/planets/');

for(let planet of response.data.results) {
    console.log(planet.name)
    }
}
//Async and Await to declare a function as asynchonous(a pair of keywords)
//if you add an async, you can add an await
// await until we get something back

//the console log will not happen until we get a response

//by putting await which could only be used with an async function. that completely changes the behavior the reposnse will not have a value until the promise is completed. 
//with JSON you have to parse but with Axios you don't have to
//if you want to loop to each planet

getData();
console.log("I HAPPEN AFTER getData()")
//console.log "I happen after getData" happens before because the await function is waiting for all the other request so response has a value now
//the function will behave like a synchronous code
//So to recap, synchronous code is executed in sequence – each statement waits for the previous statement to finish before executing. Asynchronous code doesn't have to wait – your program can continue to run. You do this to keep your site or app responsive, reducing waiting time for the user.-https://rowanmanning.com