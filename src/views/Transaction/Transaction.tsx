import React, { useState } from "react";
import TransactionFilter from "@components/Transaction/TransactionFilter";
import { Card } from "antd";
import TableTransaction from "@components/Transaction/TableTransaction";

const dataSource = [
    {
        trans_id: 'abc123',
        user_id: '123abc',
        name: "charles",
        type: 'NID',
        number_of_type: "passport",
        status: "success",
        time: "3123"
    }
]


const Transaction = () => {
    const [query, setQuery] = useState();
  const onFinishForm = () => {};

  const columns = [
    {
        dataIndex: 'trans_id',
        key: 'trans_id',
        title: 'Trans ID'
    },
    {
        dataIndex: 'user_id',
        key: 'user_id',
        title: 'User ID'
    },
    {
        dataIndex: 'type',
        key: 'type',
        title: 'Type'
    },
    {
        dataIndex: 'number_of_type',
        key: 'number_of_type',
        title: 'Number of type'
    },
    {
        dataIndex: 'status',
        key: 'status',
        title: 'Status'
    },
    {
        dataIndex: 'time',
        key: 'time',
        title: 'Time'
    },
  ]

  return (
    <>
      <Card>
        <TransactionFilter onFinishForm={onFinishForm} />
      </Card>
      <Card style={{marginTop: 24}}>
        <TableTransaction dataSource={dataSource} columns={columns} query={query} setQuery={setQuery} />
      </Card>
    </>
  );
};

export default Transaction;
