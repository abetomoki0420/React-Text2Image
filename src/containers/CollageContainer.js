import React , {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators} from 'redux'

import * as actions from '../actions'
import BasePicture from '../components/BasePicture'
import InputText from '../components/InputText'

const style = {
  mainContainer:{
    display: "flex" ,
    flexDirection:"column",
    height: 1000 ,
    width: 800 ,
    margin: "0 auto" ,
  }
}

class PeachCollageContainer extends Component {

  onDownloadClick(){
    const canvas = document.getElementById('canvas')
    const link = document.createElement("a")
    link.href = canvas.toDataURL("image/png")
    link.download = "download.png" ;
    link.click();
  }

  render(){
    const { actions } = this.props ;
    return(
      <div style={ style.mainContainer }>
        <BasePicture />
        <InputText onKeyUp={ actions.onTextAreaInputed } />
        <button onClick={ this.onDownloadClick }>画像をダウンロード</button>
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

export default connect( mapStateToProps , mapDispatchToProps )( PeachCollageContainer );
