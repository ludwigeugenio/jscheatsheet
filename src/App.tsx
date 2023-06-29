import './App.css'
import Card from "./components/Card"

function App() {

  const jsMap = {
    title: "Map",
    description: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
    content: () => <>
      <p><span className="variable">const</span> <span className='variable-name'>names</span> = ["Ludwig", "Michael", "Arjay"]</p>
      <br />
      <p><span className="variable">const</span> <span className='variable-name'>newNames</span> = <span className='variable-name'>names</span>.map(name =&gt; {"{"} <br />
      <p className="indent">return "Awesome " + name</p>
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
