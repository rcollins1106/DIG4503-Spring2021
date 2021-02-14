import MarketItem from '../MarketItemComponent'
import React, { useState } from 'react';

class Market extends React.Component {
    
    
      constructor(object){
      super(object);
  
      this.state ={
        item:"0"
      }
      }
    const [counter, changetCounter] = useState([]);
      render(){
        return(
          <div>
  
            <button onClick={() => {
              this.setState({item: ""})
            }}> Click me!</button> 
            <p>  {this.state.item + 1}</p>
          </div>
        );
      }
  }
  
  export default Market;