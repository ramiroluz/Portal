import React, {useEffect, useState} from 'react';
import {withBlockExtensions} from '@plone/volto/helpers';
import {Link} from 'react-router-dom';
import Stack from "@mui/material/Stack";
import "./style.less";
import config from '@plone/volto/registry';
import {flattenToAppURL} from '@plone/volto/helpers';
import {Card, Typography, Button} from "@mui/material";
import Grid from "@mui/material/Grid2";

const Image = config.getComponent({name: 'Image'}).component;

const View = (props) => {
    const {data, isEditMode, className, block, classes} = props;
    const Image = config.getComponent('Image').component;
    return (
        <div className="stack gap-24">
            <div className="card-default">
                <Stack sx={{p: "24px", gap: "16px"}} direction="column">
                    <Stack direction="row" justifyContent="flex-start">
                        <Typography className="tag" sx={{
                            backgroundColor: "var(--Support-3, #102A4D)",
                            color: "white",
                            borderRadius: "8px",
                            px: 1,
                            py: 0.5
                        }}>Legislação e Projetos de Lei</Typography>
                    </Stack>
                    <Link to="/" onClick={(e) => {
                        isEditMode ? e.preventDefault() : ""
                    }}>
                        <Typography variant="h2">
                            Flexibilização da publicidade em eventos esportivos entrará em vigor em 2025
                        </Typography>
                    </Link>
                    <Typography className="excerpt">
                        A regulamentação foi aprovada pela Câmara Municipal de Curitiba em outubro.
                    </Typography>
                    <Typography className="tags">
                        Tags: #Saúde #Vereadores #AtuaçãoParlamentar
                    </Typography>
                </Stack>
                <Stack className="thumbnail">
                    <Link to="/" onClick={(e) => {
                        isEditMode ? e.preventDefault() : ""
                    }}>
                        <img src="/images/mock/img.png" alt="" loading="lazy"/>
                    </Link>
                </Stack>
            </div>
            <Stack direction="row" sx={{gap: "24px"}}>
                <Card className="card-default small">
                    <Stack sx={{p: "24px", gap: "16px"}} direction="column">
                        <Stack direction="row" justifyContent="flex-start">
                            <Typography className="tag" sx={{
                                backgroundColor: "var(--Support-3, #B2C8D3)",
                                color: "black",
                                borderRadius: "8px",
                                px: 1,
                                py: 0.5
                            }}> Audiências Públicas e Comissões</Typography>
                        </Stack>
                        <Link to="/" onClick={(e) => {
                            isEditMode ? e.preventDefault() : ""
                        }}>
                            <Typography variant="h2">
                                Dia da Parada da Diversidade LGBTI+ de Curitiba ganha substitutivo geral
                            </Typography>
                        </Link>
                    </Stack>
                    <Stack className="thumbnail">
                        <Link to="/" onClick={(e) => {
                            isEditMode ? e.preventDefault() : ""
                        }}>
                            <img src="/images/news/news-2.png" alt="" loading="lazy"/>
                        </Link>
                    </Stack>
                </Card>
                <Card className="card-default small">
                    <Stack sx={{p: "24px", gap: "16px"}} direction="column">
                        <Stack direction="row" justifyContent="flex-start">
                            <Typography className="tag" sx={{
                                backgroundColor: "#FFAB00",
                                color: "black",
                                borderRadius: "8px",
                                px: 1,
                                py: 0.5
                            }}> Conheça os Vereadores</Typography>
                        </Stack>
                        <Link to="/" onClick={(e) => {
                            isEditMode ? e.preventDefault() : ""
                        }}>
                            <Typography variant="h2">
                                Servidores de Curitiba: reajuste de 4,42% será votado em urgência
                            </Typography>
                        </Link>
                    </Stack>
                    <Stack className="thumbnail">
                        <Link to="/" onClick={(e) => {
                            isEditMode ? e.preventDefault() : ""
                        }}>
                            <img src="/images/news/news-3.png" alt="" loading="lazy"/>
                        </Link>
                    </Stack>
                </Card>
            </Stack>
            <Stack>
                <Card className="card-default full">
                    <Stack sx={{p: "24px", gap: "24px"}}>
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Stack className="thumbnail">
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <img src="/images/news/news-4.png" alt="" loading="lazy"/>
                                </Link>
                            </Stack>
                            <Stack spacing={3}>
                                <Stack direction="row" justifyContent="flex-start">
                                    <Typography className="tag" sx={{
                                        backgroundColor: "var(--Support-3, #B2C8D3)",
                                        color: "black",
                                        borderRadius: "8px",
                                        px: 1,
                                        py: 0.5
                                    }}> Saúde e assistência social</Typography>
                                </Stack>
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <Typography variant="h2">
                                        Personalidades negras de Curitiba são homenageadas na Câmara Municipal
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <div className="divider"></div>
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Stack className="thumbnail">
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <img src="/images/news/news-5.png" alt="" loading="lazy"/>
                                </Link>
                            </Stack>
                            <Stack spacing={3}>
                                <Stack direction="row" justifyContent="flex-start">
                                    <Typography className="tag" sx={{
                                        backgroundColor: "#102A4D",
                                        color: "white",
                                        borderRadius: "8px",
                                        px: 1,
                                        py: 0.5
                                    }}> Legislação e Projetos de Lei</Typography>
                                </Stack>
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <Typography variant="h2">
                                        Curitiba vai implantar Programa Alimento Solidário daqui a seis meses
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <div className="divider"></div>
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Stack className="thumbnail">
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <img src="/images/news/news-6.png" alt="" loading="lazy"/>
                                </Link>
                            </Stack>
                            <Stack spacing={3}>
                                <Stack direction="row" justifyContent="flex-start">
                                    <Typography className="tag" sx={{
                                        backgroundColor: "#009262",
                                        color: "white",
                                        borderRadius: "8px",
                                        px: 1,
                                        py: 0.5
                                    }}>Segurança e Mobilidade Urbana</Typography>
                                </Stack>
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <Typography variant="h2">
                                        Curitiba vai implantar Programa Alimento Solidário daqui a seis meses
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <div className="divider"></div>
                        <Stack direction="row" alignItems="center" spacing={3}>
                            <Stack className="thumbnail">
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <img src="/images/news/news-7.png" alt="" loading="lazy"/>
                                </Link>
                            </Stack>
                            <Stack spacing={3}>
                                <Stack direction="row" justifyContent="flex-start">
                                    <Typography className="tag" sx={{
                                        backgroundColor: "#009262",
                                        color: "white",
                                        borderRadius: "8px",
                                        px: 1,
                                        py: 0.5
                                    }}>Segurança e Mobilidade Urbana</Typography>
                                </Stack>
                                <Link to="/" onClick={(e) => {
                                    isEditMode ? e.preventDefault() : ""
                                }}>
                                    <Typography variant="h2">
                                        Curitiba vai implantar Programa Alimento Solidário daqui a seis meses
                                    </Typography>
                                </Link>
                            </Stack>
                        </Stack>
                        <Button className="button-primary">Veja todas as matérias</Button>
                    </Stack>
                </Card>
            </Stack>
        </div>
    )
};

export default withBlockExtensions(View);

