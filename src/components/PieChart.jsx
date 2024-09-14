// src/components/PieChart.jsx
import { ResponsivePie } from "@nivo/pie";
import { useTheme, alpha } from "@mui/material";
import { mockPieData as data } from "../data/mockData";

const PieChart = () => {
  const theme = useTheme(); // Access MUI's theme

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.text.primary, // Using MUI palette
            },
          },
          legend: {
            text: {
              fill: theme.palette.text.primary, // Using MUI palette
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.grey[100], // Using MUI palette
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.text.primary, // Using MUI palette
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.text.primary, // Legend text color from palette
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.grey[100]} // Using MUI palette
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: alpha(theme.palette.text.primary, 0.3), // Using MUI palette with opacity
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: alpha(theme.palette.text.primary, 0.3), // Using MUI palette with opacity
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: theme.palette.text.primary, // Using MUI palette
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: theme.palette.text.primary, // Using MUI palette
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
