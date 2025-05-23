import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Input } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { getNavroot } from '@plone/volto/actions/navroot/navroot';
import { hasApiExpander } from '@plone/volto/helpers/Utils/Utils';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import Icon from '@plone/volto/components/theme/Icon/Icon';
import zoomSVG from '@plone/volto/icons/zoom.svg';
import Stack from '@mui/material/Stack';
import SearchIcon from './Icons/SearchIcon';
import { Button } from '@mui/material';

const messages = defineMessages({
  search: {
    id: 'Search',
    defaultMessage: 'Search',
  },
  searchSite: {
    id: 'Search Site',
    defaultMessage: 'Search Site',
  },
});

const SearchBar = (props) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [text, setText] = useState('');
  const history = useHistory();
  const onChangeText = (event, { value }) => {
    setText(value);
  };
  const pathname = props.pathname;
  const onSubmit = (event) => {
    const path =
      pathname?.length > 0 ? `&path=${encodeURIComponent(pathname)}` : '';

    history.push(`./search?SearchableText=${encodeURIComponent(text)}${path}`);
    // reset input value
    setText('');
    event.preventDefault();
  };

  const navroot = useSelector((state) => state.navroot?.data);
  useEffect(() => {
    if (!hasApiExpander('navroot', getBaseUrl(pathname))) {
      dispatch(getNavroot(getBaseUrl(pathname)));
    }
  }, [dispatch, pathname]);

  return (
    <Form action={`${navroot?.navroot?.['@id']}/search`} onSubmit={onSubmit}>
      <Form.Field>
        <Stack className="search-input-mui" direction="row" alignItems="center">
          <Button
            sx={{ px: 1 }}
            aria-label={intl.formatMessage(messages.search)}
            className={'button'}
          >
            <SearchIcon />
          </Button>
          <Input
            aria-label={intl.formatMessage(messages.search)}
            onChange={onChangeText}
            name="SearchableText"
            value={text}
            transparent
            autoComplete="off"
            placeholder={'Buscar'}
            title={intl.formatMessage(messages.search)}
          />
        </Stack>
      </Form.Field>
    </Form>
  );
};

export default SearchBar;
