import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  AppShell,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Center,
  Divider,
  Avatar,
  Indicator,
  Flex,
  Box,
  UnstyledButton,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconBell, IconMoon, IconSun,
} from '@tabler/icons-react';
import useStyles from './hooks/useStyles';
import AppNavbar from '../AppNavbar';
import { notificationsUrl } from '../../common/routeUrls';
import useStore from '../../store';
import { pageMetaSelector } from '../../store/selectors/layout';

interface AppLayoutProps {
  children: JSX.Element
}

function AppLayout({ children }: AppLayoutProps) {
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const pageMeta = useStore(pageMetaSelector);
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  const ThemeIcon = colorScheme === 'dark' ? IconMoon : IconSun;

  const onNotificationsClick = () => {
    navigate(notificationsUrl);
  };

  const onThemeIconClick = () => {
    toggleColorScheme();
  };

  return (
    <AppShell
      padding={0}
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<AppNavbar opened={opened} />}
      header={(
        <Header height={{ base: 60, md: 70 }} p={0}>
          <Flex h="100%">
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Group px="md">
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                />
              </Group>
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Divider color={theme.colors.gray[2]} orientation="vertical" />
            </MediaQuery>
            <MediaQuery smallerThan="sm" styles={{ justifyContent: 'center' }}>
              <Group w={{ base: 128, sm: '12.5rem', xl: '18.75rem' }} h="100%" px={{ base: 'xs', sm: 'xl' }}>
                <Center className={classes.appLogo} w={32} h={32} bg="indigo" c="white"><Text fw="bold">V</Text></Center>
                <Text fw="bold" fz="lg">Vault</Text>
              </Group>
            </MediaQuery>
            <Divider color={theme.colors.gray[2]} orientation="vertical" />
            <Group px="xl" style={{ flex: 1 }} position="right">
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Group h="100%">
                  <UnstyledButton onClick={onNotificationsClick}>
                    <Avatar color="gray.3" variant="outline">
                      <Indicator color="indigo" lh={0} size={6}>
                        <IconBell color={theme.colors.dark[9]} size={20} />
                      </Indicator>
                    </Avatar>
                  </UnstyledButton>
                  <UnstyledButton onClick={onThemeIconClick}>
                    <Avatar color="gray.3" variant="outline">
                      <ThemeIcon color={theme.colors.dark[9]} size={20} />
                    </Avatar>
                  </UnstyledButton>
                  <Divider color={theme.colors.gray[2]} orientation="vertical" />
                </Group>
              </MediaQuery>
              <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Group>
                  <Avatar src="https://randomuser.me/api/portraits/men/18.jpg" radius="xl" color="indigo" />
                  <Box>
                    <Text lh="1" fz="md" fw="600">John Doe</Text>
                    <Text fz="xs" fw="500" color="gray.6">Software Engineer</Text>
                  </Box>
                </Group>
              </MediaQuery>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <UnstyledButton>
                  <Group>
                    <Avatar src="https://randomuser.me/api/portraits/men/18.jpg" radius="xl" color="indigo" />
                  </Group>
                </UnstyledButton>
              </MediaQuery>
            </Group>
          </Flex>
        </Header>
      )}
    >
      <Box p="xl" bg="white" style={{ borderBottom: `1px solid ${theme.colors.gray[3]}` }}>
        <Title>{pageMeta.title}</Title>
        <Text>{pageMeta.description}</Text>
      </Box>
      <Box p="1em">
        {children}
      </Box>
    </AppShell>
  );
}

export default AppLayout;
