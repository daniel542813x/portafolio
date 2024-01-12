import fs from 'fs';

export const readFilesFromDirectory = (directoryPath) => {
    return fs.readdirSync(directoryPath);
    }
