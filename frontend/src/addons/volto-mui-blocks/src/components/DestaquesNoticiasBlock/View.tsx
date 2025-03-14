import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import "./style.less";
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Button, Card } from "@mui/material";

const Image = config.getComponent({ name: 'Image' }).component;

const View = (props) => {
  const { data, isEditMode, className, block, classes } = props;
  // Filtra os links que possuem conteúdo
  const links = data?.links?.filter((z) => z?.link !== undefined) || [];

  if (links.length === 0) {
    return <>Carregando...</>;
  }

  return (
    <div className="stack gap-24 news-noticia">
      <div className="container">
        <div className="stack row gap-24 flex-column-mb flex-mb">
          {/* Área principal à esquerda */}
          <div className="stack gap-24">
            {/* Destaque principal */}
            <div className="destaque destaques-home">
              {links.slice(0, 1).map((link, index) => (
                <Link key={index} className="card-default px-24 py-24" to={link?.link[0]["getPath"].replace("/Plone/", "")}>
                  <h2 className="text-black fs-32 fw-600 title-32">
                    {link?.link[0]?.title}
                  </h2>
                  <div className="thumbnail mt-16">
                    <img
                      src={flattenToAppURL(
                        link?.link[0]["getURL"] +
                          "/" +
                          link?.link[0].image_scales?.image[0]?.download
                      )}
                      alt={link?.link[0]?.title}
                    />
                  </div>
                  <div className="mt-16">
                    {link?.link[0].subject && (
                      <span className="tag-color">
                        {link?.link[0].subject[0]?.title || 'Categoria'}
                      </span>
                    )}
                    <p className="mt-16 mb-0 fs-18 ff-lato text-decoration-none color-black">
                      {link?.link[0]?.description || 'Descrição não disponível.'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Grid de destaques (6 cards) */}
            <div className="destaques grid-col-2 gap-24">
              {links.slice(1, 7).map((link, index) => (
                <Link key={index} className="card-default py-24 px-24" to={link?.link[0]["getPath"].replace("/Plone/", "")}>
                  <div>
                    <h2 className="title-32">
                      {link?.link[0]?.title}
                    </h2>
                    {link?.link[0]?.image_scales?.image[0]?.download && (
                      <img
                        className="mt-8"
                        src={flattenToAppURL(
                          link?.link[0]["getURL"] +
                            "/" +
                            link?.link[0].image_scales?.image[0]?.download
                        )}
                        alt={link?.link[0]?.title}
                      />
                    )}
                    {link?.link[0].subject && (
                      <span className="tag-color inline-block mt-8">
                        {link?.link[0].subject[0]?.title || 'Categoria'}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar à direita */}
          <div className="sidebar-news stack gap-32">
            <div>
              <h2 className="title-24">Destaques da semana</h2>
              <div className="stack gap-24">
                {links.slice(7, 8).map((link, index) => (
                  <Link key={index} className="card-default py-24 px-24 mt-24" to={link?.link[0]["getPath"].replace("/Plone/", "")}>
                    <div>
                      <h2 className="title-24">
                        {link?.link[0]?.title}
                      </h2>
                      {link?.link[0]?.image_scales?.image[0]?.download && (
                        <img
                          className="mt-8"
                          src={flattenToAppURL(
                            link?.link[0]["getURL"] +
                              "/" +
                              link?.link[0].image_scales?.image[0]?.download
                          )}
                          alt={link?.link[0]?.title}
                        />
                      )}
                      {link?.link[0].subject && (
                        <span className="tag-color inline-block mt-8">
                          {link?.link[0].subject[0]?.title || 'Categoria'}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="title-24">Mais lidos</h2>
              <div className="itens flex flex-direction-column gap-24 mt-32">
                {links.slice(8, 11).map((link, index) => (
                  <div key={index} className="item">
                    <div className="flex gap-16">
                      <span>{String(index + 1).padStart(2, '0')}.</span>
                      <div className="card-default px-24 py-24">
                        <Link
                          to={link?.link[0]["getPath"].replace("/Plone/", "")}
                        >
                          <h3 className="fs-24 text-black fw-600">
                            {link?.link[0]?.title}
                          </h3>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withBlockExtensions(View);
