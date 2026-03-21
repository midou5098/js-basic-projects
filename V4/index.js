function App() {
            const [messages, setMessages] = React.useState([
                { id: 1, text: "Hi! I'm your AI twin. Send me a message!", sender: "ai" }
            ]);
            const [input, setInput] = React.useState("");
            const [isLoading, setIsLoading] = React.useState(false);
            
            const sendMessage = async () => {
                if (input.trim() === "") return;
                
                // 1. Add user message
                const userMessage = {
                    id: Date.now(),
                    text: input,
                    sender: "me"
                };
                setMessages(prev => [...prev, userMessage]);
                setInput("");
                
                // 2. Show loading state
                setIsLoading(true);
                
                // 3. Fake AI thinking (simulates API call)
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                // 4. Add AI response
                const aiMessage = {
                    id: Date.now() + 1,
                    text: `You said: "${input}". This is my fake AI response! (In real version, this would be your fine-tuned model)`,
                    sender: "ai"
                };
                setMessages(prev => [...prev, aiMessage]);
                
                // 5. Turn off loading
                setIsLoading(false);
            };
            
            return (
                <div>
                    <h2>🤖 AI Twin (Fake Mode)</h2>
                    
                    <div className="chat-container">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        
                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="message ai loading">
                                AI is thinking...
                            </div>
                        )}
                    </div>
                    
                    <div className="input-area">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                            placeholder="Type a message..."
                            disabled={isLoading}
                        />
                        <button onClick={sendMessage} disabled={isLoading}>
                            {isLoading ? "Thinking..." : "Send"}
                        </button>
                    </div>
                    
                    <div className="status">
                        {isLoading ? "🤔 AI is generating response..." : "✅ Ready"}
                    </div>
                </div>
            );
        }
        
        ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    