import React, { Component } from 'react'
import Flag from 'react-world-flags'
import CatStats from './CatStats'
import SingleBreedImage from './SingleBreedImage'
import LoadingComponent from '../Home/LoadingComponent'
import './SingleBreed.css'


const API_KEY = 'db75f327-f127-4bfc-8af7-503470ab6919'
//API_KEY register at https://thecatapi.com/ with email: nguyenminhduc1327@gmail.com

export default class SingleBreedComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      singleBreed: [],
      data: [],
      isLoading: true,
      id: this.props.match.params.id,
      error: null
    }

  }

  async fetchSingleBreed() {
    const API = `https://api.thecatapi.com/v1/images/search?breed_ids=${this.state.id}&api_key=${API_KEY}`
    // console.log('API===>>>>',API)
    try {
      let response = await fetch(API)
      // console.log(response)
      response = await response.json()
      this.setState({
        singleBreed: response[0].breeds[0],
        data: response[0],
        isLoading: false
      })
    } catch (error) {
      console.log(error)
      this.setState({ error, isLoading: false })
    }
  }

  async componentWillMount() {
    await this.fetchSingleBreed()
    // console.log(this.state)
  }

  render() {
    const { isLoading, singleBreed, data } = this.state
    return (
      <React.Fragment>
        {
          isLoading || !singleBreed
            ? <LoadingComponent />
            : <div className="container-fluid mt-2 mb-5 pb-5">
              <div className="card">
              <SingleBreedImage url={data.url}/>
                <div className="card-body">
                  <h1 className="single-breed-header">{singleBreed.name}</h1>
                  <span className="blockquote">{singleBreed.description}.</span>
                  <br />
                  <div className="badges">
                  {/* Location Flag  */}
                  <span className="badge badge-secondary origin">
                    <Flag
                      code={singleBreed.country_code}
                      height={16} /> {singleBreed.origin}
                  </span>
                  <span className="badge badge-secondary origin">{singleBreed.weight.imperial} kg</span>
                  </div>
                  <hr />
                  {/* Cat Stats in display with stars */}
                  <div className="cat-stars-grid">
                    <div className="cat-stars-item">
                      <CatStats title="Affection Level" rating={singleBreed.affection_level} />
                      <CatStats title="Child Friendly" rating={singleBreed.child_friendly} />
                      <CatStats title="Cat Friendly" rating={singleBreed.cat_friendly} />
                      <CatStats title="Dog Friendly" rating={singleBreed.dog_friendly} />
                    </div>
                    <div className="cat-stars-item2">
                    <CatStats title="Energy Level" rating={singleBreed.energy_level} />
                    <CatStats title="Vocal Level" rating={singleBreed.vocalisation} />
                    <CatStats title="Energy Level" rating={singleBreed.energy_level} />
                    <CatStats title="Intelligence Level" rating={singleBreed.intelligence} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
      </React.Fragment>
    )
  }
}
