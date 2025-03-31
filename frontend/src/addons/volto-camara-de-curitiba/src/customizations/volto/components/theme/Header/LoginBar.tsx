import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import config from '@plone/volto/registry';
import { useSelector, shallowEqual } from 'react-redux';
import AccessLoginIcon from "./Icons/AccessLoginIcon";

const LoginBar = () => {
    const token = useSelector((state) => state.userSession.token, shallowEqual);
    const content = useSelector((state) => state.content.data, shallowEqual);

    const { settings } = config;
    return (
        !token && (
            <Menu pointing secondary floated="right" className="menu-camara">
                <Menu.Item>
                    <Link
                        aria-label="login"
                        to={`/login${
                            content?.['@id']
                                ? `?return_url=${flattenToAppURL(content['@id'])}`
                                : ''
                        }`}
                    >
                        <AccessLoginIcon />
                        Acessar
                    </Link>
                </Menu.Item>
            </Menu>
        )
    );
};

export default LoginBar;

LoginBar.propTypes = {
    token: PropTypes.string,
    content: PropTypes.shape({
        '@id': PropTypes.string,
    }),
};

LoginBar.defaultProps = {
    token: null,
    content: {
        '@id': null,
    },
};
