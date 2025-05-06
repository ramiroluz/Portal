import React, { useEffect, useState } from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import './style.less';
import config from '@plone/volto/registry';
import Box from '@mui/material/Box';
import { Button, Card, Typography } from '@mui/material';

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
  return (
    <div className="cardsBlockBackground py-32 w-100-w background-white max-w-100">
      <div className="container">
        <h2 className="fs-24 color-dark text-center">Histórias de Curitiba</h2>
        <p className="fs-18 color-gray mb-0 text-center ff-lato">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="max-w-mobile-100vw">
          <div className="stack row mt-40 gap-32 grid-cols-3 overflow-auto-mobile child-75vw">
            <div className="item-card back card card-default position-relative">
              <div className="thumbnail">
                <img
                  src="/images/memoria/nossa-memoria-1.png"
                  alt=""
                  className="aspect-ratio-358-537"
                />
              </div>
              <div className="content stack flex-between gap-24 flex-column ">
                <h3 className="color-white ff-lato fs-20 fw-400">
                  Especial de Halloween: caça às bruxas em Curitiba é tema do
                  CMC Podcasts
                </h3>
                <Button>
                  Veja mais
                  <img src="/icons/ver-mais-background.svg" alt="Ver mais" />
                </Button>
              </div>
            </div>
            <div className="item-card back card card-default position-relative">
              <div className="thumbnail">
                <img
                  src="/images/memoria/nossa-memoria-2.png"
                  alt=""
                  className="aspect-ratio-358-537"
                />
              </div>
              <div className="content stack flex-between gap-24 flex-column ">
                <h3 className="color-white ff-lato fs-20 fw-400">
                  Participação popular na política I: três marcos decisivos na
                  história de Curitiba
                </h3>
                <Button>
                  Veja mais
                  <img src="/icons/ver-mais-background.svg" alt="Ver mais" />
                </Button>
              </div>
            </div>
            <div className="item-card back card card-default position-relative">
              <div className="thumbnail">
                <img
                  src="/images/memoria/nossa-memoria-2.png"
                  alt=""
                  className="aspect-ratio-358-537"
                />
              </div>
              <div className="content stack flex-between gap-24 flex-column ">
                <h3 className="color-white ff-lato fs-20 fw-400">
                  Participação popular na política II: a luta pela Emancipação
                  do Paraná
                </h3>
                <Button>
                  Veja mais
                  <img src="/icons/ver-mais-background.svg" alt="Ver mais" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-center mt-40 mb-16">
          <a href="" className="button button-secondary">
            Visite nossas memórias
          </a>
        </div>
      </div>
    </div>
  );
};

export default withBlockExtensions(View);
