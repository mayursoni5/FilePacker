---

# File Packer - Organize Your Files
This is a simple **File Packer** project written in Node.js that organizes files in a directory into separate folders based on their file extensions. It creates new folders for each extension type and moves the corresponding files into those folders.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [How to Use](#how-to-Use)
- [How It Works](#how-it-works)
- [License](#license)

---

## Prerequisites

Before you begin, ensure that you have the following software installed:

- **[Node.js](https://nodejs.org/en/)**: This project requires Node.js to run. If you don't have it installed, download and install the latest version of Node.js.
  - You can check if Node.js is installed by running the following command:
    ```cmd
    node -v
    ```
  - If it’s not installed, download and install it from the [official website](https://nodejs.org/).

---

## Installation

Follow these steps to set up the project on your machine.

### Option 1: Clone the repository using Git (recommended)

1. **Clone the repository**:

   If you have Git installed, you can clone the repository to your local machine using Git:

   ```cmd
   git clone https://github.com/mayursoni5/FilePacker
   cd FilePacker
   ```

### Option 2: Download the repository as a ZIP file (for users without Git)

1. **Download the ZIP file**:

   If you don't have Git installed, you can download the repository as a ZIP file directly from GitHub:

   - Go to the GitHub page of the project:
     [https://github.com/mayursoni5/FilePacker](https://github.com/mayursoni5/FilePacker)

   - Click the **"Code"** button, then select **"Download ZIP"**.

2. **Extract the ZIP file**:

   After downloading, extract the ZIP file to a location on your machine.

---

## How to Use

Follow these steps to use the **File Packer** and organize your files:

1. **Cut all program files from the `file-packer` folder**:

   - After cloning or downloading the project, open the `file-packer` folder (the folder you just cloned or extracted).
   - **Cut all the files** from the `file-packer` folder, including:
     - `index.js`
     - `package.json`
     - Any other files in the folder
   - **Paste** these program files into the folder that contains the files you want to organize. For example, if you want to organize files in a folder called `my-files`, move all the files from `file-packer` into `my-files`.

2. **Open a terminal in the target folder**:

   - Open a terminal or command prompt in the folder where you moved the program files (`index.js`, `package.json`, etc.).
   - On most systems, you can do this by:
     - **Windows**: Right-click the folder and select "Open in Terminal" or "Open in PowerShell."
     - **macOS/Linux**: Right-click the folder and select "Open Terminal" or "Open in Terminal."

3. **Initialize Node.js project**:

   Inside the target folder, run the following command to initialize a Node.js project. This will create a `package.json` file if you haven't already done so (it might already exist after step 1):

   ```cmd
   npm init -y
   ```

   This step ensures that the Node.js environment is set up correctly.

4. **Run the script to organize your files**:

   Now, you can run the script (`index.js`) to organize the files in the target folder. The script will organize files by extension into new subfolders.

   Run the following command to execute the script:

   ```cmd
   node index.js
   ```

   This will organize all the files in the target folder into new folders based on their extensions (e.g., `.txt` files will go into a `txt_files` folder, `.jpg` files will go into a `jpg_files` folder, etc.).

---

## How It Works

1. **Reads Files from the Directory**:
   The script reads all the files in the specified directory.

2. **Groups Files by Extension**:
   It loops through the list of files, determines the extension of each file, and organizes them into corresponding folders.

3. **Creates Folders**:
   For each file extension, the script checks if a folder with that name already exists. If not, it creates a new folder (e.g., `txt_files` for `.txt` files, `jpg_files` for `.jpg` files, etc.).

4. **Moves Files**:
   It then moves the files into the newly created folders.

---

If you have any issues or suggestions, feel free to [open an issue](https://github.com/mayursoni5/FilePacker/issues) on GitHub.

---
