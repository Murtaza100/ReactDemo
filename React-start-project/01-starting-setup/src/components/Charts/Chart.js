import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {


    const dataEntryValues = props.dataEntry.map(dataEntries=> dataEntries.value);
    const maxValue = Math.max(...dataEntryValues);

  return (
    <div className="chart">
      {props.dataEntry.map((dataEntry) => (
        <ChartBar
          key={dataEntry.label}
          value={dataEntry.value}
          maxValue={maxValue}
          label={dataEntry.label}
        />
      ))}
    </div>
  );
};

export default Chart;
