"use client"
import React, { useState } from 'react';
import { Container, CssBaseline, TextField, Button, Box, Typography } from '@mui/material';
// import { ChatBox } from './components/ChatBox';
import {ChatBox} from '@/components/ChatBox'

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string>('');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const handleApiKeyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  const handleAuthorize = () => {
    if (apiKey.trim()) {
      setIsAuthorized(true);
    }
  };

  return (
      <Container>
        <CssBaseline />
        {!isAuthorized ? (
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
              <Typography variant="h4" gutterBottom>
                Enter OpenRouter API Key
              </Typography>
              <TextField
                  label="API Key"
                  variant="outlined"
                  value={apiKey}
                  onChange={handleApiKeyChange}
                  fullWidth
                  margin="normal"
              />
              <Button variant="contained" color="primary" onClick={handleAuthorize}>
                Authorize
              </Button>
            </Box>
        ) : (
            <ChatBox apiKey={apiKey} />
        )}
      </Container>
  );
};

export default App;