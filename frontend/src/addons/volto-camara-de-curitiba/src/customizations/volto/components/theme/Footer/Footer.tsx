import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import {Button, Typography} from "@mui/material";
import {Link} from "react-router-dom";

const Footer = () => {
    return <Stack className="footer-ind">
        <Stack className="pesquisa">
            <div className="container">
                <Stack direction="row" sx={{gap: "48px"}} alignItems="center" justifyContent="center"
                       className="mobile-flex-direction-col">
                    <div className="info">
                        <h2>
                            Foi fácil encontrar o que buscava?
                        </h2>
                        <p>
                            Agradecemos sua participação.
                        </p>
                    </div>
                    <div className="flex-buttons">
                        <Button className="button-primary">
                            Sim
                        </Button>
                        <Button className="button-secondary">
                            Não
                        </Button>
                    </div>
                </Stack>
            </div>
        </Stack>
        <Stack className={"footer-stack"}>
            <div className="container">
                <div className="stack row flex-between gap-16 stack-footer">
                    <Stack className="column min-w-224" sx={{gap: "17px"}}>
                        <img src="/logo-footer.svg" alt="Logo CMC" className="max-w-150"/>
                        <Typography>
                            © 2025
                        </Typography>
                        <Link to="/">
                            Termos de privacidade
                        </Link>
                        <Stack direction="row" sx={{"gap": "16px"}}>
                            <a href="">
                                <img src="/icons/instagram.svg" alt="Instagram da Câmara de Curitiba"/>
                            </a>
                            <a href="">
                                <img src="/icons/facebook.svg" alt="Facebook da Câmara de Curitiba"/>
                            </a>
                            <a href="">
                                <img src="/icons/linkedin.svg" alt="Linkedin da Câmara de Curitiba"/>
                            </a>
                        </Stack>
                    </Stack>
                    <Stack className="column a-menus" sx={{gap: "6px"}}>
                        <h3 className="fs-16 fw-700 text-white">Institucional</h3>
                        <a href="">
                            Fale com a Câmara
                        </a>
                        <a href="">
                            Agenda de Atividades
                        </a>
                        <a href="">
                            Visite a CMC
                        </a>
                        <a href="">
                            Visite a CMCEs
                        </a>
                        <a href="">
                            Estrutura organizacional
                        </a>
                        <a href="">
                            Mesa Diretora
                        </a>
                        <a href="">
                            Corregedoria
                        </a>
                        <a href="">
                            Escola do Legislativo
                        </a>
                        <a href="">
                            Procuradoria da Mulher
                        </a>
                        <a href="">
                            Concurso público
                        </a>
                        <a href="">
                            Programa de Estágio
                        </a>
                        <a href="">
                            Ouvidoria
                        </a>
                        <a href="">
                            Planejamento estratégico
                        </a>
                        <a href="">
                            Tour Virtual
                        </a>
                        <a href="">
                            Atendimento da Defensoria Pública
                        </a>
                        <a href="" className="bold">
                            Serviços Internos
                        </a>
                    </Stack>

                    <Stack className="column a-menus" sx={{gap: "6px"}}>
                        <h3 className="fs-16 fw-700 text-white">Transparência</h3>
                        <a href="">
                            Portal da Transparência
                        </a>
                        <a href="">
                            Acesso à informação (SIC)
                        </a>
                        <a href="">
                            Perguntas frequentes
                        </a>
                        <a href="">
                            Receitas e despesas
                        </a>
                        <a href="">
                            Servidores públicos
                        </a>
                        <a href="">
                            Compras e licitações
                        </a>
                        <a href="">
                            Contas municipais
                        </a>
                        <a href="">
                            Controladoria do Legislativo
                        </a>
                        <a href="">
                            Prestação de contas
                        </a>
                        <a href="">
                            CMC Explica
                        </a>
                        <a href="">
                            LGPD
                        </a>
                        <a href="">
                            Radar da Transparência pública
                        </a>
                    </Stack>

                    <Stack className="column a-menus" sx={{gap: "6px"}}>
                        <h3 className="fs-16 fw-700 text-white">Vereadores</h3>
                        <a href="">
                            Quem são
                        </a>
                        <a href="">
                            Lideranças e blocos parlamentares
                        </a>
                        <a href="">
                            Colégio de Líderes
                        </a>
                        <a href="">
                            Frentes parlamentares
                        </a>
                        <a href="">
                            Listas de presença
                        </a>
                        <a href="">
                            Representação externa
                        </a>
                        <a href="">
                            Eleições 2016
                        </a>
                        <a href="">
                            Eleições 2020
                        </a>
                    </Stack>

                    <Stack className="column a-menus" sx={{gap: "6px"}}>
                        <h3 className="fs-16 fw-700 text-white">Atividade Parlamentar</h3>
                        <a href="">
                            Projetos de lei
                        </a>
                        <a href="">
                            Requerimentos
                        </a>
                        <a href="">
                            Comissões permanentes
                        </a>
                        <a href="">
                            Comissões temporárias
                        </a>
                        <a href="">
                            Conselho de ética e Decoro Parlamentar
                        </a>
                        <a href="">
                            Audiência públicas
                        </a>
                        <a href="">
                            Tribunas Livres
                        </a>
                        <a href="">
                            Sessões Solenes
                        </a>
                        <a href="">
                            Orçamento da Cidade
                        </a>
                        <a href="">
                            Legislação
                        </a>
                        <a href="">
                            Agora é lei
                        </a>
                        <a href="">
                            Banco de Ideias Legislativas
                        </a>
                    </Stack>

                    <Stack className="column a-menus" sx={{gap: "6px"}}>
                        <h3 className="fs-16 fw-700 text-white">Informação</h3>
                        <a href="">
                            Notícias
                        </a>
                        <a href="">
                            Curitiba Decide
                        </a>
                        <a href="">
                            Mídias sociais
                        </a>
                        <a href="">
                            Assessoria de imprensa
                        </a>
                        <a href="">
                            Banco de imagens
                        </a>
                        <a href="">
                            Projetos especiais
                        </a>
                        <a href="">
                            Nossa Memória
                        </a>
                        <a href="">
                            Dicionário do Legislativo
                        </a>
                        <a href="">
                            Carta de Serviços
                        </a>
                        <a href="">
                            Avaliações de satisfação
                        </a>
                        <a href="">
                            Painel de atividades legislativas
                        </a>
                    </Stack>
                </div>
            </div>
        </Stack>
    </Stack>
}

export default Footer;
