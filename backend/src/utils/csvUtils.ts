import fs from 'fs';
import csv from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';

interface DataEntry {
    name: string;
    age: number;
    email: string;
}

export const readCSV = (filePath: string): Promise<DataEntry[]> => {
    return new Promise((resolve, reject) => {
        const results: DataEntry[] = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (data: DataEntry) => results.push(data))
            .on('end', () => resolve(results))
            .on('error', (error) => reject(error));
    });
};

export const writeCSV = (filePath: string, records: DataEntry[]): Promise<void> => {
    const csvWriter = createObjectCsvWriter({
        path: filePath,
        header: [
            { id: 'name', title: 'Name' },
            { id: 'age', title: 'Age' },
            { id: 'email', title: 'Email' },
        ],
    });

    return csvWriter.writeRecords(records);
};
