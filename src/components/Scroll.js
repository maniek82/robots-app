import React,{Component} from 'react';

class Scroll extends Component {
    render() {
        return (
            <div className="mt4" style={{overflowY: 'hidden',border: '3px solid black',height: '400px'}}>
                {this.props.children}
            </div>
        )
    }
}
export default Scroll;