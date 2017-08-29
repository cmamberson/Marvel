(function(){

  $(function(){

let heroName;
let heroPic;
let picExtension;
let table = $("#heros");
let heroFullPic;
let heroFullName;
let submitButton = $("#submitButton");
let searchBox = $("#searchBox");
let marvelHeros = $("#marvelHeros");
let originalURL = "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=b73ee211c9d7a4ee05cb511e9e20a6d5&hash=f85a72659e7ae4456d7685de2fec6cc9";


//grabs hero name and image and adds to table
    function getHeros(){
        $.get(originalURL, function (data){

          for (let i = 0; i < data.data.results.length; i++){
            heroName = data.data.results[i].name;
            heroPic = data.data.results[i].thumbnail.path;
            picExtension = data.data.results[i].thumbnail.extension;
            fullPic = heroPic+"."+picExtension;
            let heroFullPic = ("<tr><td><img src=\""+fullPic+"\"></td>");
            let heroFullName = ("<td><h2>"+heroName+"</h2></td></tr>");

            table.append(heroFullPic+heroFullName);
          }
        })
    }

//runs function
  getHeros();


//when search criteria is submitted, update url to grab search criteria
    submitButton.click(function(){
    table.html("");
    let searchCriteria = searchBox.val();

    if (searchCriteria === ""){
      originalURL = "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=b73ee211c9d7a4ee05cb511e9e20a6d5&hash=f85a72659e7ae4456d7685de2fec6cc9";
      getHeros();

    } else {

      let newURL = originalURL+"&nameStartsWith="+searchCriteria;
      originalURL = newURL;

      getHeros();
  //dont refresh page
        return false;

    }



    })
//when brand of nav bar is clicked, refresh the page with the orginal table
    marvelHeros.click(function(){
    table.html("");
    originalURL = "https://gateway.marvel.com:443/v1/public/characters?limit=100&ts=1&apikey=b73ee211c9d7a4ee05cb511e9e20a6d5&hash=f85a72659e7ae4456d7685de2fec6cc9";
    getHeros();


    })

  });

})();
