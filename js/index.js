$(document).ready(function() {
  var r_quote;
  var r_num;
  var ra;
  var rq;

  newQuote(); //a random quote will be displayed on document load

  // function to select random quote from an array of objects(quotes and author name)
  function newQuote() {
    
    r_quote = [
      {
        quote:
          "One day you'll wake up and find that you have outlived the pain",
        author: "Faraway"
      },

      {
        quote:
          "Sometimes you fall down because there is something down there that you are supposed to find",
        author: "Anonymous"
      },

      {
        quote:
          "The simple things are also the most extraordinary things, and only the wise can see them.",
        author: "Paulo Coelho, The Alchemist"
      },

      {
        quote:
          "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        author: " Douglas Adams, The Long Dark Tea-Time of the Soul"
      },
        {
       quote:' “The power of imagination makes us infinite.”',
         author: "John Muir"
        },
      {
       quote: '“In teaching others we teach ourselves.”',
         author: "Anonymous"
        },
      {
       quote: '“Don’t regret the past, just learn from it.”',
         author: "Ben Ipock"
        },
      {
       quote: '“It does not matter how slowly you go as long as you do not stop.”',
         author: "Confucius"
        },
      {
       quote: '“I hear and I forget, I see and I remember. I do and I understand.”',
         author: "Anonymous"
        },
      {
       quote: '“Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.”',
         author: "Samuel Beckett"
        },
      {
       quote: '“An obstacle is often a stepping stone.”',
         author: " Prescott Bush"
        }
    ];

    r_num = Math.floor(Math.random() * r_quote.length);
    rq = r_quote[r_num].quote;
    ra = r_quote[r_num].author;
    
    $(".blockquote").fadeOut();

   
    $("#getquote").text(rq);
    $("#getauthor").text(ra);
    
    $(".blockquote").fadeIn();

  }
  //****************************************************************************************

  $("#share").on("click", function() {
    window.open(
      "https://twitter.com/intent/tweet?text=" + rq + " - " + ra + "",
      "mywindow",
      "menubar=1,resizable=1,width=350,height=250"
    );
  });
  // getting a randomquote by calling a function on btn click
  $("#getanotherquote").on("click", function() {
    newQuote();
    console.log(r_num);
  });
});