function App(){
    const [msg,setmsg]=React.useState([{id:1,text:"wsup gang",sender:"me"}])
        
    const [text,settext] = React.useState("");
    return(
        <div>
            <h2>your AI-homie companion!</h2>
            <div className="chat-container">
                {msg.map((mesg)=>(
                    <div key={mesg.id} className={`message ${mesg.sender}`}>{mesg.text}</div>))}
            </div>

            <p style={{marginTop: '20px', color: '#666'}}>
                        Total messages: {msg.length}
                    </p>
            <input type="text" 
            value={text}
            onChange={(e)=>settext(e.target.value)}
            placeholder="type sumthn bitchass"></input>
            <p>you typing :  {text}</p> 
            <button onClick={
                ()=>{setmsg([...msg,{id:msg.length+1,text:text,sender:"me"}])
                    settext("")}


            }>send ts</button>
            
            

        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

