export default function ImageLinkForm({ onInputChange, onSubmit }) {
  return (
    <div>
      <p className="text-xl my-6 text-center">
        {"This Magic brain will detect faces, give it a try"}
      </p>
      <div className="flex justify-center">
        <div className="bg-neutral w-96 p-10 rounded-md shadow-2xl">
          <input
            className="py-3 p-2 text-center w-2/3"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="btn btn-accent rounded-none btn-outline"
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
}
