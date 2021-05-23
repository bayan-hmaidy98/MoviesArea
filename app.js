let userName = prompt ("What is your name?")
console.log (userName)
let movieGenre = prompt ("What is you Favourite Genre? (Comedy, Drama, Horror)")
console.log (movieGenre)
let waveType = prompt ("What is your favourite wave os cinema? (Asian, French, Classic)")
console.log (waveType)
let watchingWay = prompt ("How do you prefer to watch movies? (Alone, With a friend, In cinema) ")
console.log (watchingWay)

if (movieGenre == "comedy")
{ var mgAnswer = " Comedy Movies are the best to watch in all modes."}
else if (movieGenre == "drama")  
{ var mgAnswer = " Drama movies are the best option when you are with a caompany who loves drama movies too!" }
else if (movieGenre == "horror")
{ var mgAnswer = " horror movies are not preferred when you are alone. :(" }

if (waveType == "asian")
{var wtAnswer = " Go and check our list for asian wave! "}
else if (waveType == "french" ||  waveType == "classic")
{var wtAnswer = " Our team is working to make a list for your Favourite wave! "}

alert ('Welcome ' + userName + '.' + mgAnswer + wtAnswer + " DO Not Hasitate to check our article about people watching modes! " )