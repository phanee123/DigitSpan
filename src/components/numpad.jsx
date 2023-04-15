import React from 'react';

function buttons() {
    const [count, setCount] = useState(0);
  
    const handleClear = () => {
      // clear the response or do any other necessary actions
    }
  
    const handleSubmit = () => {
      // submit the response or do any other necessary actions
    }
  
    const handleButtonClick = (num) => {
      // record the button click or do any other necessary actions
    }
  
    return (      
      <div className="numbox">
        <div className="num-panel">
          <button className="square num-button" onClick={() => handleButtonClick(1)}>
            <div className="content">
              <div className="numbers">1</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(2)}>
            <div className="content">
              <div className="numbers">2</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(3)}>
            <div className="content">
              <div className="numbers">3</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(4)}>
            <div className="content">
              <div className="numbers">4</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(5)}>
            <div className="content">
              <div className="numbers">5</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(6)}>
            <div className="content">
              <div className="numbers">6</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(7)}>
            <div className="content">
              <div className="numbers">7</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(8)}>
            <div className="content">
              <div className="numbers">8</div>
            </div>
          </button>
          <button className="square num-button" onClick={() => handleButtonClick(9)}>
            <div className="content">
              <div className="numbers">9</div>
            </div>
          </button>
        </div>
        <div className="button-group">
          <button className="clear_button" onClick={handleClear}>Clear</button>
          <button className="submit_button" onClick={handleSubmit}>Submit Answer</button>
        </div>
      </div>
    );
  
  }

  export default buttons;