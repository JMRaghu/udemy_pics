import React from 'react';
import ReactDom from 'react-dom'
import Unsplash from '../api/Unsplash'
import SearchBar from '../components/SearchBar'
import ImageList from '../components/ImageList'

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit =  async (term) => {     //Anyname can be defined need not to be same as searchbar SUBMIT function
    //console.log(term);
    const response = await Unsplash.get('search/photos',{
      params:{query:term},
      
    });
     this.setState({images: response.data.results});
  }
  render(){
    return (
      <div className="ui container" style={{marginTop:'10px'}}>
      <SearchBar onSubmitFromSeach={this.onSearchSubmit}/>
      <ImageList images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
