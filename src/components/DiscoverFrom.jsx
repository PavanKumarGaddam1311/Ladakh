import React from "react";
const DiscoverFrom = () => {
  const testimonials = [
    {
      name: "Arjun Raghav",
      rating: "⭐⭐⭐⭐⭐",
      image:
        "https://plus.unsplash.com/premium_photo-1664298917721-492bc002899b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFkYWtofGVufDB8fDB8fHww",
    },
  ];

  return (
    <>
      <h2 className="heading">Discover</h2>
      <section className="discover">
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="comment">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmUlMjBzbWFsbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt={testimonial.name}
                  width="50px"
                  height="50px"
                  className="image"
                />
                <h3>{testimonial.name}</h3>
              </div>
              <p className="rating">{testimonial.rating}</p>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.{" "}
                <a href="read more">read more</a>
              </p>
            </div>
          ))}
        </div>

        <div>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                src="https://plus.unsplash.com/premium_photo-1664298917721-492bc002899b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFkYWtofGVufDB8fDB8fHww"
                alt={testimonial.name}
                className="image-pic"
              />
              <div className="testimonials">
                <div className=" comment">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmUlMjBzbWFsbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt={testimonial.name}
                    className="image"
                    width="50px"
                    height="50px"
                  />
                  <h3>{testimonial.name}</h3>
                </div>
                <p className="rating">{testimonial.rating}</p>
                <p>
                  I am writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me.{" "}
                  <a href="read more">read more</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <div className="comment">
                <img
                  src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmUlMjBzbWFsbHxlbnwwfHwwfHx8MA%3D%3D"
                  alt={testimonial.name}
                  width="50px"
                  height="50px"
                  className="image"
                />
                <h3>{testimonial.name}</h3>
              </div>
              <p className="rating">{testimonial.rating}</p>
              <p>
                I am writing this after reflecting on my one month stay with
                Bricabin in Ladakh. Right from picking us up at the airport to
                dropping us back there after a month, Urgan was very responsible
                and took good care of my friends and me.{" "}
                <a href="read more">read more</a>
              </p>
            </div>
          ))}
          <div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial">
                <div className="comment">
                  <img
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmUlMjBzbWFsbHxlbnwwfHwwfHx8MA%3D%3D"
                    alt={testimonial.name}
                    width="50px"
                    height="50px"
                    className="image"
                  />
                  <h3>{testimonial.name}</h3>
                </div>
                <p className="rating">{testimonial.rating}</p>
                <p>
                  I am writing this after reflecting on my one month stay with
                  Bricabin in Ladakh. Right from picking us up at the airport to
                  dropping us back there after a month, Urgan was very
                  responsible and took good care of my friends and me.{" "}
                  <a href="read more">read more</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default DiscoverFrom;
