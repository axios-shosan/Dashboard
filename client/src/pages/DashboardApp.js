import { Box } from '@mui/system';
import autoencoder from '../static/autoencoder.svg';
import Sentiment from '../static/lamour.svg';
// components
import Page from '../components/Page';
import Header from '../components/Header';
import CardLink from '../components/CardLink';
// sections
// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page>
      <Box
        sx={{
          marginLeft: '3em',
        }}
      >
        <Box>
          <Header title={'welcome'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            mt: '3em',
            mr: '3em',
          }}
        >
          <CardLink picture={autoencoder} cardName={'Recomendation'} link={'/dashboard/autorec'} />
          <CardLink picture={Sentiment} cardName={'Sentiment Analysis'} link={'/dashboard/sentimentanalysis'} />
        </Box>
      </Box>
    </Page>
  );
}
