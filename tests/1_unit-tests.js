const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
  test('Translate "Mangoes are my favorite fruit." to British English', function () {
    const translation = translator.americanToBritish(
      "Mangoes are my favorite fruit."
    );
    assert.equal(
      translation,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });

  test('Translate "I ate yogurt for breakfast." to British English', function () {
    const translation = translator.americanToBritish(
      "I ate yogurt for breakfast."
    );
    assert.equal(
      translation,
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });

  test('Translate "We had a party at my friend\'s condo." to British English', function () {
    const translation = translator.americanToBritish(
      "We had a party at my friend's condo."
    );
    assert.equal(
      translation,
      'We had a party at my friend\'s <span class="highlight">flat</span>.'
    );
  });

  test('Translate "Can you toss this in the trashcan for me?" to British English', function () {
    const translation = translator.americanToBritish(
      "Can you toss this in the trashcan for me?"
    );
    assert.equal(
      translation,
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
  });

  test('Translate "The parking lot was full." to British English', function () {
    const translation = translator.americanToBritish(
      "The parking lot was full."
    );
    assert.equal(
      translation,
      'The <span class="highlight">car park</span> was full.'
    );
  });

  test("Like a hightech Rube Goldberg machine.", function () {
    const translation = translator.americanToBritish(
      "Like a hightech Rube Goldberg machine."
    );
    assert.equal(
      translation,
      'Like a hightech <span class="highlight">Heath Robinson device</span>.'
    );
  });

  test('Translate "To play hooky means to skip class or work." to British English', function () {
    const translation = translator.americanToBritish(
      "To play hooky means to skip class or work."
    );
    assert.equal(
      translation,
      'To <span class="highlight">bunk off</span> means to skip class or work.'
    );
  });

  test('Translate "No Mr. Bond, I expect you to die." to British English', function () {
    const translation = translator.americanToBritish(
      "No Mr. Bond, I expect you to die."
    );
    assert.equal(
      translation,
      'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    );
  });

  test('Translate "Dr. Grosh will see you now." to British English', function () {
    const translation = translator.americanToBritish(
      "Dr. Grosh will see you now."
    );
    assert.equal(
      translation,
      '<span class="highlight">Dr</span> Grosh will see you now.'
    );
  });

  test('Translate "Lunch is at 12:15 today." to British English', function () {
    const translation = translator.americanToBritish(
      "Lunch is at 12:15 today."
    );
    assert.equal(
      translation,
      'Lunch is at <span class="highlight">12.15</span> today.'
    );
  });

  test('Translate "We watched the footie match for a while." to American English', function () {
    const translation = translator.britishToAmerican(
      "We watched the footie match for a while."
    );
    assert.equal(
      translation,
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });

  test('Translate "Paracetamol takes up to an hour to work." to American English', function () {
    const translation = translator.britishToAmerican(
      "Paracetamol takes up to an hour to work."
    );
    assert.equal(
      translation,
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
  });

  test('Translate "First, caramelise the onions." to American English', function () {
    const translation = translator.britishToAmerican(
      "First, caramelise the onions."
    );
    assert.equal(
      translation,
      'First, <span class="highlight">caramelize</span> the onions.'
    );
  });

  test('Translate "I spent the bank holiday at the funfair." to American English', function () {
    const translation = translator.britishToAmerican(
      "I spent the bank holiday at the funfair."
    );
    assert.equal(
      translation,
      'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
    );
  });

  test('Translate "I had a bicky then went to the chippy." to American English', function () {
    const translation = translator.britishToAmerican(
      "I had a bicky then went to the chippy."
    );
    assert.equal(
      translation,
      'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
    );
  });

  test('Translate "I\'ve just got bits and bobs in my bum bag." to American English', function () {
    const translation = translator.britishToAmerican(
      "I've just got bits and bobs in my bum bag."
    );
    assert.equal(
      translation,
      'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
    );
  });

  test('Translate "The car boot sale at Boxted Airfield was called off." to American English', function () {
    const translation = translator.britishToAmerican(
      "The car boot sale at Boxted Airfield was called off."
    );
    assert.equal(
      translation,
      'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
    );
  });

  test('Translate "Have you met Mrs Kalyani?" to American English', function () {
    const translation = translator.britishToAmerican(
      "Have you met Mrs Kalyani?"
    );
    assert.equal(
      translation,
      'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    );
  });

  test('Translate "Prof Joyner of King\'s College, London." to American English', function () {
    const translation = translator.britishToAmerican(
      "Prof Joyner of King's College, London."
    );
    assert.equal(
      translation,
      '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    );
  });

  test('Translate "Tea time is usually around 4 or 4.30." to American English', function () {
    const translation = translator.britishToAmerican(
      "Tea time is usually around 4 or 4.30."
    );
    assert.equal(
      translation,
      'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
    );
  });

  test('Highlight the text that was actually translated in "Mangoes are my favorite fruit." to British English', function () {
    const translation = translator.americanToBritish(
      "Mangoes are my favorite fruit."
    );
    assert.equal(
      translation,
      'Mangoes are my <span class="highlight">favourite</span> fruit.'
    );
  });

  test('Highlight the text that was actually translated in "I ate yogurt for breakfast." to British English', function () {
    const translation = translator.americanToBritish(
      "I ate yogurt for breakfast."
    );
    assert.equal(
      translation,
      'I ate <span class="highlight">yoghurt</span> for breakfast.'
    );
  });

  test('Highlight the text that was actually translated in "We watched the footie match for a while." to American English', function () {
    const translation = translator.britishToAmerican(
      "We watched the footie match for a while."
    );
    assert.equal(
      translation,
      'We watched the <span class="highlight">soccer</span> match for a while.'
    );
  });

  test('Highlight the text that was actually translated in "Paracetamol takes up to an hour to work." to American English', function () {
    const translation = translator.britishToAmerican(
      "Paracetamol takes up to an hour to work."
    );
    assert.equal(
      translation,
      '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    );
  });
});
