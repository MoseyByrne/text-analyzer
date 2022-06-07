// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if(!Number(element)){
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
    const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
  if (element.toLowerCase().includes(word.toLowerCase())) {
  wordCount++;
  }
  });
  return wordCount;
}

function removeOffensiveWords(text) {
  const wordArray = text.split(" ");
    let result = wordArray.filter(word => word.toLowerCase() !== "zoinks"); 
    result = result.filter(word => word.toLowerCase() !== "muppeteers");
    result = result.filter(word => word.toLowerCase() !== "biffaroni");
    result = result.filter(word => word.toLowerCase() !== "loopdaloop");
    return result;
}