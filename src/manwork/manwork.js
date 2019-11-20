import React from 'react';
import '../style.css';


function manwork() {
  return(  
  <div className="container woork" id="work">
       <h2>WORK</h2>
       <div className="row">
                <div className="or-line">
      </div>
  </div>
                    <p className="work-p"> I have traced the Rebel spies to her. Now she is my only 
                    link to finding their secret base.<br/> You don't believe in the
                    Force, do you?</p>
  
                   <div id="carouselExampleCaptions" className="carousel slide carousel-content" data-ride="carousel">
                              <ol className="carousel-indicators">
                                  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                                  <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                                  <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                              </ol>
                  </div>

                <div className="carousel-inner">
                             <div className="carousel-item active">
                                   <img src="assets/images/accounting-administration-books-267582.jpg"
                                    className="d-block w-100" alt="Reading a book"/>
                                   <div className="carousel-caption d-none d-md-block">
                                        <p className="carousel-text-info">Reading a book</p>
                                   </div>
                              </div>

                             <div className="carousel-item">
                                    <img src="assets/images/action-adventure-challenge-461593.jpg" className="d-block w-100"
                                    alt="Impossible Moment"/>
                                    <div className="carousel-caption d-none d-md-block">
                                       <p className="carousel-text-info">What i like about photographs is that they capture a moment that’s gone forever, impossible to
                                        reproduce.</p>
                                    </div>
                             </div>

                              <div className="carousel-item">
                                      <img src="assets/images/accessory-blur-brand-293229.jpg" className="d-block w-100"
                                        alt="Be Content"/>
                                    <div className="carousel-caption d-none d-md-block">
                                     <p className="carousel-text-info">Be content with who you are</p>
                                    </div>
                              </div>

              <div className="carousel-item">
                  <img src="assets/images/arabica-aroma-aromatic-2299028.jpg" className="d-block w-100"
                      alt="The brain needs Caffeine"/>
                  <div className="carousel-caption d-none d-md-block">
                      <p className="carousel-text-info">Brain needs more caffeine</p>
                  </div>
              </div>

              <div className="carousel-item">
                  <img src="assets/images/black-and-white-blur-cameras-1422218.jpg"
                      className="d-block w-100" alt="Taking Pics"/>
                  <div className="carousel-caption d-none d-md-block">
                      <p className="carousel-text-info">Taking pictures is savoring life intensely, every hundredth of a second.</p>
                  </div>
          
    
          </div>  
      </div>
                                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                                </a>
      </div>

    
  )
}
export default manwork;