import React from "react";
import {Link} from "react-router-dom";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import ContrastCircleIcon from "./Icons/ContrastCircleIcon";
import ExposurePlusIcon from "./Icons/ExposurePlusIcon";
import SignLanguageOutlinedIcon from "@mui/icons-material/SignLanguageOutlined";
import MenuIcon from "./Icons/MenuIcon";
import SearchBar from "./SearchBar";
import LoginBar from "./LoginBar";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.lastScrollY = 0;
        this.state = {
            isClient: false, // Verifica se está no cliente (SSR fix)
        };
    }

    componentDidMount() {
        this.setState({isClient: true}); // Agora temos acesso ao `window`
    }

    componentWillUnmount() {
    }


    render() {
        const {pathname} = this.props;

        if (!this.state.isClient) {
            return <div className="header-placeholder"/>; // Evita erro no SSR antes do mount
        }

        return (
            <div className="stack">
                {/* Header Top */}
                <div className="header-top">
                    <div className="container-base container">
                        <div className="stack row flex-between py-16">
                            <div className="stack row gap-16">
                                <a className="link-flex">
                                    <AccessibleForwardIcon className="icon"/>
                                    Acessibilidade
                                </a>
                                <a className="link-flex">
                                    <ContrastCircleIcon className="icon"/>
                                    Contraste
                                </a>
                                <a className="link-flex">
                                    <ExposurePlusIcon className="icon"/>
                                    Aumentar letras
                                </a>
                                <a className="link-flex">
                                    <SignLanguageOutlinedIcon className="icon"/>
                                    Vlibras
                                </a>
                            </div>
                            <div className="stack row align-items-center gap-24">
                                <SearchBar/>
                                <LoginBar/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Header Principal */}
                <div className="stack background-primary">
                    <div className="container-base header py-16 w-100 fadeIn">
                        <div className="stack row align-items-center flex-between">
                            <a href="#" className="d-sm-block d-none mr-0">
                                <img src="/icons/acessibilidade.svg" alt="Acessibilidade"/>
                            </a>
                            <div className="stack row gap-24">
                                <a className="link-flex menu d-mb-none" href="#">
                                    <MenuIcon/>
                                    MENU
                                </a>
                                <Link to="/" alt="Página Inicial">
                                    <img src="/camara-curitiba.png" alt="" className="logo-camara"/>
                                </Link>
                            </div>
                            <a href="#" className="menu-mobile">
                                <img src="/icons/menu-mobile.svg" alt="Menu mobile"/>
                            </a>
                            <div className="links-menu row align-items-center gap-8 d-mb-none stack">
                                <p className="fs-16 fw-600 text-white mb-0">Destaques:</p>
                                <Link to="/">Fale com a Câmara</Link>
                                <svg width="2" height="13" viewBox="0 0 2 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.728 0.356445V12.3564H0.936V0.356445H1.728Z" fill="white"/>
                                </svg>
                                <Link to="/">Portal da Transparência</Link>
                                <svg width="2" height="13" viewBox="0 0 2 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.728 0.356445V12.3564H0.936V0.356445H1.728Z" fill="white"/>
                                </svg>
                                <Link to="/">Colégio de Líderes</Link>
                                <svg width="2" height="13" viewBox="0 0 2 13" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.728 0.356445V12.3564H0.936V0.356445H1.728Z" fill="white"/>
                                </svg>
                                <Link to="/">Eleições 2020</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu Bottom Mobile */}
                <div className="fadeIn menu-bottom-mobile stack row">
                    <Link to="/" className={pathname === "" ? "flex-1 act" : "flex-1"}>
                        <img src="/icons/menu/home.svg" alt="Home"/>
                        Home
                    </Link>
                    <Link to="/noticias" className={pathname === "/noticias" ? "flex-1 act" : "flex-1"}>
                        <img src="/icons/menu/news.svg" alt="Home"/>
                        Notícias
                    </Link>
                    <Link to="/vereadores" className={pathname === "/vereadores" ? "flex-1 act" : "flex-1"}>
                        <img src="/icons/menu/vereadores.svg" alt="Home"/>
                        Vereadores
                    </Link>
                    <a href="#" className="flex-1">
                        <img src="/icons/menu/projetos-de-lei.svg" alt="Home"/>
                        Projeto de Lei
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
