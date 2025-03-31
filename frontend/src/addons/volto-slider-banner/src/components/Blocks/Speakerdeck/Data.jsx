import React, { useEffect, useState } from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { isValidSpeakerdeckUrl } from '../../../helpers/validator';
import { getOembed } from '../../../helpers/data';
import { speakerdeckSchema } from './schema';
import { useIntl } from 'react-intl';

const SpeakerdeckBlockData = (props) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const [href, setHref] = useState(data.href ? data.href : '');

  useEffect(() => {
    const current = data.href ? data.href[0]['@id'] : '';
    const newValue = href ? href[0]['@id'] : '';
    if (newValue && current !== newValue) {
      getOembed(newValue).then((oembed) => {
        onChangeBlock(block, {
          ...data,
          href: href,
          speakerdeckOembed: oembed,
        });
      });
    }
  }, [href, data, block, onChangeBlock]);

  const intl = useIntl();
  const schema = speakerdeckSchema({ ...props, intl });
  const onChangeField = (id, value) => {
    if (id === 'href' && value !== '') {
      if (value && isValidSpeakerdeckUrl(value[0]['@id'])) {
        setHref(value);
      }
    } else {
      onChangeBlock(block, {
        ...data,
        [id]: value,
      });
    }
  };

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default SpeakerdeckBlockData;
