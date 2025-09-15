/**
 * src/components/EquipmentList.jsx
 * 
 * This component fetches and displays a list of equipment categories.
 * It uses a custom hook to retrieve the data and renders each category using the EquipmentCategory component
 */

import React from "react";
import { useEquipmentData } from "../hooks/useEquipmentData";
import EquipmentCategory from "./EquipmentCategory";

const EquipmentList = () => {
  const { data, loading } = useEquipmentData();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="space-y-10 p-6">
      {Object.entries(data).map(([category, items]) => (
        <EquipmentCategory key={category} title={category} items={items} />
      ))}
    </div>
  );
};

export default EquipmentList;
