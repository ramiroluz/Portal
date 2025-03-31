import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';

import SpeakerdeckBlockData from './Data';
import SpeakerdeckBlockView from './View';

const SpeakerdeckBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  return (
    <>
      <SpeakerdeckBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <SpeakerdeckBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  );
};

export default withBlockExtensions(SpeakerdeckBlockEdit);
