
// api url 
const apikey = '78b9d599c4f94f8fa3afb1a5458928d6';

function SearchFunction() {
  
   var search =  document.getElementById("Search").value;
   var e = document.getElementById("category");
   var category = e.value;
 
   var searchcombination = search + ' And ' + category;

   const api_url_search =`https://newsapi.org/v2/everything?q=${searchcombination}&apiKey=${apikey}`;

    var y1 = document.getElementById("searchDiv");

    if (y1.style.display == "none" || y1.style.display == "") {
        y1.style.display = "block";
    } else {
        y1.style.display = "block";
    }
    
    // Calling that async function 
    getApiSearch(api_url_search); 


}

 async function getApiSearch(url) { 
 
    // Storing response 
    const response =await fetch(url);
    
    // Storing data in form of JSON 
    var data = await response.json(); 

    // console.log(data);

    showSearch(data); 
} 


 function showSearch(data) { 
       
    let tab =  ''; 
  
    for (var i=0;i<data.articles.length;i++) {
        tab += `<div class = "card"><tr><td><div class = "col-md-10"><img src=${data.articles[i].urlToImage} width='150' height='100'></img></div></td> 
        </tr>`; 
        tab += `<tr><td><div class = "col-md-10"><b>${data.articles[i].title}</b></div></td></tr>`; 
        tab += `<tr><td><div class = "col-md-10">${data.articles[i].author}</div></td></tr>`; 
        tab += `<tr><td><div class = "col-md-10">${data.articles[i].description}</div> </td></tr>`; 
        tab += `<tr><td><div class = "col-md-10"><a href=${data.articles[i].url}>Click Here!</a></div></td></tr>`;
        tab += `<tr><td> <div class="card-footer">
        <small class="text-muted">Publish date: ${data.articles[i].publishedAt}</small> </div></td></tr></div>`;
        }

     // Setting innerHTML as tab variable 
    document.getElementById("searchnews").innerHTML = tab; 
      
 }
