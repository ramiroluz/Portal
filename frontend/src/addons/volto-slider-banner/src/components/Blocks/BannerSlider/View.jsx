import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import BannerSliderView from './DefaultView';

const BannerSliderBlockView = (props) => {
  const { data, isEditMode, className } = props;
  return (
    <BannerSliderView {...data} isEditMode={isEditMode} className={className} />
  );
};

export default withBlockExtensions(BannerSliderBlockView);
