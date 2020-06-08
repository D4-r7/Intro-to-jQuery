/*
Add id-s to the 3 blue HTML element in the HTML file
eg. id="fox-1", id="fox-2" …
Using JavaScript (written in the scripts.js file)
Change the text of the first blue box from Velox to Macrotis
Change the border color of the second from blue to purple
Change the background color of all 3 blue boxes to yellow
*/

$('#box1').text('Macrotis');
$('#box2').css('border', '5px solid purple');
$( "p[id^='box']").css('background', 'yellow');

/*Get your solution of the second exercise from the html day
Create and include a scripts.js file just like before
Add different classnames to the 4 elements in the HTML file
Let's create some variables with the following names and values:
color: purple
number: 10
word: cool
Change the background color of the first box to purple, if the color is purple
Change the text of the second
if the number is bigger than 100 to whoah, that's a big number.
otherwise just a regular number, please.
Change the text to Power of DOM of the third if the word is cool, otherwise change the fourth one
*/

let color = 'purple', number = 120, keyWord = 'cool';
if (color == 'purple') {
    $('.red').css('background', color)
    
};

if (number > 100) {
$('.yellow').text("whoah, that's a big number.")
}

else {
    $('.yellow').text("just a regular number")
};


if (keyWord == 'cool') {
    $('.turkiz').text('Power of DOM')
} 

else {

    $('.blue').text('Power of DOM')
    
};


