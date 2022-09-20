let story = 'I am a passionate front-end developer who is experienced in JavaScript (ES6+), HTML5, CSS3, and WordPress. I am looking for a long-term career with a groundbreaking company who values hard work and dedication. On a daily basis, I really enjoy creating applications that are understandable, fast, accessible, and visually appealing to all of its users. I am very confident in my skills and enjoy solving intractable problems. In February 2020, I moved from St. Petersburg, Russia to the United States. As a first-generation immigrant, I dealt with my fair share of adversity. With English being my second language, I found it difficult to deal with the social anxity and culture shock that comes with moving here. However, I feel that this experience has allowed me to grow into a stronger and better version of myself and will allow me to excel in anything that I do.'

let storyWords = story.split(' ');
let unnecessaryWord = 'really';
let misspelledWord = 'anxity';

count = 0;
storyWords.forEach(word => {
  return count++;
})
console.log(count);

storyWords = storyWords.filter(word => {
  return word !== unnecessaryWord;
})

storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'anxiety'
  } else {
    return word;
  }
})

console.log(storyWords.join(' '));
