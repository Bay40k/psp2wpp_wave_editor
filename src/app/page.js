"use client";
import React from "react";
import FileUploader from "@/components/FileUploader";
import SlidersContainer from "@/components/SlidersContainer";
import DownloadButton from "@/components/DownloadButton";
import MarkdownGuideAccordion from "@/../pages/Guide";
import MarkdownCreditsAccordion from "@/../pages/Credits";

export default function Home() {
  const [paramsDict, setParamsDict] = React.useState(null);

  // Function to update the state with new slider values
  const onUpdateParamsDict = (updatedParamsDict) => {
    setParamsDict(updatedParamsDict);
  };

  return (
    <div className="container">
      <h1 style={{ marginTop: "1.5rem" }}>psp2wpp wave editor</h1>
      <div
        style={{
          flexWrap: "wrap",
          display: "flex",
          alignItems: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <h3>Note:</h3>
        <p style={{ margin: "0 0 0 0.5rem" }}>
          For non-color values, start by making small adjustments.
        </p>
      </div>
      <div className="buttonContainer">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ flex: "0 0 auto", marginRight: "1rem" }}>
            Upload Waveparams (.txt)
          </div>
          {/* load default file /public/waveparam_effects_default_0512_01.txt */}
          <FileUploader
            onFileLoaded={setParamsDict}
            loadDefaultFile={"waveparam_effects_default_0512_01.txt"}
            accept=".txt"
          />
        </div>

        {paramsDict && <DownloadButton paramsDict={paramsDict} />}
      </div>
      <MarkdownGuideAccordion />
      <MarkdownCreditsAccordion />
      {paramsDict && (
        <SlidersContainer
          paramsDict={paramsDict}
          onUpdateParamsDict={onUpdateParamsDict}
        />
      )}
    </div>
  );
}
