import "./styles.css"; 

const FaceRecongnition = ({ imageUrl, boxes }) => {
  return (
    <div className="flex justify-center mb-10">
      <div className="absolute mt-4">
        <img
          className="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        {boxes.map((box, i) => (
          <div
            key={i}
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecongnition;
