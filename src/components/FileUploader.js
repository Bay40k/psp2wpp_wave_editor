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
          try {
            // Try parsing the file content
            const params = parseParamFile(text);
            const paramsDict = convertParamsToDict(params);
            validateParamsDict(paramsDict);
            onFileLoaded(paramsDict);
          } catch (error) {
            // Handle JSON parse errors or other errors from parseParamFile
            console.error("Error parsing default file:", error);
            alert(`Failed to load default file. Error: ${error.message}`); // Display an error to the user
          }
        });
    }
  }, [props.loadDefaultFile, onFileLoaded]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        try {
          // Try parsing the uploaded file content
          const params = parseParamFile(text);
          const paramsDict = convertParamsToDict(params);
          validateParamsDict(paramsDict);
          onFileLoaded(paramsDict);
        } catch (error) {
          // Handle errors from parsing the uploaded file
          console.error("Error parsing uploaded file:", error);
          alert(
            `Failed to parse uploaded file. Please check the format. Error: ${error.message}`
          ); // Display an error to the user
        }
      };
      reader.readAsText(file);
    }
  };

  // Recursive function to validate each value in the paramsDict, including nested objects
  function validateParamsDict(paramsDict, path = "") {
    if (Object.keys(paramsDict).length === 0) {
      throw new Error("Parsed parameters dictionary is empty.");
    }
    Object.entries(paramsDict).forEach(([key, value]) => {
      const currentPath = path ? `${path}: ${key}` : key;
      if (typeof value === "object" && value !== null) {
        validateParamsDict(value, currentPath); // Recurse into nested objects
      } else {
        if (value == null || value.toString().trim() === "") {
          throw new Error(`Empty value found at path: '${currentPath}'`);
        }
      }
    });
  }

  return (
    <Input type="file" onChange={handleFileChange} accept={props.accept} />
  );
}
