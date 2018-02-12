import React from 'react';
import NotFound from '../../templates/NotFound';
import Loading from '../../shared-components/Loading';

import './GettingStarted.css';

// Declare your component
export default class GettingStarted extends React.Component {

  state = {
    notFound: false,
    page: true
  }

  componentWillMount() {
    // this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    // this.fetchPage(props);
  }

  // fetchPage(props) {
  //   if (props.prismicCtx) {
  //     return props.prismicCtx.api.getByUID('page', props.match.params.uid, {}, (err, page) => {
  //       if (page) {
  //         this.setState({page});
  //       } else {
  //         this.setState({notFound: !page});
  //       }
  //     });
  //   }
  //   return null;
  // }

  handleStartClick() {
    alert('Alright!');
  }

  render() {
    // console.log(this.state.page);

    if (this.state.page) {
      return (
        <div id="GettingStarted">
          <h1>Welcome to this wonderful app.</h1>
          <button className="button big" onClick={this.handleStartClick}>Let's get started!</button>
        </div>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
