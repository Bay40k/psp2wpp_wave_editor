
import React from 'react';
import { Button } from "@/components/ui/button"
import { convertDictToParamText } from './utils/paramParser';

export default function DownloadButton({ paramsDict }) {
  const handleDownload = () => {
    const paramText = convertDictToParamText(paramsDict); // Assuming convertDictToParamText is available
    const element = document.createElement("a");
    const file = new Blob([paramText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "modifiedParams.txt";
    document.body.appendChild(element);
    element.click();
  };

  return <Button className="downloadButton" variant="outline" onClick={handleDownload}>Download Modified Params</Button>;
}