import { isValidSpeakerdeckUrl } from './validator';

describe('Validator', () => {
  describe('isValidSpeakerdeckUrl', () => {
    it('accepts valid urls', () => {
      expect(
        isValidSpeakerdeckUrl(
          'https://speakerdeck.com/ericof/nem-tudo-e-codigo',
        ),
      ).toBe(true);
      expect(
        isValidSpeakerdeckUrl('https://speakerdeck.com/ericof/other'),
      ).toBe(true);
    });
    it('denies ivalid urls', () => {
      expect(isValidSpeakerdeckUrl('https://speakerdeck.com/ericof')).toBe(
        false,
      );
      expect(isValidSpeakerdeckUrl('https://speakerdeck.com')).toBe(false);
    });
  });
});
