$(document).ready(function() {

var myurl = 'https://newsapi.org/v2/top-headlines?' +
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
      console.log(i);
      var article=json.articles[i];
      var newArticle="";
      newArticle+="<a style='color:black; text-decoration:none;' href='"+article.url+"'><p>"+article.title+"</p>";

      if(article.urlToImage!==null) newArticle+="<br><img class='newsimg' src='"+article.urlToImage+"'></img>";
      newArticle+="<br><p id='source'>"+article.source.name+"</p></a>";

      $("."+i).html(newArticle);
    }
  }
});
});
