import "./FaceRecongnition.css";
export default function FaceRecongnition({ imageUrl, boxes }) {
  return (
    <div className="flex justify-center mb-10">
      <div className="absolute mt-4">
        <img width={500} height={500} className="inputimage" src={imageUrl} />
        {boxes.map((box) => {
          return (
            <div
              key={box.topRow}
              className="bounding-box"
              style={{
                top: box.topRow,
                right: box.rightCol,
                bottom: box.bottomRow,
                left: box.leftCol,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
