function App(){
    const msg=[
        {id:1,text:"wsup gang",sender:"me"},
        {id:2,text:"keep it rollin bitch ass nigga",sender:"ai"},
        {id:3,text:"fuh 's wrong with u bithcless fuck",sender:"me"},
        {id:4,text:"bithcless? nigga fumbeled zeinb then saying i m bichless lmaooo",sender:"ai"},
        {id:4,text:"mbad for even trying to talk to u u stupid fuck,bitchass..",sender:"me"}
        ]
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
        </div>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);