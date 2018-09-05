import React,{Component} from 'react';

class SearchBox extends Component {

    render() {
        return(
            <div className="tc">
                <input 
                type="search" 
                className="pa2 ba b--green bg-lightest-blue "
                 placeholder="search robots"
                onChange = {this.props.searchChange}
                 />
            </div>
        )
    }
}

export default SearchBox;