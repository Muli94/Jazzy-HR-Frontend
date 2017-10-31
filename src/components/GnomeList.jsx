import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchGnomes } from '../actions'

import SingleGnome from './SingleGnome.jsx'

class GnomeList extends Component{
    componentDidMount=()=>{
        this.props.fetchGnomes()
    }
    handleLoadMoreClick = ()=>{

    }
    render(){
        return(
            <ul>
                {this.props.gnomes.map(oneGnome=>{
                    return <SingleGnome gnome={oneGnome} key={oneGnome.id} />
                })}
                <div onClick={this.handleLoadMoreClick}>Load more</div>
            </ul>
        )
    }
}

function mapStateToProps({ gnomes }){
    return {
        gnomes,
    }
}
export default connect(mapStateToProps, { fetchGnomes })(GnomeList)