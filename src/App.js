import React from 'react';
import StrAddButton from './StrAddButton' // 버튼 컴포넌트

class App extends Component {
  render(){
    return (
      <div>
        <h1>Start React 200!</h1>
        <span>{this.props.store.getState().data.str}</span><br/>
        {/* props로 index.js에서 전달받은 store에 접근 */}
        <StrAddButton store={this.props.store}/>
      </div>
    )
  }
}

export default App;