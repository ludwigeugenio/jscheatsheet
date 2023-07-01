import './App.css'
import Card from "./components/Card"

function App() {

  const jsMap = {
    title: "Map",
    description: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    content: () => <>
      <p><span className="reserve">const</span> <span className='variable-name'>names</span> = [<span className='string'>"Ludwig"</span>, <span className='string'>"Michael"</span>, <span className='string'>"Arjay"</span>];</p>
      <br />
      <p><span className="reserve">const</span> <span className='variable-name'>newNames</span> = <span className='variable-name'>names</span>.<span className='function'>map</span>(<span className='variable-name'>name</span> <span className='reserve'>=&gt;</span> {"{"} <br />
      <p className="indent"><span className='reserve'>return</span> <span className='string'>"Awesome "</span> + <span className='variable-name'>name</span></p>
      {"}"})</p>
      <br />
      <p>console.log(newNames)</p>
      <br />
      <p className='comment'>&gt;&gt; ["Awesome Ludwig", "Awesome Michael", "Awesome Arjay"]</p>
    </>
      
  }

  return (
    <>
      <h1>JavaScript Cheat Sheet</h1>
      <Card title={jsMap.title} description={jsMap.description} Content={jsMap.content} />

    </>
  )
}

export default App
