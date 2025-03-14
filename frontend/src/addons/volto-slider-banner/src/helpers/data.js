import config from '@plone/volto/registry';

export async function getOembed(href) {
  const corsProxy = config.settings.corsProxy;
  const endpoint = encodeURI(`https://speakerdeck.com/oembed.json?url=${href}`);
  const url = `${corsProxy}${endpoint}`;
  const result = fetch(url, { mode: 'cors' }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw response;
    }
  });
  return result;
}
