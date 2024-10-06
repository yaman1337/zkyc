import { useWallet } from "@solana/wallet-adapter-react";
import React from "react";

export const KYCStatus = () => {
  // Sample status data; replace this with actual KYC status information
  const statusData = {
    isKycSubmitted: true,
    submissionDate: "2024-10-06",
    kycLevel: "Level 2",
    verificationStatus: "Pending",
    reviewMessage:
      "Your KYC is under review. We will notify you once it is verified.",
  };

  const { publicKey } = useWallet();

  return (
    <div className="flex flex-col p-6 bg-gray-200 rounded-xl shadow-lg text-gray-900 space-y-4">
      {/* Header Section */}
      <div className="text-xl font-semibold text-gray-700 border-b pb-2">
        KYC Status
      </div>

      {/* Wallet Address */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Connected Wallet:</span>
        <span className="text-indigo-600 font-mono">
          {publicKey?.toString()}
        </span>
      </div>

      {/* KYC Submission Status */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">KYC Submission:</span>
        <span
          className={`${
            statusData.isKycSubmitted ? "text-green-600" : "text-red-600"
          } font-semibold`}
        >
          {statusData.isKycSubmitted ? "Submitted" : "Not Submitted"}
        </span>
      </div>

      {/* KYC Level */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">KYC Level:</span>
        <span className="text-gray-700">{statusData.kycLevel}</span>
      </div>

      {/* Verification Status */}
      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-500">Verification Status:</span>
        <span
          className={`${
            statusData.verificationStatus === "Verified"
              ? "text-green-600"
              : "text-yellow-500"
          } font-semibold`}
        >
          {statusData.verificationStatus}
        </span>
      </div>

      {/* Review Message */}
      <div className="text-sm text-gray-500">
        <p>{statusData.reviewMessage}</p>
      </div>

      {/* Submission Date */}
      <div className="text-xs text-gray-400">
        <span>Submitted on: {statusData.submissionDate}</span>
      </div>

      {/* Web3 Info or other Actions */}
      <div className="flex justify-end space-x-2 pt-4">
        <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow">
          View Details
        </button>
        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow">
          Update KYC
        </button>
      </div>
    </div>
  );
};

