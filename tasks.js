
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
   if (text === 'quit\n' || text === 'exit\n') {
     text = text.replace('\n','');
     var split = text.trim().split(' ');}
   if (split[0] === 'quit' || split[0] === 'exit') {
    quit();
  }

  else if(text === 'hello\n'){
    hello();}
  else if(split[0] === 'hello'){
      hello(split[1]);
  }
  else if(text === 'help\n'){}
  else if (split[0] === 'help'){
    help();
  }

  else{
    unknownCommand(text);
  }
}
  




/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 * @param {string } x the name beside hello
 * @returns {void}
 */
function hello(){
  console.log('hello!')
function hello(x){
  console.log('hello ' + x + '!');
}
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/** 
 * @returns {void}
*/
 function help(){
   console.log('  hello  --Says hello\n')
   console.log('  help  --Lists all the possible commands\n')
   console.log('  quit  --Exits the application\n')
 }


// The following line starts the application
startApp("Dalia Dandashi")
