import "../assets/Activities.css";
import cake from "../assets/cake3.jpg";
import bg from "../assets/actbg.png";
import hurray from "../assets/drinks2.jpg";
import ppl from "../assets/ppl.jpg";

const Activities = () => {
  return (
    <>
      <div className="overall">
        <div className="person">
          <div className="containerssss">
            <div className="containerssss-inner">
              <img className="circle" src={bg} alt="Circle" />
              <img className="img img1" src={cake} alt="Image 1" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Breathe</div>
          <div className="title">
            "It's your birthday - you don't have to do nothing"
          </div>
        </div>
        <div className="person">
          <div className="containerssss">
            <div className="containerssss-inner">
              <img className="circle" src={bg} alt="Circle" />
              <img className="img img1" src={hurray} alt="Image 1" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Embrace</div>
          <div className="title">
            "Move over coffee, todat is a day for champagne"
          </div>
        </div>
        <div className="person">
          <div className="containerssss">
            <div className="containerssss-inner">
              {/* <img
                className="circle"
                style={{ height: "500px" }}
                src={bg}
                alt="Circle"
              /> */}
              <img className="img img1" src={bg} alt="Image 1" />
            </div>
          </div>
          <div className="divider"></div>
          <div className="name">Delight</div>
          <div className="title">"A little party never killed anybody!"</div>
        </div>
      </div>
    </>
  );
};

export default Activities;
