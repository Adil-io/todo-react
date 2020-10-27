import React, { Component } from 'react';
import './info.css';

import {MdAddBox} from 'react-icons/md'

class Info extends Component {
    state = { 
        title: '',
        desc: ''
    }

    componentDidMount(){
        console.log('Iam in the mounting Phase Form')
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Iam in the updating Phase Form')
    }

    handleInput = (e) => {
        // console.log(e , this.state);
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            title: '',
            desc: ''
        })
        e.target.reset();
        this.props.addTodo(this.state); 
    }

    render() {
        console.log('Rendering Form')
        return (
            <form className="input-form" onSubmit={this.handleSubmit}>
                <div className="inputDiv">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleInput} required></input>
                </div>
                <button type="submit">
                    <MdAddBox size="50px" />
                </button>
            </form>
        );
    }
}

export default Info;