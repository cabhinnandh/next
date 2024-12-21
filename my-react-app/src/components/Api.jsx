import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
      
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, []); 

    return (
        <div>
            <h2>API Data</h2>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell>City</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((item) => (
                            <TableRow key={item.id} >
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.username}</TableCell>
                                <TableCell>{item.address.city}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Api;
