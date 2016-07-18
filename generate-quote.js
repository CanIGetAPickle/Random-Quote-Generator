function formatQuote(response) {
    document.getElementById("quote").innerHTML = response.quoteText;

    if (response.quoteAuthor === "") {
        document.getElementById("author").innerHTML = "— Unknown Author";
        $('#tweet-this').attr("href", 'https://twitter.com/intent/tweet?text="' + escape(response.quoteText) + '" — Unknown');
    } else {
        document.getElementById("author").innerHTML = "— " + response.quoteAuthor;
        $('#tweet-this').attr("href", 'https://twitter.com/intent/tweet?text="' + escape(response.quoteText) + '" — ' + response.quoteAuthor);
    }
}

var generateNewQuote = function() {
    $('#quote-text').fadeOut(500, function() {
        $.ajax({
            url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=formatQuote&lang=en',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'jsonp'
        });
    });

    $('#quote-text').fadeIn(500);
}

$(document).ready(function() {
    generateNewQuote();
    $('#new-quote-button').click(generateNewQuote);
});