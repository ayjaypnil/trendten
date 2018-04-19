
var config = {
    apiKey: "AIzaSyDiNlk9WDu2wOllfVzch2yvg5UPI_1nGv0",
    authDomain: "trend-ten.firebaseapp.com",
    databaseURL: "https://trend-ten.firebaseio.com",
    projectId: "trend-ten",
    storageBucket: "trend-ten.appspot.com",
    messagingSenderId: "768693959296"
};

firebase.initializeApp(config);

var database = firebase.database();

var topVICE;
var topWIRED;
var topBR;
var topBF;
var topVerge;


var connectionsRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

connectedRef.on("value", function (snap) {
    if (snap.val()) {
        var con = connectionsRef.push(true);
        con.onDisconnect().remove();
    }
});

connectionsRef.on("value", function (snap) {
    $("#totalCon").text(snap.numChildren());
});

$(".carousel").carousel();

$("#topUSNEWS").on("click", function(){
    $("#mediadiv").empty();
    $("#newsTitle").empty();

 

    var topUSqueryURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topUSqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topUS = response.articles[i].title;
            descriptionUS = response.articles[i].description;
            imageUS = response.articles[i].urlToImage;
            urlUS = response.articles[i].url;
            // console.log(topUS + descriptionUS + imageUS + urlUS);

             if (descriptionUS == null) {
               descriptionUS = "Apologies, Data Currently Unavailable Due To Live Refresh. Please Check Back Soon!";
             }

            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                $(this).attr("src", "news.png");
              });
            });

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlUS + "' target='_blank'><img class='media-object img-rounded' src='" + imageUS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topUS + "</h4><p id='newsDescription'>" + descriptionUS + "</p></div></div></div></div>");
        }
        $("#newsTitle").append("Top US Headlines!");
    });
});

$("#businessNEWS").on("click", function () {
    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topBUSINESSqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topBUSINESSqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBIZ = response.articles[i].title;
            descriptionBIZ = response.articles[i].description;
            imageBIZ = response.articles[i].urlToImage;
            urlBIZ = response.articles[i].url;
            // console.log(topBIZ + descriptionBIZ + imageBIZ + urlBIZ);

            if (descriptionBIZ == null) {
            descriptionBIZ = "Apologies, Data Currently Unavailable Due To Live Refresh. Please Check Back Soon!";
            }

            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                  $(this).attr("src", "news.png");
              });
            });

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlBIZ + "' target='_blank'><img class='media-object img-rounded' src='" + imageBIZ + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBIZ + "</h4><p id='newsDescription'>" + descriptionBIZ + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Business Headlines!");
    });
});

$("#sportsNEWS").on("click", function () {
    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topSPORTSqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topSPORTSqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topSPORTS = response.articles[i].title;
            descriptionSPORTS = response.articles[i].description;
            imageSPORTS = response.articles[i].urlToImage;
            urlSPORTS = response.articles[i].url;
            // console.log(topSPORTS + descriptionSPORTS + imageSPORTS + urlSPORTS);

            if (descriptionSPORTS == null) {
            descriptionSPORTS = "Apologies, Data Currently Unavailable Due To Live Refresh. Please Check Back Soon!";
            }

            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                  $(this).attr("src", "news.png");
              });
            });

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlSPORTS + "' target='_blank'><img class='media-object img-rounded' src='" + imageSPORTS + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topSPORTS + "</h4><p id='newsDescription'>" + descriptionSPORTS + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Sports Headlines!");
    });
});

$("#technologyNEWS").on("click", function () {
    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topTECHqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topTECHqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topTECH = response.articles[i].title;
            descriptionTECH = response.articles[i].description;
            imageTECH = response.articles[i].urlToImage;
            urlTECH = response.articles[i].url;
            // console.log(topTECH + descriptionTECH + imageTECH + urlTECH);

            if (descriptionTECH == null) {
            descriptionTECH = "Apologies, Data Currently Unavailable Due To Live Refresh. Please Check Back Soon!";
            }

            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                  $(this).attr("src", "news.png");
              });
            });

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlTECH + "' target='_blank'><img class='media-object img-rounded' src='" + imageTECH + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topTECH + "</h4><p id='newsDescription'>" + descriptionTECH + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Technology Headlines!");
    });
});


$("#entertainmentNEWS").on("click", function () {
    $("#mediadiv").empty();
    $("#newsTitle").empty();
    var topENTqueryURL = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: topENTqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topENT = response.articles[i].title;
            descriptionENT = response.articles[i].description;
            imageENT = response.articles[i].urlToImage;
            urlENT = response.articles[i].url;
            // console.log(topENT + descriptionENT + imageENT + urlENT);

            if (descriptionENT == null) {
            descriptionENT = "Apologies, Data Currently Unavailable Due To Live Refresh. Please Check Back Soon!";
            }

            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                  $(this).attr("src", "news.png");
              });
            });

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlENT + "' target='_blank'><img class='media-object img-rounded' src='" + imageENT + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topENT + "</h4><p id='newsDescription'>" + descriptionENT + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Entertainment Headlines!");
    });
});


$("#searchSUBMIT").on("click", function (event) {
    event.preventDefault();

    $("#mediadiv").empty();
    $("#newsTitle").empty();

    var newsSEARCH = $("#newsSEARCH").val();
    var SEARCHqueryurl = "https://newsapi.org/v2/top-headlines?q=" + newsSEARCH + "&sortBy=popularity&apiKey=95fc06a84c3242019177b79e752121ea"

    $.ajax({
        url: SEARCHqueryurl,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topSEARCH = response.articles[i].title;
            descriptionSEARCH = response.articles[i].description;
            imageSEARCH = response.articles[i].urlToImage;
            urlSEARCH = response.articles[i].url;

            // console.log(topSEARCH + descriptionSEARCH + imageSEARCH + urlSEARCH);
            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                  $(this).attr("src", "news.png");
              });
            });

            $("#mediadiv").append("<div class='well'><div class='media'><div class='media-left'><a href='" + urlSEARCH + "' target='_blank'><img class='media-object img-rounded' src='" + imageSEARCH + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topSEARCH + "</h4><p id='newsDescription'>" + descriptionSEARCH + "</p></div></div></div>");
        }
        $("#newsTitle").append("Top Headlines From Google News Regarding: " + newsSEARCH + "!");
    });
});




$("#submitWIRED").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var WIREDqueryURL = "https://newsapi.org/v2/top-headlines?sources=wired&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: WIREDqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topWIRED = response.articles[i].title;
            descriptionWIRED = response.articles[i].description;
            imageWIRED = response.articles[i].urlToImage;
            urlWIRED = response.articles[i].url;

            $(document).ready(function () {
              $("img").bind("error", function () {
                  // Replacing image source
                  $(this).attr("src", "news.png");
              });
            });
            // dynamically create the whole damn media thing
            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlWIRED + "' target='_blank'><img class='media-object img-rounded' src='" + imageWIRED + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topWIRED + "</h4><p id='newsDescription'>" + descriptionWIRED + "</p></div></div>");
        }
        $("#newsTitle").append("Wired!");
    });
});

$("#submitVICE").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var VICEqueryURL = "https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VICEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVICE = response.articles[i].title;
            descriptionVICE = response.articles[i].description;
            imageVICE = response.articles[i].urlToImage;
            urlVICE = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlVICE + "' target='_blank'><img class='media-object img-rounded' src='" + imageVICE + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topVICE + "</h4><p id='newsDescription'>" + descriptionVICE + "</p></div></div>");
        }
        $("#newsTitle").append("Vice News!");
    });
});

$("#submitBR").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var BRqueryURL = "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BRqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBR = response.articles[i].title;
            descriptionBR = response.articles[i].description;
            imageBR = response.articles[i].urlToImage;
            urlBR = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlBR + "' target='_blank'><img class='media-object img-rounded' src='" + imageBR + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBR + "</h4><p id='newsDescription'>" + descriptionBR + "</p></div></div>");
        }
        $("#newsTitle").append("Bleacher Report!");
    });
});

$("#submitBF").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var BFqueryURL = "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: BFqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topBF = response.articles[i].title;
            descriptionBF = response.articles[i].description;
            imageBF = response.articles[i].urlToImage;
            urlBF = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlBF + "' target='_blank'><img class='media-object img-rounded' src='" + imageBF + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topBF + "</h4><p id='newsDescription'>" + descriptionBF + "</p></div></div>");
        }
        $("#newsTitle").append("Buzzfeed!");
    });
});

$("#submitVerge").on("click", function () {
    $("#topNews").empty();
    $("#newsTitle").empty();
    $("#mediadiv").empty();
    var VERGEqueryURL = "https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=95fc06a84c3242019177b79e752121ea";
    $.ajax({
        url: VERGEqueryURL,
        method: 'GET'
    }).then(function (response) {
        for (i = 0; i < response.articles.length; i++) {
            topVerge = response.articles[i].title;
            descriptionVerge = response.articles[i].description;
            imageVerge = response.articles[i].urlToImage;
            urlVerge = response.articles[i].url;

            $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlVerge + "' target='_blank'><img class='media-object img-rounded' src='" + imageVerge + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topVerge + "</h4><p id='newsDescription'>" + descriptionVerge + "</p></div></div>");
        }
        $("#newsTitle").append("The Verge!");
    });
});

$("#submitBloomberg").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var BloombergqueryURL = "https://newsapi.org/v2/top-headlines?sources=bloomberg&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: BloombergqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topBloomberg = response.articles[i].title;
      descriptionBloomberg = response.articles[i].description;
      imageBloomberg = response.articles[i].urlToImage;
      urlBloomberg = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlBloomberg +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageBloomberg +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topBloomberg +
          "</h4><p id='newsDescription'>" +
          descriptionBloomberg +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("Bloomberg!");
  });
});

$("#submitCNN").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var CNNqueryURL = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: CNNqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topCNN = response.articles[i].title;
      descriptionCNN = response.articles[i].description;
      imageCNN = response.articles[i].urlToImage;
      urlCNN = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlCNN +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageCNN +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topCNN +
          "</h4><p id='newsDescription'>" +
          descriptionCNN +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("CNN!");
  });
});

$("#submitFN").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var FNqueryURL = "https://newsapi.org/v2/top-headlines?sources=fox-news&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: FNqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topFN = response.articles[i].title;
      descriptionFN = response.articles[i].description;
      imageFN = response.articles[i].urlToImage;
      urlFN = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlFN +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageFN +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topFN +
          "</h4><p id='newsDescription'>" +
          descriptionFN +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("FOX News!");
  });
});

$("#submitNBC").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var NBCqueryURL = "https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: NBCqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topNBC = response.articles[i].title;
      descriptionNBC = response.articles[i].description;
      imageNBC = response.articles[i].urlToImage;
      urlNBC = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlNBC +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageNBC +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topNBC +
          "</h4><p id='newsDescription'>" +
          descriptionNBC +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("NBC News!");
  });
});

$("#submitNYT").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var NYTqueryURL = "https://newsapi.org/v2/top-headlines?sources=the-new-york-times&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: NYTqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topNYT = response.articles[i].title;
      descriptionNYT = response.articles[i].description;
      imageNYT = response.articles[i].urlToImage;
      urlNYT = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlNYT +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageNYT +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topNYT +
          "</h4><p id='newsDescription'>" +
          descriptionNYT +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("The New York Times!");
  });
});

$("#submitCNBC").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var CNBCqueryURL = "https://newsapi.org/v2/top-headlines?sources=cnbc&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: CNBCqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topCNBC = response.articles[i].title;
      descriptionCNBC = response.articles[i].description;
      imageCNBC = response.articles[i].urlToImage;
      urlCNBC = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlCNBC +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageCNBC +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topCNBC +
          "</h4><p id='newsDescription'>" +
          descriptionCNBC +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("CNBC News!");
  });
});

$("#submitMSNBC").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var MSNBCqueryURL = "https://newsapi.org/v2/top-headlines?sources=msnbc&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({
    url: MSNBCqueryURL,
    method: "GET"
  }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topMSNBC = response.articles[i].title;
      descriptionMSNBC = response.articles[i].description;
      imageMSNBC = response.articles[i].urlToImage;
      urlMSNBC = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlMSNBC +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageMSNBC +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topMSNBC +
          "</h4><p id='newsDescription'>" +
          descriptionMSNBC +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("MSNBC News!");
  });
});

$("#submitReuters").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var ReutersqueryURL = "https://newsapi.org/v2/top-headlines?sources=reuters&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({ url: ReutersqueryURL, method: "GET" }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topReuters = response.articles[i].title;
      descriptionReuters = response.articles[i].description;
      imageReuters = response.articles[i].urlToImage;
      urlReuters = response.articles[i].url;

      $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlReuters + "' target='_blank'><img class='media-object img-rounded' src='" + imageReuters + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topReuters + "</h4><p id='newsDescription'>" + descriptionReuters + "</p></div></div>");
    }
    $("#newsTitle").append("Reuters News!");
  });
});

$("#submitReddit").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var RedditqueryURL = "https://newsapi.org/v2/top-headlines?sources=reddit-r-all&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({ url: RedditqueryURL, method: "GET" }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topReddit = response.articles[i].title;
      descriptionReddit = response.articles[i].description;
      imageReddit = response.articles[i].urlToImage;
      urlReddit = response.articles[i].url;

      $("#mediadiv").append("<div class='media'><div class='media-left'><a href='" + urlReddit + "' target='_blank'><img class='media-object img-rounded' src='" + imageReddit + "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" + topReddit + "</h4><p id='newsDescription'>" + descriptionReddit + "</p></div></div>");
    }
    $("#newsTitle").append("Reddit News!");
  });
});

$("#submitHP").on("click", function() {
  $("#topNews").empty();
  $("#newsTitle").empty();
  $("#mediadiv").empty();
  var HPqueryURL = "https://newsapi.org/v2/top-headlines?sources=the-huffington-post&apiKey=95fc06a84c3242019177b79e752121ea";
  $.ajax({ url: HPqueryURL, method: "GET" }).then(function(response) {
    for (i = 0; i < response.articles.length; i++) {
      topHP = response.articles[i].title;
      descriptionHP = response.articles[i].description;
      imageHP = response.articles[i].urlToImage;
      urlHP = response.articles[i].url;

      $("#mediadiv").append(
        "<div class='media'><div class='media-left'><a href='" +
          urlHP +
          "' target='_blank'><img class='media-object img-rounded' src='" +
          imageHP +
          "'></a></div><div class='media-body'><h4 class='media-heading' id='newsHEADING'>" +
          topHP +
          "</h4><p id='newsDescription'>" +
          descriptionHP +
          "</p></div></div>"
      );
    }
    $("#newsTitle").append("The Huffington Post!");
  });
});
// BY: sources

// responsiveness
// logo
// wells/other responsive tools
// get rid of home screen that says top news and dynamically add that. 