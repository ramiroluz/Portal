import React, { useEffect, useState } from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import './style.less';
import config from '@plone/volto/registry';
import Box from '@mui/material/Box';
import { Button, Card, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { flattenToAppURL } from '@plone/volto/helpers/Url/Url';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="box"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: '40px' }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const View = (props) => {
  const { data, isEditMode, className, block, classes } = props;
  const Image = config.getComponent('Image').component;

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (data?.links?.length > 0)
    return (
      <div className="bannerCarousel py-32">
        <div className="container">
          <Carousel
            responsive={responsive}
            showDots={data?.links?.length > 1}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {data?.links?.map((z) => (
              <Link
                to={
                  z?.link?.length > 0 ? flattenToAppURL(z?.link[0].getURL) : ''
                }
                onClick={(e) => {
                  isEditMode ? e.preventDefault() : '';
                }}
                className="banner-top"
              >
                {z?.image && (
                  <Image
                    className="w-100 h-auto aspect-ratio-1116-200"
                    loading="lazy"
                    src={z?.image + '/@@images/image'}
                  />
                )}
              </Link>
            ))}
          </Carousel>
        </div>
      </div>
    );

  return isEditMode && <div>Adicione banners</div>;
};

export default withBlockExtensions(View);
