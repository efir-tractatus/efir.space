import React from 'react';
import CardList from './CardList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { item: 1 },
        { item: 2 },
        { item: 3 },
        { item: 4 },
        { item: 5 },
        { item: 6 },
        { item: 7 },
        { item: 8 },
        { item: 9 },
        { item: 10 },
        { item: 11 },
        { item: 12 },
      ],
      globalModalStatus: false,
    };
    this.toggleGlobalModalStatus = this.toggleGlobalModalStatus.bind(this);
  }

  toggleGlobalModalStatus() {
    this.setState({
      globalModalStatus: !this.state.globalModalStatus,
    });
  }

  render() {
    return (
      <div className="main">
        <CardList
          cards={this.state.cards}
          toggleGlobalModalStatus={this.toggleGlobalModalStatus}
          globalModalStatus={this.state.globalModalStatus}
        />
      </div>
    );
  }
}

export default App;
