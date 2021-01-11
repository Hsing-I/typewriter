const sentence = "hello there from lighthouse labs";
for(const char of sentence){
  setTimeout(() => {
    // print the char here
  console.log(char);}, 1000) 
}