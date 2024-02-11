import React from "react";
import Slider from "./Slider";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SlidersContainer({ paramsDict, onUpdateParamsDict }) {
  const handleSliderChange = (typeKey, directiveKey, key, newValue) => {
    const updatedParamsDict = JSON.parse(JSON.stringify(paramsDict));
    updatedParamsDict.type[typeKey][directiveKey][key] = newValue;
    onUpdateParamsDict(updatedParamsDict);
  };

  const getSliderProps = (key) => {
    const defaultProps = { min: 0, max: 100, step: 0.01 }; // Default props
    // Conditions for slider props based on key
    const sliderPropsConditions = [
      {
        check: (key) => key.includes("translation") || key.includes("rotation") || key.includes("cross_section"),
        props: {...defaultProps, min: key.includes(".w") ? 0.01 : -5, max: 5},
      },
      {
        check: (key) => key.includes("density"),
        props: {...defaultProps, min: 1, max: 10},
      },
      {
        check: (key) =>
          key.includes("pitch") ||
          key.includes("roll") ||
          key.includes("zoom") ||
          key.includes("wind_dir") ||
          key.includes("theta_phi"),
        props: { ...defaultProps, min: -10, max: 10 },
      },
      {
        check: (key) => key === "uv_scale",
        props: { ...defaultProps, min: 0.1, max: 1 },
      },
      {
        check: (key) => key === "uv_rotate",
        props: { ...defaultProps, max: 360, step: 1 },
      },
      {
        check: (key) =>
          key === "side_angle" ||
          key === "horizon_angle" ||
          key === "horizon_blend_range" ||
          key === "horizon_curvature" ||
          key === "sky_blend",
        props: { ...defaultProps, min: -1, max: 1 },
      },
      {
        check: (key) =>
          key === "xscale" ||
          key === "radius" ||
          key === "A" ||
          key === "sky_blend_range" ||
          key === "fade",
        props: { ...defaultProps, max: 10 },
      },
      {
        check: (key) => key === "gravity",
        props: { ...defaultProps, max: 20 },
      },
      {
        check: (key) => key === "logA",
        props: { ...defaultProps, min: -30, max: -10 },
      },
      {
        check: (key) => key === "patch_size",
        props: { ...defaultProps, max: 1000, step: 1 },
      },
      {
        check: (key) => key === "wind",
        props: { ...defaultProps, max: 100, step: 1 },
      },
      {
        check: (key) =>
          key.includes(".r") ||
          key.includes(".g") ||
          key.includes(".b") ||
          key.includes(".a") ||
          key === "sky_blend_start" ||
          key.includes("edge_fog") ||
          key.includes("distortion_scale") ||
          key === "wave_fog_alpha",
        props: { ...defaultProps, max: 1 },
      },
      {
        check: (key) => key.includes("scale"),
        props: { ...defaultProps, min: key.includes(".w") ? 0.01 : defaultProps.min },
      }
    ];

    // Find the first condition that matches the key and return its props
    const matchingCondition = sliderPropsConditions.find((condition) =>
      condition.check(key)
    );
    return matchingCondition
      ? matchingCondition.props
      : defaultProps; // Return default props if no matching condition is found
  };

  const getColorValues = (typeKey, key) => {
    // Simplifying color value extraction based on corrected understanding of paramsDict structure
    const rKey = `${key}.r`;
    const gKey = `${key}.g`;
    const bKey = `${key}.b`;
    const r = parseFloat(paramsDict.type[typeKey].set_value[rKey]) || 0; // Assuming 'Select' but should be dynamic
    const g = parseFloat(paramsDict.type[typeKey].set_value[gKey]) || 0;
    const b = parseFloat(paramsDict.type[typeKey].set_value[bKey]) || 0;
    return { r, g, b };
  };

  const sliderGroups = Object.keys(paramsDict.type).map((typeKey) => (
    <Card key={typeKey} className="card noColumnBreak">
      <CardHeader>
        <CardTitle>{typeKey}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="cardContent">
          {Object.keys(paramsDict.type[typeKey]).map((directiveKey) =>
            Object.keys(paramsDict.type[typeKey][directiveKey]).map((key) => {
              const { min, max, step } = getSliderProps(key);
              let colorValues = null;
              // ignore density and attn keys
              if (key.match(/(?<!density|attn)\.(r|g|b)$/)) {
                // Checks if it's a color-related key
                const baseKey = key.split(".")[0]; // Extract base key for colors (e.g., "color" or "selecter[0]")
                colorValues = getColorValues(typeKey, baseKey);
              }
              return (
                <Slider
                  key={key}
                  directiveKey={key}
                  value={paramsDict.type[typeKey][directiveKey][key]}
                  onChange={(newValue) =>
                    handleSliderChange(typeKey, directiveKey, key, newValue)
                  }
                  min={min}
                  max={max}
                  step={step}
                  colorValues={colorValues}
                />
              );
            })
          )}
        </div>
      </CardContent>
    </Card>
  ));

  return <div className="sliderContainer">{sliderGroups}</div>;
}
