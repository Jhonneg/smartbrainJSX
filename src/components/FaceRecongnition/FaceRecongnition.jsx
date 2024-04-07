
const FaceRecongnition = ( imageUrl ) => {
  console.log(imageUrl);
  return (
    <div className="flex justify-center">
      <img height={700} width={700} src={imageUrl} />
    </div>
  );
};

export default FaceRecongnition;
