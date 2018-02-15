$(document).ready(function() {

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=4bcf65e104164396b3bfb678552cb083';
          
$.ajax({
  url : myurl,
  dataType : "json",
  success : function(json) {
 
    var number=json.totalResults;
    if(number>12) number>12;
    for(var i=0;i<number;i++)
    {
      var article=json.articles[i];
      var newArticle="";
      newArticle+="<a href='"+article.url+"'>
      <p>"+article.title+"</p>";
      
      if(article.urlToImage!==null) newArticle+="<br><img src='"+article.urlToImage+"'></img>";
      newArticle+="<br><p id='source'>"+article.source.name+"</p></a>";
      
      $("#"+i).html(newArticle);
    }
  });
});
