import React, { Component } from "react";
import NewsDetail from "./NewsDetail";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class NewsComponent extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=11b224f568394ad2b99ca4dcf540c0c1&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
  this.updateNews();
  }

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 }, this.updateNews);
  };

  render() {
    return (<>
        <h2 className="d-flex justify-content-center">DailySpark- Top Headlines.</h2>
      <div className="container my-3  d-flex align-items-center justify-content-space-between  flex-column">
        {this.state.loading && <Spinner />}
        <div className="row ">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-md-3 my-2 container d-flex align-items-center justify-content-center  flex-column "
                  key={element.url}
                >
                  <NewsDetail
                    author={element.author}
                    date={element.publishedAt}
                    title={
                      element.title ? element.title.slice(0, 45) + "..." : " "
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88) + "..."
                        : " "
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    pageSize={6}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-primary btn-sm "
            disabled={this.state.page <= 1}
            onClick={this.handlePrev}
          >
            Previous &larr;
          </button>
          <button
            className="btn btn-primary btn-sm "
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNext}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    
    
      </>
      );
  }
}
