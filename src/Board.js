import React, { Component } from 'react';
import Cell from './Cell';

class Board extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        socket: window.io(`http://${window.document.location.host}`),
        selectedCell: null
    }

    componentDidMount() {
        this.state.socket.on('cell', (data) => {
            this.setState({
                selectedCell: data.cell
            });
            console.log(this.state.selectedCell);
        });

        
    }

    componentWillUnmount() {

    }

    emitCellEvent(cell) {
        console.log(cell);
        this.state.socket.emit('cell', {cell});
    }

    render() {
        return (
            <ul className="list cf ma0 pa0 w-100 bg-red">
            {this.props.map.map((val, idx) => <Cell key={idx} idx={idx} num={val} selected={this.state.selectedCell === idx} emitCellEvent={(cell) => {
                    this.emitCellEvent(cell)
                }} />)}
            </ul>   
        )
    }
}

export default Board;
