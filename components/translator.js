const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

class Translator {
  americanToBritish(text) {
    let translatedText = text;

    // Replace American-only words with British equivalents
    for (const [american, british] of Object.entries(americanOnly)) {
      const regex = new RegExp(`\\b${american}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${british}</span>`
      );
    }

    // Replace American to British spelling
    for (const [american, british] of Object.entries(
      americanToBritishSpelling
    )) {
      const regex = new RegExp(`\\b${american}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${british}</span>`
      );
    }

    // Replace American to British titles
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
      const regex = new RegExp(`\\b${american} `, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${capitalize(british)}</span> `
      );
    }

    // Replace American to British time format
    const timeRegex = /(\d{1,2})(?::(\d{2}))/g;
    translatedText = translatedText.replace(timeRegex, (match, p1, p2) => {
      return `<span class="highlight">${p1}.${p2}</span>`;
    });

    return translatedText;
  }
  britishToAmerican(text) {
    let translatedText = text;

    // Replace British-only words with American equivalents
    for (const [british, american] of Object.entries(britishOnly)) {
      const regex = new RegExp(`(?<!-)\\b${british}\\b(?!-)`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${american}</span>`
      );
    }

    // Replace British to American spelling
    for (const [american, british] of Object.entries(
      americanToBritishSpelling
    )) {
      const regex = new RegExp(`\\b${british}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${american}</span>`
      );
    }

    // Replace British to American titles
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
      const regex = new RegExp(`\\b${british}\\b`, "gi");
      translatedText = translatedText.replace(
        regex,
        `<span class="highlight">${capitalize(american)}</span>`
      );
    }

    // Replace British to American time format
    const timeRegex = /(\d{1,2})(?:\.(\d{2}))/g;
    translatedText = translatedText.replace(timeRegex, (match, p1, p2) => {
      return `<span class="highlight">${p1}:${p2}</span>`;
    });

    return translatedText;
  }
}

module.exports = Translator;
