        function App() {
            const [messages, setMessages] = React.useState([
                { id: 1, text: "Hi! I'm your AI twin. Send me a message! This version calls a REAL API.", sender: "ai" }
            ]);
            const [input, setInput] = React.useState("");
            const [isLoading, setIsLoading] = React.useState(false);
            
            const sendMessage = async () => {
                if (input.trim() === "") return;
                
                // Save user input
                const userInput = input;
                
                // 1. Add user message to chat
                const userMessage = {
                    id: Date.now(),
                    text: userInput,
                    sender: "me"
                };
                setMessages(prev => [...prev, userMessage]);
                setInput("");
                
                // 2. Show loading state
                setIsLoading(true);
                
                // 3. Call REAL API
                try {
                    // Using a free test API that echoes your message
                    // Replace this URL with your Qwen model endpoint later
                    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: 'User message',
                            body: userInput,
                            userId: 1
                        })
                    });
                    
                    // Check if response is ok
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    
                    const data = await response.json();
                    
                    // 4. Add AI response
                    const aiMessage = {
                        id: Date.now() + 1,
                        text: `✅ API Response: th message message "${userInput}" was received. API returned ID: ${data.id}. (Next step: replacing with my Qwen model!)`,
                        sender: "ai"
                    };
                    setMessages(prev => [...prev, aiMessage]);
                    
                } catch (error) {
                    // Handle errors (network issues, server down, etc.)
                    console.error("API Error:", error);
                    const errorMessage = {
                        id: Date.now() + 1,
                        text: `❌ Error: Could not reach API. ${error.message}. no internet.`,
                        sender: "ai"
                    };
                    setMessages(prev => [...prev, errorMessage]);
                }
                
                // 5. Turn off loading
                setIsLoading(false);
            };
            
            return (
                <div>
                    <h2>🤖 AI Twin (Real API Mode)</h2>
                    <p style={{color: '#666', marginBottom: '20px'}}>
                        This calls a real API. Later, i ll replace with the local ai of mine 
                    </p>
                    
                    <div className="chat-container">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`message ${msg.sender}`}>
                                {msg.text}
                            </div>
                        ))}
                        
                        {isLoading && (
                            <div className="message ai loading">
                                ⏳ AI is thinking... (calling API)
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
                            {isLoading ? "Calling API..." : "Send"}
                        </button>
                    </div>
                    
                    <div className="status">
                        {isLoading ? "📡 Calling API..." : "✅ Ready"}
                    </div>
                    
                    <div className="api-info">
                        🔧 <strong>Current API:</strong> jsonplaceholder.typicode.com (test API)<br/>
                        🚀 <strong>Soon:</strong> http://localhost:8000/chat (your Qwen model)
                    </div>
                </div>
            );
        }
        
        ReactDOM.createRoot(document.getElementById('root')).render(<App />);