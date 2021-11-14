const sentence = 'hello there from lighthouse labs';

for (let i = 0; i < sentence.length; i++) { // this is animated, needs newline
  setTimeout (() => {
    process.stdout.write(sentence[i]);
  }, i * 50);
};

setTimeout(() => {
  console.log(' ');
}, sentence.length * 50);