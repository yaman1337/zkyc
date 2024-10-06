import React from "react";
import { Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

// Define the data type for each row
interface VerificationHistory {
  key: string;
  serviceName: string;
  date: string;
  status: "Verified" | "Pending" | "Rejected";
  verifiedBy: string;
}

export const ThirdPartyVerificationHistory: React.FC = () => {
  // Dummy data
  const data: VerificationHistory[] = [
    {
      key: "1",
      serviceName: "DeFi Solutions",
      date: "2024-09-25",
      status: "Verified",
      verifiedBy: "3VSx...Xf4y",
    },
    {
      key: "2",
      serviceName: "CryptoPay",
      date: "2024-08-19",
      status: "Pending",
      verifiedBy: "2GTx...Hf7z",
    },
    {
      key: "3",
      serviceName: "BlockFinance",
      date: "2024-07-10",
      status: "Verified",
      verifiedBy: "5HTv...Rf8w",
    },
    {
      key: "4",
      serviceName: "MetaBank",
      date: "2024-06-18",
      status: "Rejected",
      verifiedBy: "9AVz...Tp3m",
    },
  ];

  // Define table columns with types
  const columns: ColumnsType<VerificationHistory> = [
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
      render: (text) => <span className="font-semibold">{text}</span>,
    },
    {
      title: "Verification Date",
      dataIndex: "date",
      key: "date",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color =
          status === "Verified"
            ? "green"
            : status === "Pending"
            ? "yellow"
            : "red";
        return (
          <Tag color={color} className="px-3 py-1 rounded-lg text-sm">
            {status}
          </Tag>
        );
      },
    },
    {
      title: "Verified By",
      dataIndex: "verifiedBy",
      key: "verifiedBy",
      render: (text) => <span>{text}</span>,
    },
  ];

  return (
    <div className="bg-gray-200 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        3rd Party Verification History
      </h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="bg-white p-4 rounded-lg shadow-md"
        bordered
      />
    </div>
  );
};
