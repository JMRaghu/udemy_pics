import React from 'react';
import ReactDom from 'react-dom';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {term:""}
    }
    onInputSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state.term);
        this.props.onSubmitFromSeach(this.state.term)
    }
    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit ={this.onInputSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange = {(e)=>this.setState({term:e.target.value})}
                    />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;