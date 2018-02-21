import React from 'react';

const ChartList = (props) => {

  const charts = props.songs.map((song, index) => {

    return (
      <div value={index} key={index}>
        <h3>{index + 1}.</h3>
        <div className="chart-entry">
        <p>{song["im:name"]["label"]}</p>
        <p>{song["im:artist"]["label"]}</p>
        </div>
        <div className="chart-entry">
        <a href={song["link"][1]["attributes"]["href"]}>Sample Track</a>
        <p>Purchase for {song["im:price"]["label"]}</p>
        </div>
      </div>
    )
  });

  return (
    <div className="chart">
    {charts}
    </div>
  )
}

export default ChartList
