/* Why we created new imageCard class
1. Let the imagecard render itself and its image
2. Reach into the dom and figure out the height of the image
3. Set the image height on the state to get the component to render
4. When rendering assign grid-row-end to make sure the  image takes up the appropriate space 
 */

import React from 'react'

class ImageCard extends React.Component{
    constructor(props){
        super(props)

        this.state = {span:0}
        this.imageRefs = React.createRef();
    }
    componentDidMount(){
        this.imageRefs.current.addEventListener('load', this.setSpans)
    }
    setSpans = () =>{
        const height = this.imageRefs.current.clientHeight;
        const span = Math.ceil(height/10);  // 10 is css grid-auto-rows: 150px
        this.setState({span}) // this.setState({span:span})

    }
    render(){
        const {description,urls}=this.props.image
        return(
            <div style ={{gridRowEnd:`span ${this.state.span}`}}>
                <img 
                ref={this.imageRefs}
                alt={description}
                src={urls.regular}
                />
            </div>
        )
    }
}

export default ImageCard;