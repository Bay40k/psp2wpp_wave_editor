import React from "react";
import { Slider as UiSlider } from "@/components/ui/slider";

// https://github.com/Princess-of-Sleeping/psp2wpp/blob/417e503d852b380f57df1690c1c416664a70ec73/color/cvt.txt
function floatToHex(fr, fg, fb) {
  const r = Math.round(fr * 255);
  const g = Math.round(fg * 255);
  const b = Math.round(fb * 255);
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export default function Slider({
  directiveKey,
  value,
  onChange,
  min,
  max,
  step,
  colorValues,
  ...props
}) {
  // Convert colorValues to hex color string
  // only show color next to the red slider so there's not 2 extra copies of the color preview
  const hexColor =
    directiveKey.includes(".r") && colorValues
      ? floatToHex(colorValues.r, colorValues.g, colorValues.b)
      : null;

  const sliderElementClass = hexColor ? "slider" : "slider sliderSpanDouble";

  return (
    <>
      <div className="sliderLabel">{directiveKey}:</div>
      <div className="sliderValue">{parseFloat(value).toFixed(2)}</div>
      <div className={sliderElementClass}>
        <UiSlider
          defaultValue={[value]}
          onValueCommit={(values) => onChange(values[0])}
          min={min}
          max={max}
          step={step}
          {...props}
        />
      </div>
      {hexColor ? (
        <div
          className="colorBox"
          style={{
            height: "20px",
            backgroundColor: hexColor,
          }}
        ></div>
      ) : null}
    </>
  );
}
