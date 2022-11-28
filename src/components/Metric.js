export const Metric = (props) => {
  console.log(props.title);
  const { title, time, lastWeekTime } = props;

  return (
    <section>
      <div style={{ height: 20, backgroundColor: "" }}></div>
      <h2>{title}</h2>
      <p>{time}</p>
      <p>{lastWeekTime}</p>
    </section>
  );
};
