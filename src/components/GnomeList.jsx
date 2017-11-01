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
            <div className="gnome__list-wrapper">
                <h1 className="list__title">Gnomes</h1>
                <ul className="gnome__list">
                    {this.props.gnomes.map(oneGnome=>{
                        return <SingleGnome gnome={oneGnome} key={oneGnome.id} />
                    })}
                    <div 
                        onClick={this.handleLoadMoreClick}
                        className="load__button"
                    >
                        Load more
                    </div>
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