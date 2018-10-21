import React , {Component} from 'react'
import pic from '../assets/img/baseimg.jpg'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'
import * as actions from '../actions'


const style = {
  img:{
    display:"none"
  }
}

class BasePicture extends Component {

  componentDidMount(){
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const img = this.refs.image

    img.onload = () => {
      ctx.drawImage( img , 0 , 0 , 800 , 600 )
    }
  }

  componentDidUpdate(){
    const { editor } = this.props ;
    const canvas = this.refs.canvas
    const ctx = canvas.getContext('2d')
    const img = this.refs.image

    ctx.drawImage( img , 0 , 0 , 800 , 600 )
    ctx.font = '30px メイリオ'
    ctx.fillStyle = 'rgb(0, 0, 0 )'
    ctx.fillText( editor.inputText[0] || "" , 140 , 338 )
    ctx.fillText( editor.inputText[1] || "" , 140 , 382 )
    ctx.fillText( editor.inputText[2] || "" , 140 , 428 )

    return false ;
  }

  render(){
    return(
      <div>
        <canvas id="canvas" ref="canvas" width="800" height="600" />
        <img ref="image" src={ pic }  style={ style.img }/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  editor : state.editor ,
});

function mapDispatchToProps( dispatch ){
  return{
    actions: bindActionCreators( actions , dispatch ),
  };
}

export default connect( mapStateToProps , mapDispatchToProps )( BasePicture );
