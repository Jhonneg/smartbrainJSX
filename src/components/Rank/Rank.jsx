export default function Rank({ name, entries }) {
  return (
    <div>
      <div className="text-3xl text-center text-white">
        {`${name}, your rank is ...`}
      </div>
      <div className="text-5xl text-center text-white">{entries}</div>
    </div>
  );
}
