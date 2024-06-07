import { readCSV, writeCSV } from '../utils/csvUtils';

interface DataEntry {
    name: string;
    age: number;
    email: string;
}

const inputFilePath = 'input.csv';
const outputFilePath = 'output.csv';

export const getData = async (): Promise<DataEntry[]> => {
    return readCSV(inputFilePath);
};

export const saveData = async (records: DataEntry[]): Promise<void> => {
    return writeCSV(outputFilePath, records);
};
