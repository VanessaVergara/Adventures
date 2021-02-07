// categories is the main data structure for the app; it looks like this:



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


let categories =[];

async function getCategories() {
    const categories = await axios.get(`http://jservice.io/api/categories?count=6`);
    const categoryQuestions = [];
    
//the variables above will attach itself to the data and method below 
    categories.data.forEach (async function (category) {
           const clues = await axios.get(`http://jservice.io/api/clues?category=${category.id}`);
           categoryQuestions.push(clues.data)
       })

    return categoryQuestions;
    
   
} 
getCategories();


//always check for the correct variable placement


/*class Categories {
    constructor(title,question,answer) {
        this.title;
        this.clues = {
            question,
            answer
        };
    

    }
}
class JeopardyBoard {
    constructor() {
        this.ROWS = 6;
        this.COLS = 5;
        this.selector = selector;
        const $grid = $(selector);
        this.createGrid()
        this.setupEventListeners();
    }


}
*/


/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
let NUM_CATEGORIES = [];
async function getCategoryIds() {
    for (let i = 0; i < 6; i++){
          const res = await axios.get(`http://jservice.io/api/random`);

          NUM_CATEGORIES.push(res.data.map(result => ({
              id: result.category.id
          })))
          return NUM_CATEGORIES;

    }
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

/*async function getCategory(categories){
    ca.forEach(async(ID) => {
       let response = await axios.get('http://jservice.io/api/clues?category='+ID);
       console.log(response);
       
        for (let i = 0; i < response.data.length; i++) {
            question = response.data[i].question;
            answer = response.data[i].answer;
            title = response.data[i].category.title;

            clueArray = _.sampleSize(clueArray, [n = 5]);
            clueArray.push({ question, answer });
        }

        clue = {
            title: title,
            clueArray: clueArray,
            showing: null
        }
        categories.push(clue);
    })   
    return categories;
}

getCategory(categoryQuestions);
*/

async function getCategory(NUM_CATEGORIES){
getCategoryIds(); 
let catId=[];
  let clue = [];
   for(let i = 0; i < 6; i++) {
       catId.push(NUM_CATEGORIES[i].id.value);
       let response = await axios.get(`http://jservice.io/api/clues?category=${[i].id}`);
       console.log(response);
       clue.push(response.data.map(result =>({
           question: result.question,
           answer: result.answer,
       })))
      
   }
  
   return clue;
}


/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */


function fillTable(categories) {
    const table = document.getElementById('mytable');

    const header = document.getElementById('heading');

    table.append
    console.log(table)
   

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
    $('restart').click(function() {
            $('table').empty();
            $("spinner-border" ).css("visibility","visible");
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
function setupAndStart() {
$("restart").click(function(){
    getCategoryId();
     fillTable();
})
}

/** On click of start / restart button, set up game. */
// TODO

/** On page load, add event handler for clicking clues */


// TODO
