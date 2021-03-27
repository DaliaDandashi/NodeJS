
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
   text = text.replace('\n','').trim();
     var text0 = text.substring(0,text.indexOf(' '))
     var text1 = text.substring(text.indexOf(' ')+1)
    if ( text0 === 'quit' || text0 === 'exit' || text === 'quit' || text ==='exit') {
       quit();
    }

    else if(text0 === 'hello' || text === 'hello'){
      hello(text0, text1);
    }
  
    else if (text0 === 'help' || text === 'help'){
      help();
    }
    else if(text0 === 'list' || text === 'list'){
      list();
    }
    else if(text0 === 'add' || text === 'add'){
      add(text1);
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
 * @param {string } x hello
 * @param {string } y the name beside hello
 * @returns {void}
 */
 function hello(x,y){
  console.log(x + ' ' + y +'!');
}
var tasks=['buy bread', 'do exercise']
/**
 * add new tasks
 * @param  {string} task the new task
 * @returns {void}
 */
function add(task){
  tasks.push(task);
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
   console.log('     hello              --Says hello!\n')
   console.log('     hello + name       --Says hello + name!\n')
   console.log('     help               --Lists all the possible commands\n')
   console.log('     quit/exit          --Exits the application\n')
  }
  
/**
 * Lists all tasks
 *
 * @returns {void}
 */
  function list(){
   tasks.forEach(function callback(value, index) {
    console.log(index+1 + '- [ ] ' + value);
   });
}


// The following line starts the application
startApp("Dalia Dandashi")

