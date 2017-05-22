import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li onClick={() => {
                this.props.emitCellEvent(this.props.idx);
            }} className={`fl w-20 black ba tc ${this.props.selected} ${this.props.selected ? 'bg-black': 'bg-red'}`}>
                <div className="aspect-ratio aspect-ratio--1x1">
                    <span className="aspect-ratio--object">{this.props.num} {this.props.selected}</span>
                </div>
            </li>
        );
    }
}

export default Cell;
