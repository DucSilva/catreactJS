import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoadingComponent from '../Home/LoadingComponent'
import './BreedList.css'

const API_BREEDS = 'https://api.thecatapi.com/v1/breeds'

export default class BreedListComponent extends Component {
  constructor() {
    super()
    this.state = {
      breeds: [],
      isLoading: true,
      error: null,
      searchString: '',
      filteredBreeds: [],
      isHovered: false,
    }
    this.updateSearchString = this.updateSearchString.bind(this)

  }

  async fetchBreeds() {
    try {
      let response = await fetch(API_BREEDS)
      response = await response.json()
      // console.log('responebreeds==>>',response)
      this.setState({
        ...this.state,
        breeds: response,
        filteredBreeds: response,
        isLoading: false
      })
    } catch (error) {
      // console.log(error)
      this.setState({
        ...this.state,
        error,
        isLoading: false
      })
    }
  }

  updateSearchString(event) {
    this.setState({
      ...this.state,
      searchString: event.target.value,
      filteredBreeds: (event.target.value !== '')

        ? this.state.breeds.filter(breed => {
          return breed.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
        })
        : this.state.breeds
    })
  }

  async componentWillMount() {
    await this.fetchBreeds()
  }

  render() {

    const { isLoading, filteredBreeds, error } = this.state

    return (
      <div className="container pt-3 pb-5">
        {(error ? <p>{error}</p> : null)}
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.updateSearchString}
          placeholder="Search cat breeds..."
          className="form-control"
        />
        <div className="breed-counter">
          There are {filteredBreeds.length} cat breed matches
        </div>
        <hr style={{ "border": "solid 1px #537c8e" }} />
        <div className="breed-list">
          {
            isLoading
              ? (<LoadingComponent />)
              : (filteredBreeds.map(breeds => {
                // console.log('breeds====>>>>', breeds)
                const { id, name } = breeds
                return (
                  <Link
                    to={`/breeds/${id}`}
                    className="mybtn"
                    id="breed-item-btn"
                    key={id}>
                    <span>{name}</span>
                  </Link>
                )
              }))
          }
        </div>
      </div>
    )
  }

}
