import React from 'react';
import ChartList from '../components/chart_list'

class ChartContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.addEventListener('load', () => {
      if (request.status !== 200) return;
      const responseBody = JSON.parse(request.responseText);
      const chartList = responseBody.feed.entry;
      this.setState({
        songs: chartList
      })
    })
    request.send();
  }

  render(){
    return (
      <div>
        <h2>UK Top 20</h2>
        <ChartList
        songs={this.state.songs}
        />
      </div>
    )
  }

}

export default ChartContainer;
