import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import SpeakerdeckView from './DefaultView';

const SpeakerdeckBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <SpeakerdeckView {...data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(SpeakerdeckBlockView);
