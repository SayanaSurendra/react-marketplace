
import React from 'react';

const advertisementsData = [
  {
    title: "Ad 1",
    description: "This is the first advertisement",
    image: "https://placehold.co/150",
    contact: "contact1@example.com",
  },

  {
    title: "Ad 2",
    description: "This is the second advertisement",
    image: "https://placehold.co/150",
    contact: "contact2@example.com",
  },
  {
    title: "Ad 3",
    description: "This is the third advertisement",
    image: "https://placehold.co/150",
    contact: "contact3@example.com",
  },
  {
    title: "Ad 4",
    description: "This is the fourth advertisement",
    image: "https://placehold.co/150",
    contact: "contact4@example.com",
  },
  {
    title: "Ad 5",
    description: "This is the fifth advertisement",
    image: "https://placehold.co/150",
    contact: "contact5@example.com",
  },
  {
    title: "Ad 6",
    description: "This is the sixth advertisement",
    image: "https://placehold.co/150",
    contact: "contact6@example.com",
  }
];

const Advertisement = () => {
  return (
    <div className="container">
      <div class="mt-4">
        <h4>Advertisement List</h4>
      </div>
      <div className="row my-5 align-items-center justify-content-center">
        {advertisementsData.map((ad) => (
          <div className="col-md-4 mb-3" >
            <div className="advertisement-card card">
              <img src={ad.image} alt={ad.title} className="card-img-top px-2" />
              <div className="card-body">
                <h5 className="card-title">{ad.title}</h5>
                <p className="card-text">{ad.description}</p>
                <p>Contact: {ad.contact}</p>
              </div>
              <div className="card-footer text-body-secondary  justify-content-center ">
                <button className="btn btn-info ">Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;