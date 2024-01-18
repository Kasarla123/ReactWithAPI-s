import React, { useState, useEffect } from 'react';
import './LatestNews.css';

export default function LatestNews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=d8419c5a9fba47418384fa084a0a02c0')

      .then((res) => res.json())
      .then((json) => {
        setData(json.articles);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, []);

  return (
    
    <div className='container-fluid'>
    <h2 className="content">Explore the Latest News</h2>
      <div className="row">
        {data.map((n) => (
          <div key={n.title} className='col-md-3 mb-4 mt-3'>
            <div className="card custom-card card w-100  m-0 d-flex flex-column h-100">
              <img src={n.urlToImage} className="card-img-top img-fluid" alt=" " />
              <div className="card-body">
                <h5 className="card-title">{n.author}</h5>
                <p className="card-text">{n.title}</p>
                <a href={n.url} target='_blank' rel="noopener noreferrer" className="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


