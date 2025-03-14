import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import BannerSliderBlockData from './Data';
import BannerSliderBlockView from './View';

const BannerSliderBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <BannerSliderBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <BannerSliderBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(BannerSliderBlockEdit);
