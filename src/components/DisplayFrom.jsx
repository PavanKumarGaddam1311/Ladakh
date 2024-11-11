import React from "react";

const DisplayFrom = () => {
  return (
    <>
      <div>
        <section className="hero-container">
          <div>
            <h1 className="heading">
              Work from <br />
              Ladakh
            </h1>
            <p>Experience the perfect blend of work and adventure.</p>
          </div>

          <div>
            <img
              src="https://media.istockphoto.com/id/1061972184/photo/landscape-of-snow-mountains-and-mountain-road-to-nubra-valley-in-leh-ladakh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=sgLXL5_pZZ5jyYiGL1h3mLY2XNYH8cSVuLMZBPLz28c="
              alt="Hero Image"
              className="hero-image"
            />
          </div>
        </section>
        <card>
          <div className="display-card">
            <div>
              <h3> CHECK-IN </h3>
              <input type="date" name="stayDuration" className="input" />
            </div>
            <div>
              <h3> CHECK-OUT </h3>
              <input type="date" name="stayDuration" className="input" />
            </div>
            <button className="button">Book</button>
          </div>
        </card>
      </div>
    </>
  );
};
export default DisplayFrom;
