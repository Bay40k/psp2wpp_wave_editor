import React from "react";
import { Input } from "@/components/ui/input";
import { parseParamFile, convertParamsToDict } from "./utils/paramParser";

export default function FileUploader({ onFileLoaded, ...props }) {
  // code for when the element displays for the first time:
  React.useEffect(() => {
    if (props.loadDefaultFile) {
      console.log("loading default file " + props.loadDefaultFile);
      fetch(props.loadDefaultFile)
        .then((response) => response.text())
        .then((text) => {
          const params = parseParamFile(text);
          const paramsDict = convertParamsToDict(params);
          onFileLoaded(paramsDict);
        });
    }
  }, [props.loadDefaultFile, onFileLoaded]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        const params = parseParamFile(text); // Assuming parseParamFile is available
        const paramsDict = convertParamsToDict(params);
        onFileLoaded(paramsDict);
      };
      reader.readAsText(file);
    }
  };

  return (
    <Input type="file" onChange={handleFileChange} accept={props.accept} />
  );
}
