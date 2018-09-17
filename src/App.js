import React, { Component } from 'react';
import './styles/styles.css'
import Slider from './components/Slider/Slider';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const GET_SLIDES = gql`
  query {
    slides{
      id
      title
      url
      description
    }
  }
`;

class App extends Component {
  render() {
    return (
        <Query query={GET_SLIDES}>
          {({ loading, data, error }) => (
            <div className="queryWrapper">
              {loading && (<div className="loading">Loading</div>)}
              {data && (data.slides && <Slider images={data.slides}/>)}
              {error && (<div className="error">{error}</div>)}
            </div>
            )}
        </Query>
    );
  }
}

export default App;
