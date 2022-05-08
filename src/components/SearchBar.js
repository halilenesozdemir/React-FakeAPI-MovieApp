import React from 'react';

class SearchBar extends React.Component {
  handleFormSubmit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row mt-3 mb-5">
          <div className="col-10">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie" // Değeri React tarafından kontrol edilebilen form elemanı ( Controlled component )
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-md btn-danger"
              style={{ float: 'right' }}
            >
              Add Movie
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchBar;
