// generateImageImports.js

const fs = require("fs");

const imagesFolder = "../images";
const outputFile = "./imageImports.txt";

const imageFiles = fs.readdirSync(imagesFolder);
const importStatements = imageFiles
  .map(
    (file, index) =>
      `import ${file.replace(
        ".png",
        ""
      )} from '../../../../assets/images/${file}';`
  )
  .join("\n");

fs.writeFileSync(outputFile, importStatements);
