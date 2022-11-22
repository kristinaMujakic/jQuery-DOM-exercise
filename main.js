// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$(function () {
  console.log('Let"s get ready to party with jQery');
});
// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').attr('class', 'image-center');

// Remove the last paragraph in the article.
$('article p:last-child').remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', Math.random() * 100);

// Add an item to the list; it can say whatever you want.
$('ol').append($('<li>', { text: 'I can say whatever I want!' }));

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().append($('<p>', { text: 'My apologies for that silly list!' }));

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('.form-control').on('click', function () {
  let red = $('.form-control').eq(0).val();
  let blue = $('.form-control').eq(1).val();
  let green = $('.form-control').eq(2).val();
  $('body').css('background-color',
    `rgb(${red},${blue},${green})`);
});

// Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function () {
  $(this).remove();
});


////////////////////////////////////////////////////////////
// Part Two - Movies App!
// Build an application that uses jQuery to do the following:

// Contains a form with two inputs for a title and rating along with a button to submit the form.
// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
// When the button to remove is clicked, remove each title and rating from the DOM.

$(function () {

  $('.form-movies').on('submit', function (evt) {
    evt.preventDefault();

    let title = $('input[type="text"]').val();
    let rating = $('input[name="rating"]').val();

    let movieData = { title, rating };
    const htmlMovieData = movieDataTable(movieData);

    $('.movies-div').append(htmlMovieData);
    $('.inputData').val('');
  });

  $('.movies-div').on('click', '.removeBtn', function (e) {
    $(e.target).closest("tr").remove();
  });
});

const movieDataTable = (data) => {
  return `
<tr>
<td>${data.title}</td>
<td>${data.rating}</td>
<td>
<button class="removeBtn">Delete</button>
</td>
</tr>
`;
};