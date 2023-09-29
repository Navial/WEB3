import Stat from "../Stat/Stat";

const Statistics = ({ stats }) => {
  console.log(stats[3].value);
  if (stats[3].value <= 0) {
    return <h3>No feedback given</h3>;
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <table>
          <tbody>
            {stats.map((stat) => (
              <tr key={stat.id}>
                <Stat id={stat.id} text={stat.text} value={stat.value} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Statistics;