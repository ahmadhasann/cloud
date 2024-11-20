
function randomQuotes() {


var userName = ['-- Oscar Wilde' , '-- Marilyn Monroe ', '--Frank Zappa' , '--Albert Einstein' , '--Marcus Tullius Cicero'] ;
var Ouotes   = ['“Be yourself; everyone else is already taken.”' ,'“ Iam selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”' ,'“So many books, so little time.”','“Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.”' ,'“A room without books is like a body without a soul.”' ] ;

var num = Math.floor ( Math.random() * userName.length);
document.getElementById ('TEXT').innerHTML = (Ouotes[ num ]  +  "   <br>    "+  userName[ num ]) ; 


}