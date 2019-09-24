import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class gameBoard extends Component {

    onClick = id => {
        if (this.isActive(id)) {
          this.props.moves.clickCell(id);
        }
      };
      //write function that translates cardId to be cell[id]
      //when playCard is ran, it calls to clickCell and places id
      isActive(id) {
        if (!this.props.isActive) return false;
        if (this.props.G.cells[id] !== null) return false;
        return true;
      }
    
      render() {
        
        let tbody = [];
        for (let i = 0; i < 10; i++) {
          let cells = [];
          for (let j = 0; j < 10; j++) {
            const id = 10 * i + j;
            cells.push(
              <td
                key={id}
                className={this.isActive(id) ? 'active' : ''}
                onClick={() => this.onClick(id)}
              >
                {this.props.G.board.boardArray[id]}
                <div hidden>{this.props.G.cells[id]}</div>
              </td>
            );
          }
          tbody.push(<tr key={i}>{cells}</tr>);
        }
    
        let winner = null;
        if (this.props.ctx.gameover) {
          winner =
            this.props.ctx.gameover.winner !== undefined ? (
              <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
            ) : (
                <div id="winner">Draw!</div>
              );
        }
        
        return (
          <div>
            <table id="board">
              <tbody>{tbody}</tbody>
            </table>
            {winner}
            <Link to="/">Home</Link>
          </div>
        );
      }
    }

export default gameBoard;