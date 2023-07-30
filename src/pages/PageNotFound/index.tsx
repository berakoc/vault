import {
  Blockquote, Box, Button, Space, Text, Title, useMantineTheme,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../components/AppLayout';
import { homeUrl } from '../../common/routeUrls';

function PageNotFound() {
  const navigate = useNavigate();
  const theme = useMantineTheme();
  const { t } = useTranslation('translation', { keyPrefix: 'pageNotFound' });

  const onGoToHomePageClick = () => {
    navigate(homeUrl);
  };
  return (
    <AppLayout>
      <Box style={{ border: `1px solid ${theme.colors.gray[3]}` }} bg="white" p="xl">
        <Title>Page Not Found</Title>
        <Blockquote color="indigo" cite="- Unknown Traveler">
          <Text>{t('firstVerse')}</Text>
          <Text>{t('secondVerse')}</Text>
        </Blockquote>
        <Space h="xl" />
        <Button color="indigo" onClick={onGoToHomePageClick} size="md">{t('goToHomePage').toUpperCase()}</Button>
      </Box>
    </AppLayout>
  );
}

export default PageNotFound;
