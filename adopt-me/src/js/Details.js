import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: animal.contact.address.city,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Happy Friday.....</h1>;
    }

    const { animal, breed, location, media, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <button>Adopt Me!</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
