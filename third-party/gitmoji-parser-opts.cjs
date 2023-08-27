/* eslint-disable import/no-extraneous-dependencies */
const {
  gitmojiCodeRegex,
  gitmojiUnicodeRegex,
  emojiRegex,
} = require('@gitmoji/gitmoji-regex');

const gitmojiCodeStr = gitmojiCodeRegex.source;
const gitmojiUnicodeStr = gitmojiUnicodeRegex.source;
const emojiStr = emojiRegex.source;

module.exports = {
  // Test URL: https://regex101.com/r/gYkG99/1
  headerPattern: new RegExp(
    `^(?:${gitmojiCodeStr}|(?:${gitmojiUnicodeStr})|(?:${emojiStr}))\\s(?<type>\\w*-?\\w*)(?:\\((?<scope>.*)\\))?!?:\\s(?<subject>(?:(?!#).)*(?:(?!\\s).))(?:\\s\\(?(?<ticket>#\\d*)\\)?)?$`
  ),
  headerCorrespondence: ['type', 'scope', 'subject', 'ticket'],
};
