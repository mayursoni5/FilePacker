import fs from "fs/promises";
import fsx from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const file = fileURLToPath(import.meta.url);
const currPath = dirname(fileURLToPath(import.meta.url));
// console.log(file);
// console.log(dircname);

const basepath = currPath; //returns the current working directory
// console.log(basepath);
let files = await fs.readdir(basepath);

// console.log(files);

for (const file of files) {
  console.log("Running for", file);
  let ext = file.split(".")[file.split(".").length - 1];
  //   console.log("Extension of file is", ext);

  const folderPath = path.join(basepath, ext + "_files");

  if (
    ext != "js" &&
    ext != "json" &&
    ext != "git" &&
    ext != "gitignore" &&
    file.split(".").length > 1
  ) {
    if (fsx.existsSync(folderPath)) {
      //Moving existing files in folder
      console.log(
        "The folder for ",
        ext,
        "extension is already exists. Named as" + folderPath
      );
      console.log("Moving", file, "in", folderPath);
      fs.rename(path.join(basepath, file), path.join(folderPath, file));
    } else {
      console.log("The folder for", ext, "is not exist!!");
      console.log("Creating", folderPath, "folder....");
      fs.mkdir(folderPath);
      console.log("Moving", file, "in", folderPath);
      fs.rename(path.join(basepath, file), path.join(folderPath, file));
    }
  }
}
