import React from "react";
import {Box, Typography} from "@mui/material";

interface MessageListProps {
    messages: { role: string; content: string }[];
}

export const MessageList: React.FC<MessageListProps> = ({messages}) => {
    return (
        <Box>
            {messages.map((message, index) => (
                <Box key={index} mb={2}>
                        <Typography variant="body1" fontWeight="bold">
                            {message.role === "user" ? "You" : "ChatGPT"}
                        </Typography>
                        <Typography
                            variant="body1"
                            color={message.role === "user" ? "primary" : "secondary"}
                        >
                            {message.content}
                        </Typography>
                </Box>
            ))}
        </Box>
    );
};
