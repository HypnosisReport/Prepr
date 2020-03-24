console.log("I'm here");
/*SPOONACULAR API AND SEARCH RECIPE */
function getsource(id){
    $.ajax({
    url:"https://api.spoonacular.com/recipes/"+id+"/information?apiKey=bf1d1c8dbc7545e0bea6be88990aed6b",
    success: function(res) {
    
    document.getElementById("sourceLink").innerHTML=res.sourceUrl
    document.getElementById("sourceLink").href=res.sourceUrl
    }
    });
    }
    
// GET RECIPE

    function getrecipe(q){
    $.ajax({
        //return only 1 result
    url:"https://api.spoonacular.com/recipes/search?apiKey=bf1d1c8dbc7545e0bea6be88990aed6b&number=3&query="+q,
    success: function(res) {
    
    //add title and image & define size

  

/*     for(var i = 0; i <= res.results.length; i++) {
       document.getElementById("output").innerHTML="<h3>"+res.results[i].title+"</h3><br><img src='"+res.baseUri+res.results[i].image+"' width='300'/><br>Ready in "+res.results[i].readyInMinutes+" minutes"
    getsource(res.results[i].id)
}  */

/* for(var i = 0; i <= res.results.length; i++) {
    document.getElementById("div1").innerHTML="<a href="+getsource(res.results[i].id)+">"+res.results[i].title+"</h3><br><img src='"+res.baseUri+res.results[i].image+"' width='250'/><br>Ready in "+res.results[i].readyInMinutes+" minutes <br>")
    }
     */

    document.getElementById("div1").innerHTML="<h3>"+res.results[0].title+"</h3><br><img src='"+res.baseUri+res.results[0].image+"' width='250'/><br>Ready in "+res.results[0].readyInMinutes+" minutes"
    getsource(res.results[0].id)
    document.getElementById("div2").innerHTML="<h3>"+res.results[1].title+"</h3><br><img src='"+res.baseUri+res.results[1].image+"' width='250'/><br>Ready in "+res.results[1].readyInMinutes+" minutes"
    getsource(res.results[1].id)
    document.getElementById("div3").innerHTML="<h3>"+res.results[2].title+"</h3><br><img src='"+res.baseUri+res.results[2].image+"' width='250'/><br>Ready in "+res.results[2].readyInMinutes+" minutes"
    getsource(res.results[2].id) 
    }
    });
    } 
    

    // EMPTY FORM TO SUCCESS DIV
   function switchVisible() {
        if (document.getElementById('emptyForm')) {

            if (document.getElementById('emptyForm').style.display == 'none') {
                document.getElementById('emptyForm').style.display = 'block';
                document.getElementById('successForm').style.display = 'none';
            }
            else {
                document.getElementById('emptyForm').style.display = 'none';
                document.getElementById('successForm').style.display = 'block';
            }
        }
}
