const FaceRecongnition = ({ imageUrl }) => {
  // console.log(imageUrl);
  return (
    <div className="flex justify-center">
      <img className="inputimage" src={imageUrl} height={500} width={500} />
    </div>
  );
};

export default FaceRecongnition;
