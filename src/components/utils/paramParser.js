// Converts the text from the uploaded file into a parameter array

export function parseParamFile(text) {
    const lines = text.split("\n");
    const params = [];
  
    lines.forEach((line) => {
      if (line.startsWith("#") || line.trim() === "") return;
      const splitLine = line.trim().split(/\s+/);
      params.push(splitLine);
    });
  
    return params;
  }
  
  // Converts the parameter array to a dictionary/object
  export function convertParamsToDict(params) {
    const paramsDict = { type: {} };
  
    let currentType = null;
    params.forEach((param) => {
      const [directive, key, value] = param;
  
      if (directive === "type") {
        currentType = key;
        if (!(key in paramsDict.type)) {
          paramsDict.type[key] = {};
        }
      } else if (currentType) {
        if (!(directive in paramsDict.type[currentType])) {
          paramsDict.type[currentType][directive] = {};
        }
        paramsDict.type[currentType][directive][key] = value;
      }
    });
  
    return paramsDict;
  }
  
  // Converts the modified dictionary/object back to a text format for downloading
  export function convertDictToParamText(paramsDict) {
    let paramText = "";
    Object.entries(paramsDict.type).forEach(([typeKey, directives]) => {
      paramText += `type ${typeKey}\n`;
      Object.entries(directives).forEach(([directiveKey, values]) => {
        Object.entries(values).forEach(([key, value]) => {
          paramText += `${directiveKey} ${key} ${value}\n`;
        });
      });
      paramText += "\n";
    });
  
    return paramText;
  }