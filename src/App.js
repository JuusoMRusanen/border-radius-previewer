import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {

  const [topLeft, setTopLeft] = useState(0)
  const [topRight, setTopRight] = useState(0)
  const [bottomLeft, setBottomLeft] = useState(0)
  const [bottomRight, setBottomRight] = useState(0)
  const [increment, setIncrement] = useState(5)

  const [boxStylesString, setBoxStylesString] = useState('')
  const boxRef = useRef(null)

  useEffect(() => {

    const style = boxRef.current.style

    let stylesString = ""

    for (const key in style) {
      if (style.hasOwnProperty(key)) {
        stylesString += (`${style[key]}: ${style[style[key]]};\n`);
      }
    }

    setBoxStylesString(stylesString)

  },[topLeft, topRight, bottomLeft, bottomRight])
  

  return (
    <div className="App">
      <header className="App-header">

        <h1>Border Radius Previewer</h1>

        <div
          style={{ 
            width:'200px',
            height:'200px',
            backgroundColor:'#61dafb',
            borderRadius:`${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px` 
          }}
          ref={boxRef}
        />

        <div className='row'>
          <div className='column'>
            <label className='prop-label' htmlFor='top-left'>top-left</label>
            <div className='row'>
              <button 
                className='prop-input-button' 
                onClick={() => setTopLeft(topLeft + increment)}
                >
                +
              </button>
              <input
                id='top-left'
                className='prop-input'
                aria-label="top-left"
                value={topLeft}
                onChange={(e) => {
                  setTopLeft(e.target.value)
                }}
              />
              <button 
                className='prop-input-button' 
                onClick={() => setTopLeft(topLeft - increment)}
                >
                -
              </button>
            </div>
          </div>

          <div className='column'>
            <label className='prop-label' htmlFor='top-right'>top-right</label>
            <div className='row'>
              <button 
                className='prop-input-button' 
                onClick={() => setTopRight(topRight + increment)}
                >
                +
              </button>
            <input
              id='top-right'
              className={'prop-input'}
              value={topRight}
              onChange={(e) => {
                setTopRight(e.target.value)
              }}
            />
              <button 
                className='prop-input-button' 
                onClick={() => setTopRight(topRight - increment)}
                >
                -
              </button>
            </div>
          </div>
        </div>
        
        <div className='row'>
          <div className='column'>
            <label className='prop-label' htmlFor='bottom-right'>bottom-right</label>
            <div className='row'>
              <button 
                className='prop-input-button' 
                onClick={() => setBottomRight(bottomRight + increment)}
                >
                +
              </button>
            <input
              id='bottom-right'
              className={'prop-input'}
              value={bottomRight}
              onChange={(e) => {
                setBottomRight(e.target.value)
              }}
            />
            <button 
                className='prop-input-button' 
                onClick={() => setBottomRight(bottomRight - increment)}
                >
                -
              </button>
            </div>
          </div>

          <div className='column'>
            <label className='prop-label' htmlFor='bottom-left'>bottom-left</label>
            <div className='row'>
              <button 
                className='prop-input-button' 
                onClick={() => setBottomLeft(bottomLeft + increment)}
                >
                +
              </button>
            <input
              id='bottom-left'
              className={'prop-input'}
              value={bottomLeft}
              onChange={(e) => {
                setBottomLeft(e.target.value)
              }}
            />
              <button 
                className='prop-input-button' 
                onClick={() => setBottomLeft(bottomLeft - increment)}
                >
                -
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='column'>
            <label className='prop-label' htmlFor='increment'>increment</label>
            <div className='row'>
              <button 
                className='prop-input-button' 
                onClick={() => setIncrement(increment + 1)}
                >
                +
              </button>
            <input
              id='increment'
              className={'prop-input'}
              value={increment}
              onChange={(e) => {
                setIncrement(e.target.value)
              }}
            />
            <button 
                className='prop-input-button' 
                onClick={() => setIncrement(increment - 1)}
                >
                -
              </button>
            </div>
          </div>
        </div>
        
        <pre>
          <code
            style={{
              fontSize:'20px',
              padding:'10px',
              textAlign:'left',
              float:'left',
              backgroundColor:'#40454f',
              boxShadow:"5px 5px 10px black",
              borderRadius:"5px 5px 5px 5px"
            }}
          >
            {boxStylesString}
          </code>
        </pre>

        <button 
          className='copy-button'
          onClick={() => navigator.clipboard.writeText(boxStylesString)}
        >Copy
        </button>

      </header>
    </div>
  );
}

export default App;
