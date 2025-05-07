import style from "../styling/analytics.module.css";
const Analytics = () => {
  const dummy = [
    {
      id: 1,
      name: "Average Reply Time",
      time: "15sec",
      desc: "For highest customer satisfaction rates you should aim to reply to an incoming customer's message in 15 seconds or less. Quick responses will get you more conversations, help you earn customers trust and make more sales.",
    },
    {
      id: 2,
      name: "Resolved Ticket",
      time: "80",
      desc: "A callback system on a website, as well as proactive invitations, help to attract even more customers. A separate round button for ordering a call with a small animation helps to motivate more customers to make calls.",
    },
    {
      id: 1,
      name: "Total Chats",
      time: "1000",
      desc: "This metric Shows the total number of chats for all Channels for the selected the selected period ",
    },
  ];
  return (
    <>
      <div>
        <section>
          <header>Analytics</header>
        </section>
        <section
          style={{
            width: "600px",
            minHeight: "350px",
            border: "1px solid black",
            margin: "30px 0",
          }}
        ></section>
        <div className={style.analysis}>
          <section className={style.points}>
            <h1>{dummy[0].name}</h1>
            <p>{dummy[0].desc}</p>
          </section>
          <section className={style.data}>{dummy[0].time}</section>
          <section className={style.points}>
            <h1>{dummy[1].name}</h1>
            <p>{dummy[1].desc}</p>
          </section>
          <section className={style.data}> {dummy[1].time}%</section>
          <section >
            <h1>{dummy[2].name}</h1>
            <p>{dummy[2].desc}</p>
          </section>
          <section className={style.data}> {dummy[2].time} Chats</section>
        </div>
      </div>
    </>
  );
};
export default Analytics;
