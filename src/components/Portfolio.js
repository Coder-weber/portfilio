import React from 'react';
const Porfolio =(props) =>{
  
    let resumeData = props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item" style={{width:'48%'}}>
                  <div className="item-wrap">
                    <a href={`${item.link}`} target="_blank">
                      <img src={`${item.imgurl}`} onclick={window.open(`${item.link}`, '_blank')} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
export default Porfolio;