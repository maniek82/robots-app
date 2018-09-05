import React,{Component} from 'react';

class Scroll extends Component {
    render() {
        return (
            <div style={{overflowY: 'auto',border: '4px solid black',height: '300px'}}>
                {this.props.children}
            </div>
        )
    }
}
export default Scroll;