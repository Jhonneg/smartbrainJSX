import "./FaceRecongnition.css";
const FaceRecongnition = ({ imageUrl, box }) => {
  return (
    <div className="flex justify-center">
      <div className="absolute mt-4">
        <img className="inputimage" src={imageUrl} height="500" width="500" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecongnition;
