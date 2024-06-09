"use client"
import * as React from 'react';
import RouterLink from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import { paths } from '@/paths';
import { DynamicLogo } from '@/components/core/logo';

export interface LayoutProps {
  children: React.ReactNode;
}
const LogoStyle = styled(Typography)`
     font-family: 'Poppins', sans-serif;
    font-size: 40px;
    font-weight: bold;
    letter-spacing: 5px;
    color: #2c3e50;
    background: linear-gradient(90deg, #001f3f, #0074d9);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

export function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <Box
      sx={{
        display: { xs: 'flex', lg: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '100%',
      }}
    >
      <Box sx={{ display: 'flex', flex: '1 1 auto', flexDirection: 'column' }}>
        <Box sx={{ p: 3 }}>
          <Box component={RouterLink} href={paths.home} sx={{ display: 'inline-block', fontSize: 0 }}>
          <LogoStyle>10TIYAAB</LogoStyle>
          </Box>
        </Box>
        <Box sx={{ alignItems: 'center', display: 'flex', flex: '1 1 auto', justifyContent: 'center', p: 3 }}>
          <Box sx={{ maxWidth: '450px', width: '100%' }}>{children}</Box>
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: 'center',
          background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
          color: 'var(--mui-palette-common-white)',
          display: { xs: 'none', lg: 'flex' },
          justifyContent: 'center',
          p: 3,
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={1}>
            <Typography color="inherit" sx={{ fontSize: '24px', lineHeight: '32px', textAlign: 'center' }} variant="h1">
              Welcome to{' '}
              <Box component="span" sx={{ color: '#15b79e' }}>
                10TIYAAB
              </Box>
            </Typography>
            <Typography align="center" variant="subtitle1">
              A Application which help daily vagers to connect with customers
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
