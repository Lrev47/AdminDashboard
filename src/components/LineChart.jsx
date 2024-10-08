import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme(); // Material-UI theme
  const { currentTheme } = useSelector((state) => state.theme); // Access the current theme from Redux

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#888888", // Hardcoded grey color for axis lines
            },
          },
          legend: {
            text: {
              fill: currentTheme?.text || theme.palette.text.primary, // Dynamic text color
            },
          },
          ticks: {
            line: {
              stroke: "#888888", // Hardcoded grey color for tick lines
              strokeWidth: 1,
            },
            text: {
              fill: currentTheme?.text || theme.palette.text.primary, // Dynamic text color
            },
          },
        },
        legends: {
          text: {
            fill: currentTheme?.text || theme.palette.text.primary, // Dynamic legend text color
          },
        },
        tooltip: {
          container: {
            color: currentTheme?.primary || theme.palette.primary.main, // Tooltip primary color
          },
        },
      }}
      colors={{ scheme: "paired" }} // Hardcoded color scheme for the line colors
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // Legend for the x-axis
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // Number of tick marks on the y-axis
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // Legend for the y-axis
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
