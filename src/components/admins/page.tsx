import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataTableDemo, User } from "./Data-table"; // Ensure this path is correct
import backend_url from '../../../api/index';
import { Spinner } from "flowbite-react";

export default function DemoPage() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${backend_url}/profile/users`);
        const users: User[] = response.data;
        console.log(response);
        setData(users);
        setError(null); // Clear any previous errors
      } catch (error) {
        setError(error.message || 'An error occurred'); // Set the actual error message
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="flex items-center justify-center"><Spinner aria-label="Loading" /></div>;
  if (error) return <div>Error loading data: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTableDemo data={data} />
    </div>
  );
}
