import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchGnomes } from '../actions'

import SingleGnome from './SingleGnome.jsx'

class GnomeList extends Component{
    constructor(props){
        super(props)
        this.state={
            limit: 15,
        }
    }
    componentDidMount=()=>{
        this.props.fetchGnomes(this.state.limit)
    }
    handleLoadMoreClick = ()=>{
        let nextLimit = this.state.limit
        nextLimit += 15
        this.props.fetchGnomes(nextLimit)
        this.setState({
            limit: nextLimit
        })
    }
    render(){
        return(
            <div>
                <h1>Gnomes</h1>
                <ul>
                    {this.props.gnomes.map(oneGnome=>{
                        return <SingleGnome gnome={oneGnome} key={oneGnome.id} />
                    })}
                    <div onClick={this.handleLoadMoreClick}>Load more</div>
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ gnomes }){
    return {
        gnomes,
    }
}
export default connect(mapStateToProps, { fetchGnomes })(GnomeList)