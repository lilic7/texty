import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody } from '@material-tailwind/react';

interface DataEntry {
    name: string;
    age: number;
    email: string;
}

const DataTable: React.FC = () => {
    const [data, setData] = useState<DataEntry[]>([]);

    const fetchData = async () => {
        const response = await axios.get<DataEntry[]>('http://localhost:5000/api/read-csv');
        setData(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="mt-4">
            <Card>
                <CardBody>
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Name</th>
                            <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Age</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td className="text-left py-3 px-4">{row.name}</td>
                                <td className="text-left py-3 px-4">{row.age}</td>
                                <td className="text-left py-3 px-4">{row.email}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </div>
    );
};

export default DataTable;
