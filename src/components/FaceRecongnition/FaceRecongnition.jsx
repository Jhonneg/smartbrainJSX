const FaceRecongnition = ({ imageUrl }) => {
  // console.log(imageUrl);
  return (
    <div className="flex justify-center">
      <img src={imageUrl} height={700} width={700} />
    </div>
  );
};

export default FaceRecongnition;
