/*$table = $('table')
      for (let i = 0; i < categories.length; i++){
        

        $table.html( `<tr>${categories[i].title}
                        </tr>
                        <td>${categories[i].questions}${categories[i].answers}</td>
                         <td>${categories[i].questions}${categories[i].answers}</td>

                          <td>${categories[i].questions}${categories[i].answers}</td>

                           <td>${categories[i].questions}${categories[i].answers}</td>
                            <td>${categories[i].questions}${categories[i].answers}</td>
                        </tr>`)
                    
      }
      return $table
}
*/


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
async function initialize(){
  await getCategoryIds() 
  await Promise.all(getCategory(catId)) 
  fillTable(categories); 
}