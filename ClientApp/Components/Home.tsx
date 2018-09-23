import * as React from 'react';
import './Home.scss';

type State = {
  count: number;
};

type Props = {};

class Home extends React.PureComponent<{}, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <>
        <div>Hello World</div>
        <button className={'button'} onClick={this.handleClick}>
          {this.state.count}
        </button>
      </>
    );
  }
}

export default Home;
