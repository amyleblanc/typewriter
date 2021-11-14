const sentence = 'hello there from lighthouse labs';

for (let i = 0; i < sentence.length; i++) { // loop through sentence to access each character
  setTimeout (() => {
    process.stdout.write(sentence[i]); // print each character with a timeout...
  }, i * 50); // ...of 50 ms per character
};

setTimeout(() => { // apply a second timeout to print ' ' to the console, which forces the next command to move to a new line
  console.log(' ');
}, sentence.length * 50);