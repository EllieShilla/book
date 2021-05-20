import './App.css';

function Name()
{
  return <h2>Нил Гейман</h2>;
}

function Genre(props)
{
  return <h3>{props.genre}</h3>
}

export default function App()
{
  const text='фэнтези';
  return(
    <div className="App">
     <h1>Нико-где</h1>
     <Name/>
     <Genre genre={text}/>
    </div>
  )
}
