function Clock(props) {
  const { time, location } = props;
  return (
    <div className="clock card p-5 m-3">
      <h3 className="text-primary">{time}</h3>
      <h5 className="mt-3 text-success">{location}</h5>
    </div>
  );
}
export default Clock;
