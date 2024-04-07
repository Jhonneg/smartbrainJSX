import "./ImageLinkForm.css";
function ImageLinkForm() {
  return (
    <div>
      <p className="text-xl my-6 text-center">
        {"This Magic brain will detect faces, give it a try"}
      </p>
      <div className="flex justify-center">
        <div className="boxgrandient w-1/3 p-10 rounded-md shadow-2xl">
          <input className="p-2 text-center w-2/3" type="text" />
          <button className="bg-purple-300 w-1/3 py-2">Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;
