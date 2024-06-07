import React, {useState, ChangeEvent, FormEvent} from 'react';
import axios from 'axios';
import {Button, Input} from '@material-tailwind/react';
import DataTable from '../components/DataTable';
import Layout from "../layout/Layout.tsx";

interface DataEntry {
    name: string;
    age: number;
    email: string;
}

const HomePage: React.FC = () => {
    const [newEntry, setNewEntry] = useState<DataEntry>({name: '', age: 0, email: ''});

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setNewEntry((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:5000/api/write-csv', [newEntry]);
        if (response.data.message) {
            alert(response.data.message);
        }
    };

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">CSV Reader/Writer</h1>
                <DataTable/>
                <h2 className="text-xl font-bold mt-4">Add New Entry</h2>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <Input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={newEntry.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={newEntry.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-4">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={newEntry.email}
                            onChange={handleChange}
                        />
                    </div>
                    <Button type="submit" color="light-blue">
                        Add
                    </Button>
                </form>
            </div>
        </Layout>
    );
};

export default HomePage;
