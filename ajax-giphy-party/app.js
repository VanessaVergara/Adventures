console.log("Let's get this party started!");

async function getRandomGiphy(){
    const res = await axios.get('http:api.giphy.com/v1/gifs/random/api_key=dc6zaT0xFJmzC')
    console.log(res.data);
    const img = document.querySelector("#gif");
    img.src = res.data.message;
}
const $gifArea =$("#gif-area");
const $searchInput = $("#search");


function addGif(res){
    let numResults = res.data.length;
    if(numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {
            class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100"
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}
$("form").on("submit", async function(evt){
    evt.preventDefault();

let searchTerm = $searchInput.val();
$searchInput.val("");

const response = await axios.get("http://api.giphy.com/v1/gifs/search",{
    params: {
        q: searchTerm,
        api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
    });
    addGif(response.data);
});

$("#remove").on("click",function(){
    $gifArea.empty();
});
