export default function Profile({ isProfileOpen, toggleModal }) {
  return (
    <div className="bg-slate-500 fixed flex content-center justify-center top-0 left-0 w-full h-full posit">
      <button className="btn btn-primary" onClick={toggleModal}>
        Click
      </button>
    </div>
  );
}
