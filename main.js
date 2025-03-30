// function solution(string) {
//   //Using regular expression you can setup a lookahead assertion to check if the following char is uppercase and insert a space when it is
//   return string.replace(/(?=[A-Z])/g, " ");
// }

//Using regular expression you can setup a lookahead assertion to check if the following char is uppercase and insert a space when it is
solution = string => string.replace(/(?=[A-Z])/g, " ");