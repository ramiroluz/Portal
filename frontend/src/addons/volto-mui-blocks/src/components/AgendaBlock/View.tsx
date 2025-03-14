import React, {useEffect, useState} from 'react';
import {withBlockExtensions} from '@plone/volto/helpers';
import {Link} from 'react-router-dom';
import Stack from "@mui/material/Stack";
import "./style.less";
import config from '@plone/volto/registry';
import {flattenToAppURL} from '@plone/volto/helpers';

const Image = config.getComponent({name: 'Image'}).component;

const View = (props) => {
    const {data, isEditMode, className, block, classes} = props;
    const Image = config.getComponent('Image').component;
    return (
        <Stack className="agenda">
            <div className="title">
                <h2>
                    Agenda
                </h2>
                <a href="">
                    Ver todos
                    <img src="/icons/ver-todos.svg" alt="Ver todos"/>
                </a>
            </div>
            <Stack direction="row" sx={{mt: "40px", gap:"32px"}} className="mobile-flex-direction-col-reverse">
                <Stack className="flex-1" sx={{gap: "24px"}}>
                    <h3>
                        Agenda Geral da Câmara
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <div className="calendar-container">
                        <div className="calendar-header">
                            <img src="/icons/agenda-prev.svg" alt=""/>
                            <span>Outubro 2024</span>
                            <img src="/icons/agenda-next.svg" alt=""/>
                        </div>

                        <div className="day-section">
                            <div className="day-title">
                                <span>Segunda-Feira</span>
                                <span>Outubro 22, 2024</span>
                            </div>
                            <div className="event">
                                <span className="event-time">10:30am - 1:30pm</span>
                                <span className="event-dot"></span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                            </div>
                            <div className="event">
                                <span className="event-time">10:30am - 1:30pm</span>
                                <span className="event-dot"></span>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>
                        </div>

                        <div className="day-section">
                            <div className="day-title">
                                <span>Quarta-Feira</span>
                                <span>Outubro 24, 2024</span>
                            </div>
                            <div className="event">
                                <span className="event-time">Dia inteiro</span>
                                <span className="event-dot"></span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                            </div>
                            <div className="event">
                                <span className="event-time">10:30am - 1:30pm</span>
                                <span className="event-dot"></span>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>
                        </div>

                        <div className="day-section">
                            <div className="day-title">
                                <span>Sexta-Feira</span>
                                <span>Outubro 26, 2024</span>
                            </div>
                            <div className="event">
                                <span className="event-time">10:30am - 1:30pm</span>
                                <span className="event-dot"></span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</span>
                            </div>
                            <div className="event">
                                <span className="event-time">10:30am - 1:30pm</span>
                                <span className="event-dot"></span>
                                <span>Lorem ipsum dolor sit amet, consectetur</span>
                            </div>
                        </div>
                    </div>
                </Stack>
                <div className="flex-1">
                    <img src="/images/agenda.png"/>
                </div>
            </Stack>
        </Stack>
    )
};

export default withBlockExtensions(View);

