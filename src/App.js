import React from "react";
import BaseTable, { Column } from 'react-base-table';
import 'react-base-table/styles.css';
import "./App.css";
const columns = [
  {
    key: 'id',
    title: 'ID',
    dataKey: 'id',
    width: 150,
    frozen: Column.FrozenDirection.LEFT, // Freeze this column to the left
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 100,
  },
  {
    key: 'age',
    title: 'Age',
    dataKey: 'age',
    width: 100,
  },
  {
    key: 'salary',
    title: 'Salary',
    dataKey: 'salary',
    width: 100,
  },
  {
    key: 'email',
    title: 'Email',
    dataKey: 'email',
    width: 150,
    frozen: Column.FrozenDirection.RIGHT, 
  },
];

// Sample data
const data = [
  { id: 1, name: "John", age: 30,salary:"50000" ,email: 'john@example.com' },
  { id: 2, name: "Doe", age: 25,salary:"35000" ,email: 'doe@example.com' },
  // Add more data as needed
];

const App = () => {
  return (
    <div className="App">
      <p className="text1">React base table with fixed colums as id and email</p>
      <BaseTable
        columns={columns}
        data={data}
        fixed // Enable fixed/frozen columns
        width={500}
        height={400}
      />
    </div>
  );
};

export default App;
