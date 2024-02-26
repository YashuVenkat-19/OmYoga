import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import img2 from "../assets/vector1.jpg";
import img3 from "../assets/theme.png";
import img4 from "../assets/theme2.jpg";
import img5 from "../assets/theme3.jpg";
import img6 from "../assets/theme4.jpg";
import img7 from "../assets/theme5.jpg";

const spanStyle = {
  // padding: "20px",
  background: "#e6e1e1",
  color: "#e63131",
  borderRadius: "20px",
  fontWeight: "bold",
  transition: "0.3s",
  padding: "10px 20px",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "650px",
  // width: "650px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // url: { img2 },
    caption: "Theme 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    // url: { img3 },
    caption: "Theme 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Theme 3",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={spanStyle}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
