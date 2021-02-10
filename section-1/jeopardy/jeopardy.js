//categories is the main data structure for the app; it looks like this:



//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]

function clearTable() {
     document.querySelector(".tbody").innerHTML = '';
      document.querySelector(".thead").innerHTML = '';
     
}


// let catId = [];
// let clueArray = [];
// let clue = [];
// let title, response, question, answer, text, newTh, target;

//global var are constant unless we change them. if we keep variables inside of the functions we can avoid problems where it keeps old data we dont want anymore

// async function getCategories() {
//     const categories = await axios.get(`http://jservice.io/api/categories?count=6`);
//     const categoryQuestions = [];

//     categories.data.forEach (async function (category) {
//            const clues = await axios.get(`http://jservice.io/api/clues?category=${category.id}`);
//            categoryQuestions.push(clues.data)
//        })

//     return categoryQuestions;
    
   
// } 






/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
 let NUM_CATEGORIES = [];
async function getCategoryIds() {

    const response = await axios.get('http://jservice.io/api/categories?count=6');
    NUM_CATEGORIES = _.sampleSize(response.data, [n = 6]);
//is it because it is producing more than the needed data

    // for (let num of NUM_CATEGORIES) {
    //     let categoryID = num.id;
    //     catId.push(categoryID); 
    // }
// return NUM_CATEGORIES;
    console.log(NUM_CATEGORIES)
    return NUM_CATEGORIES.map( (catId) => ({
        id: catId.id,
        title: catId.title,
    }))
}
getCategoryIds();



 //source: https://www.reddit.com/r/learnjavascript/comments/k8wk9o/struggling_with_accessing_object/

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */
// a two dimensional array each 
//why is the table showing more than 6 categories
 let allQuestions = [];
 async function getCategory(catIds){
   
    catIds.forEach(async(Id) => {
      const catQuestions = [];
       let  response = await axios.get('http://jservice.io/api/clues?category=' + Id.id);
       response.data.forEach(catquestion => {
           catQuestions.push({
                question: catquestion.question, 
                answer: catquestion.answer,
                title:  catquestion.category.title

           })
           
       })
       allQuestions.push(catQuestions);
       
    //     for (let i = 0; i < response.data.length; i++) {
    //         question = response.data[i].question;
    //         answer = response.data[i].answer;
    //         title = response.data[i].category.title;
     })
     console.log(allQuestions)
     return allQuestions

 }    


/*source: https://stackoverflow.com/questions/61450006/first-time-using-an-api-in-js-need-some-array-and-page-load-guidance
*/


//   function fillTable(categories) {
//        const table = document.querySelector('table')
//        const header = document.querySelector('thead')
//     table.append('')
//       categories.forEach(function(category){
     
//         const th = document.createElement('th');
//         th.innerHTML.category.category.title
//         header.appendChild('th')
        

//         const tr = document.createElement('tr');
//         const tbody = document.querySelector("tbody")
//         tbody.appendChild("tr");

//         const td = document.createElement('td');
//         td.innerHTML.category.category.clues
  
//         })
    
//   }
  
  //event click is not working
//
  
//questions and answer part

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
//

function fillTable(NUM_CATEGORIES, allQuestions) {
    
   
 for (let cat of NUM_CATEGORIES) {
      let newTh = document.createElement("th");
         let text = document.createTextNode(cat.title);
        newTh.appendChild(text);
        document.querySelector(".thead").appendChild(newTh);
        console.log(text);
         let newTr = document.createElement('tr');
         document.querySelector(".tbody").appendChild(newTr);

    for (let items of allQuestions) {
        let newTd = document.createElement("td");
            newTd.innerText = "?";
            newTd.id = 'td';
         newTr.appendChild(newTd);
    }   
}



}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
    $("td").on("click", function(e){
        console.log(e.target)

        if($(e.target).is(".null")) {//if null show question
            console.log("clicked on a question mark! here is the question")
            $(e.target).css("visibility","hidden"); //question mark will be hidden
            $(e.target).parent().find(".question").css("visibility","visible") 
        } 
        if ($(e.target).is(".question")) {
            $(e.target).css("visibility","hidden");
            $(e.target).parent().find(".answer").css("visibility","visible")     
       }  
        
    })
}



/*if($(e.target).is("#restart")){
            reloadGame(); */

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
//how to update the button
function showLoadingView() {
    $('start').click(function() {
        
           
    });
  

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
    if($('table').is(".null")) {
     $("spinner-border" ).css("visibility","hidden");
    }
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */
//async removed
async function setupAndStart() {

let catIds = await getCategoryIds();
await(getCategory(catIds))
console.log(catIds)
  clearTable();
   fillTable(NUM_CATEGORIES,allQuestions); 

}



/** On click of start / restart button, set up game. */
// TODO
$(document).ready(function(){
    $('button').on('click',function(){

        setupAndStart();

    });
});
/** On page load, add event handler for clicking clues */

$(document).ready(function(){
    $('td').on('click',function(){
        handleClick(evt);
    });
});




// TODO