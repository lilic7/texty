import { Request, Response } from 'express';
import { getData, saveData } from '../services/dataService';

export const fetchData = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

export const writeData = async (req: Request, res: Response): Promise<void> => {
    try {
        const records = req.body;
        await saveData(records);
        res.json({ message: 'CSV file was written successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to write data' });
    }
};
