

function App(){
    const [text,settext] = React.useState("");
    return (
        <div>
            <input type="text" 
            value={text}
            onChange={(e)=>settext(e.target.value)}
            placeholder="type sumthn bitchass"></input>
            <p>you typing :  {text}</p> 

        </div>
    );

}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);