import Navbar from "../Navbar/Navbar";

export default function Home() {
  return (
    <div
      style={{
        "background-image": `url(${"https://deekshasharma.vercel.app/img/bg05.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar />
      <div
        className="centre"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignitems: "center",
          marginTop: "200px",
        }}
      >
        <div className="centre-text">
          <h1
            className="top-text"
            style={{
              backgroundImage: `linear-gradient(271deg, #a0e9ff 30%, #a162e8 50%, #f093b0 70%, #edca85 94%)`,
            }}
          >
            Hi There! 🙏
          </h1>
          <h1 className="middle-text">
            I'M{" "}
            <span
              style={{
                marginLeft: "-58px",
                backgroundImage: `linear-gradient(271deg, #a0e9ff 30%, #a162e8 50%, #f093b0 70%, #edca85 94%)`,
              }}
            >
              Myself Raghav Chauhan
            </span>
            <h1>
              <span
                style={{
                 
                  backgroundImage: `linear-gradient(271deg, #a0e9ff 30%, #a162e8 50%, #f093b0 70%, #edca85 94%)`,
                }}
              >
                I am a Full Stack Developer
              </span>
            </h1>
          </h1>
        </div>
        <div
          className="centre-logo"
          style={{ width: "420px", height: "300px", overflow: "hidden" }}
        >
          <img
            src="https://img.freepik.com/free-vector/colourful-illustration-programmer-working_23-2148281410.jpg?size=626&ext=jpg"
            alt="image"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
