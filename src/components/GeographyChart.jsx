import { useTheme } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { useSelector } from "react-redux";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme(); // Material-UI theme
  const { currentTheme } = useSelector((state) => state.theme); // Access the current theme from Redux

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: currentTheme?.greyMain || theme.palette.grey[500], // Use dynamic color from Redux
            },
          },
          legend: {
            text: {
              fill: currentTheme?.text || theme.palette.text.primary, // Use dynamic text color
            },
          },
          ticks: {
            line: {
              stroke: currentTheme?.greyMain || theme.palette.grey[500], // Use dynamic color
              strokeWidth: 1,
            },
            text: {
              fill: currentTheme?.text || theme.palette.text.primary, // Use dynamic text color
            },
          },
        },
        legends: {
          text: {
            fill: currentTheme?.text || theme.palette.text.primary, // Legend text color
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor={currentTheme?.greyMain || "#666666"} // Dynamic unknown color
      label="properties.name"
      valueFormat=".2s"
      projectionScale={isDashboard ? 40 : 150}
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      legends={
        !isDashboard
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: currentTheme?.text || theme.palette.text.primary, // Dynamic text color
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
