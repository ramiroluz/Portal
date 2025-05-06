import React from 'react';
import { withBlockExtensions } from '@plone/volto/helpers';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import './style.less';
import { Card, Typography } from '@mui/material';

interface ViewProps {
  isEditMode?: boolean;
}

interface CustomLinkProps {
  to: string;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ to, onClick, children }) => {
  return (
    <Link to={to} onClick={onClick}>
      {children}
    </Link>
  );
};

const View: React.FC<ViewProps> = ({ isEditMode }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (isEditMode) {
      e.preventDefault();
    }
  };

  return (
    <div className="stack gap-24">
      <div className="card-default">
        <Stack sx={{ p: '24px', gap: '16px' }} direction="column">
          <Stack direction="row" justifyContent="flex-start">
            <Typography
              className="tag"
              sx={{
                backgroundColor: 'var(--Support-3, #102A4D)',
                color: 'white',
                borderRadius: '8px',
                px: 1,
                py: 0.5,
              }}
            >
              Legislação e Projetos de Lei
            </Typography>
          </Stack>
          <CustomLink to="/" onClick={handleClick}>
            <Typography variant="h2">
              Flexibilização da publicidade em eventos esportivos entrará em
              vigor em 2025
            </Typography>
          </CustomLink>
          <Typography className="excerpt">
            A regulamentação foi aprovada pela Câmara Municipal de Curitiba em
            outubro.
          </Typography>
          <Typography className="tags">
            Tags: #Saúde #Vereadores #AtuaçãoParlamentar
          </Typography>
        </Stack>
        <Stack className="thumbnail">
          <CustomLink to="/" onClick={handleClick}>
            <img
              src="/images/mock/img.png"
              alt="Flexibilização da publicidade em eventos esportivos"
              loading="lazy"
            />
          </CustomLink>
        </Stack>
      </div>
      <Stack direction="row" sx={{ gap: '24px' }}>
        <Card className="card-default small">
          <Stack sx={{ p: '24px', gap: '16px' }} direction="column">
            <Stack direction="row" justifyContent="flex-start">
              <Typography
                className="tag"
                sx={{
                  backgroundColor: 'var(--Support-3, #B2C8D3)',
                  color: 'black',
                  borderRadius: '8px',
                  px: 1,
                  py: 0.5,
                }}
              >
                Audiências Públicas e Comissões
              </Typography>
            </Stack>
            <CustomLink to="/" onClick={handleClick}>
              <Typography variant="h2">
                Dia da Parada da Diversidade LGBTI+ de Curitiba ganha
                substitutivo geral
              </Typography>
            </CustomLink>
          </Stack>
          <Stack className="thumbnail">
            <CustomLink to="/" onClick={handleClick}>
              <img
                src="/images/news/news-2.png"
                alt="Parada da Diversidade LGBTI+"
                loading="lazy"
              />
            </CustomLink>
          </Stack>
        </Card>
        <Card className="card-default small">
          <Stack sx={{ p: '24px', gap: '16px' }} direction="column">
            <Stack direction="row" justifyContent="flex-start">
              <Typography
                className="tag"
                sx={{
                  backgroundColor: '#FFAB00',
                  color: 'black',
                  borderRadius: '8px',
                  px: 1,
                  py: 0.5,
                }}
              >
                Conheça os Vereadores
              </Typography>
            </Stack>
            <CustomLink to="/" onClick={handleClick}>
              <Typography variant="h2">
                Servidores de Curitiba: reajuste de 4,42% será votado em
                urgência
              </Typography>
            </CustomLink>
          </Stack>
          <Stack className="thumbnail">
            <CustomLink to="/" onClick={handleClick}>
              <img
                src="/images/news/news-3.png"
                alt="Reajuste dos servidores de Curitiba"
                loading="lazy"
              />
            </CustomLink>
          </Stack>
        </Card>
      </Stack>
      <Stack>
        <Card className="card-default full">
          <Stack sx={{ p: '24px', gap: '24px' }}>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Stack className="thumbnail">
                <CustomLink to="/" onClick={handleClick}>
                  <img
                    src="/images/news/news-4.png"
                    alt="Homenagem a personalidades negras"
                    loading="lazy"
                  />
                </CustomLink>
              </Stack>
              <Stack spacing={3}>
                <Stack direction="row" justifyContent="flex-start">
                  <Typography
                    className="tag"
                    sx={{
                      backgroundColor: 'var(--Support-3, #B2C8D3)',
                      color: 'black',
                      borderRadius: '8px',
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    Saúde e assistência social
                  </Typography>
                </Stack>
                <CustomLink to="/" onClick={handleClick}>
                  <Typography variant="h2">
                    Personalidades negras de Curitiba são homenageadas na Câmara
                    Municipal
                  </Typography>
                </CustomLink>
              </Stack>
            </Stack>
            <div className="divider"></div>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Stack className="thumbnail">
                <CustomLink to="/" onClick={handleClick}>
                  <img
                    src="/images/news/news-5.png"
                    alt="Programa Alimento Solidário"
                    loading="lazy"
                  />
                </CustomLink>
              </Stack>
              <Stack spacing={3}>
                <Stack direction="row" justifyContent="flex-start">
                  <Typography
                    className="tag"
                    sx={{
                      backgroundColor: '#102A4D',
                      color: 'white',
                      borderRadius: '8px',
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    Legislação e Projetos de Lei
                  </Typography>
                </Stack>
                <CustomLink to="/" onClick={handleClick}>
                  <Typography variant="h2">
                    Curitiba vai implantar Programa Alimento Solidário daqui a
                    seis meses
                  </Typography>
                </CustomLink>
              </Stack>
            </Stack>
            <div className="divider"></div>
            <Stack direction="row" alignItems="center" spacing={3}>
              <Stack className="thumbnail">
                <CustomLink to="/" onClick={handleClick}>
                  <img
                    src="/images/news/news-6.png"
                    alt="Notícias da Câmara"
                    loading="lazy"
                  />
                </CustomLink>
              </Stack>
              <Stack spacing={3}>
                <Stack direction="row" justifyContent="flex-start">
                  <Typography
                    className="tag"
                    sx={{
                      backgroundColor: '#009262',
                      color: 'white',
                      borderRadius: '8px',
                      px: 1,
                      py: 0.5,
                    }}
                  >
                    Notícias
                  </Typography>
                </Stack>
                <CustomLink to="/" onClick={handleClick}>
                  <Typography variant="h2">
                    Últimas notícias da Câmara Municipal de Curitiba
                  </Typography>
                </CustomLink>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Stack>
    </div>
  );
};

export default withBlockExtensions(View);
