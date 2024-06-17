import React, {useState, useEffect} from 'react';
import {Box, TextField, IconButton} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface MessageInputProps {
    onSendMessage: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({onSendMessage}) => {
    const [message, setMessage] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    useEffect(() => {
        console.log(message)
    }, [message])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} display="flex" alignItems="center" p={2}
             bgcolor="background.paper">
            <TextField
                variant="outlined"
                placeholder="Message ChatGPT..."
                value={message}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <IconButton type="submit" color="primary">
                <SendIcon/>
            </IconButton>
        </Box>
    );
};