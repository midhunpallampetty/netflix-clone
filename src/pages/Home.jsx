import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

function Home() {
  return (
    <>
      <Main />
      <Row rowID={1} title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID={2} title="Upcoming" fetchURL={requests.requestUpcoming} />
      <Row
        rowID={3}
        title="Popular Movies"
        fetchURL={requests.requestPopular}
      />
      <Row rowID={4} title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID={5} title="Trending" fetchURL={requests.requestTrending} />
    </>
  );
}

export default Home;
