import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";

interface ChatBoxProps {
	apiKey: string;
}

export const ChatBox: React.FC<ChatBoxProps> = ({ apiKey }) => {
	const [messages, setMessages] = useState<{ role: string; content: string }[]>(
		[]
	);

	const handleSendMessage = async (message: string) => {
		const userMessage = { role: "user", content: message };
		setMessages((prevMessages) => [...prevMessages, userMessage]);

		// "https://openrouter.ai/api/v1/chat/completions"
		const response = await fetch(
			"https://openrouter.ai/api/v1/chat/completions",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${apiKey}`,
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo-1106",
					messages: [...messages, userMessage],
				}),
			}
		);

		const data = await response.json();
		const aiMessage = {
			role: "assistant",
			content: data.choices[0].message.content,
		};
		setMessages((prevMessages) => [...prevMessages, aiMessage]);
	};

	return (
		<Box display="flex" flexDirection="column" height="100vh">
			<Paper
				elevation={3}
				style={{ flex: 1, overflowY: "scroll", padding: "16px" }}
			>
				<MessageList messages={messages} />
			</Paper>
			<MessageInput onSendMessage={handleSendMessage} />
		</Box>
	);
};
