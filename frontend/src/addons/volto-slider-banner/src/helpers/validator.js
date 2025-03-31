export const isValidSpeakerdeckUrl = (value) => {
  const pattern = /https:\/\/speakerdeck.com\/(\w+)\/.*/gim;

  return pattern.test(value);
};
