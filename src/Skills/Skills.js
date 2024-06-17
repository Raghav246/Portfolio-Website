export default function Skills() {
  return (
    <div
      style={{
        "background-image": `url(${"https://deekshasharma.vercel.app/img/bg05.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh"
      }}
    >
        <h1 style={{ backgroundImage: `linear-gradient(271deg, #a0e9ff 30%, #a162e8 50%, #f093b0 70%, #edca85 94%)`,textAlign:'center'}}>Skills</h1>
        <div className="box-container">
      <div className="box-1" >
        <h1 className="heading">HTML</h1>
      </div>
      <div className="box-1">
        <h1 className="heading">CSS</h1>
      </div>
      <div className="box-1">
        <h1 className="heading">JS</h1>
      </div>
      <div className="box-1">
        <h1 className="heading">REACTJS</h1>
      </div>
      <div className="box-1">
        <h1 className="heading">NODEJS</h1>
      </div>
      </div>
    </div>
  );
}
