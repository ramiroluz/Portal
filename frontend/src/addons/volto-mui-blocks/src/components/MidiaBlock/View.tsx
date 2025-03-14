import React, {useEffect, useState} from 'react';
import {withBlockExtensions} from '@plone/volto/helpers';
import {Link} from 'react-router-dom';
import Stack from "@mui/material/Stack";
import "./style.less";
import config from '@plone/volto/registry';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Container from "@mui/material/Container";
import {Button, Typography} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div className="box"
             role="tabpanel"
             hidden={value !== index}
             id={`simple-tabpanel-${index}`}
             aria-labelledby={`simple-tab-${index}`}
             {...other}
        >
            {value === index && <Box sx={{py: "40px"}}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const videos = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...",
        date: "Out 28, 2024 | 10:35",
        embed: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        excerpt: ""
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...",
        date: "Out 28, 2024 | 10:35",
        embed: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        excerpt: ""
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...",
        date: "Out 28, 2024 | 10:35",
        embed: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        excerpt: ""
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...",
        date: "Out 28, 2024 | 10:35",
        embed: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        excerpt: ""
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu...",
        date: "Out 28, 2024 | 10:35",
        embed: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        excerpt: ""
    }
];
const View = (props) => {
    const {data, isEditMode, className, block, classes} = props;
    const Image = config.getComponent('Image').component;

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="w-100">
            <div className="midiaBlock">
                <div className="container-block container">
                    <div className="stack flex-column-mb">
                        <div className="stack row flex-between align-items-center flex-column-mb">
                            <div className="options-midia stack row w-100 max-w-855">
                                <Button className={value === 0 ? "tab-top act" : "tab-top"} onClick={() => setValue(0)}>
                                    <img src="/icons/institucional.svg" alt=""/>
                                    CMC Podcast
                                </Button>
                                <Button className={value === 1 ? "tab-top act" : "tab-top"} onClick={() => setValue(1)}>
                                    <img src="/icons/podcast.svg" alt=""/>
                                    Institucional
                                </Button>
                                <Button className={value === 2 ? "tab-top act" : "tab-top"} onClick={() => setValue(2)}>
                                    <img src="/icons/lives.svg" alt=""/>
                                    Lives
                                </Button>
                            </div>
                            <div className="box d-mb-none">
                                <Link className="ver-mais">
                                    Ver mais
                                    <img src="/icons/chevron-link.svg"/>
                                </Link>
                            </div>
                        </div>
                        <CustomTabPanel value={value} index={0}>
                            <Stack sx={{gap: "24px"}} direction="row" className="flex-midia">
                                <Stack className="flex-2">
                                    <Stack className="video-item" spacing={2}>
                                        <div className="thumbnail">
                                            <img src="/images/midia/1.png" alt=""/>
                                            <div className="play">
                                                <img src="/icons/play.svg"/>
                                            </div>
                                        </div>
                                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna...</h3>
                                        <p>Out 28, 2024 | 10:35</p>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor
                                            incididunt ut labore et dolore magna aliqua.
                                        </p>
                                    </Stack>
                                </Stack>
                                <Stack className="flex-1 small" sx={{gap: "24px"}}>
                                    <Typography sx={{
                                        fontSize: "24px",
                                        fontFamily: "Lato, sans-serif",
                                        color: "white",
                                        fontWeight: "bold"
                                    }}>
                                        Assista a seguir
                                    </Typography>
                                    <Stack className="video-item" sx={{gap: "10px"}} direction="row"
                                           alignItems="center">
                                        <div className="thumbnail">
                                            <img src="/images/midia/1.png" alt=""/>
                                            <div className="play">
                                                <img src="/icons/play.svg"/>
                                            </div>
                                        </div>
                                        <Stack>
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore...</h3>
                                            <p>Out 28, 2024 | 10:35</p>
                                        </Stack>
                                    </Stack>
                                    <Stack className="video-item" sx={{gap: "10px"}} direction="row"
                                           alignItems="center">
                                        <div className="thumbnail">
                                            <img src="/images/midia/1.png" alt=""/>
                                            <div className="play">
                                                <img src="/icons/play.svg"/>
                                            </div>
                                        </div>
                                        <Stack>
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore...</h3>
                                            <p>Out 28, 2024 | 10:35</p>
                                        </Stack>
                                    </Stack>
                                    <Stack className="video-item" sx={{gap: "10px"}} direction="row"
                                           alignItems="center">
                                        <div className="thumbnail">
                                            <img src="/images/midia/1.png" alt=""/>
                                            <div className="play">
                                                <img src="/icons/play.svg"/>
                                            </div>
                                        </div>
                                        <Stack>
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore...</h3>
                                            <p>Out 28, 2024 | 10:35</p>
                                        </Stack>
                                    </Stack>
                                    <Stack className="video-item" sx={{gap: "10px"}} direction="row"
                                           alignItems="center">
                                        <div className="thumbnail">
                                            <img src="/images/midia/1.png" alt=""/>
                                            <div className="play">
                                                <img src="/icons/play.svg"/>
                                            </div>
                                        </div>
                                        <Stack>
                                            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor
                                                incididunt ut labore et dolore...</h3>
                                            <p>Out 28, 2024 | 10:35</p>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                            Item Two
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                            Item Three
                        </CustomTabPanel>
                    </div>
                </div>
            </div>
            </div>
    )
};

export default withBlockExtensions(View);

