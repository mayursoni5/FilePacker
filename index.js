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
  if (ext != "js" && ext != "json" && file.split(".").length > 1) {
    if (fsx.existsSync(path.join(basepath, ext))) {
      //Moving existing files in folder
      console.log("The folder for ", ext, "extension is already exists");
      console.log("Moving", file, "in", ext, "folder.");
      fs.rename(path.join(basepath, file), path.join(basepath, ext, file));
    } else {
      console.log("The folder for", ext, "is not exist!!");
      console.log("Creating", ext, "folder....");
      fs.mkdir(ext);
      console.log("Moving", file, "in", ext, "folder.");
      fs.rename(path.join(basepath, file), path.join(basepath, ext, file));
    }
  }
}
