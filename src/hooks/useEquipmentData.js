/**
 * src/hooks/useEquipmentData.js
 * 
 * Custom hook to fetch and structure equipment data from a JSON file.
 */

import { useEffect, useState } from "react";
import jsonData from "../data/equipment.json";

export function useEquipmentData() {
  const [data, setData] = useState({});

  useEffect(() => {
    const grouped = {};
    jsonData.forEach(item => {
      const cat = item.category?.trim();
      if (!cat) return;
      if (!grouped[cat]) grouped[cat] = [];
      grouped[cat].push({
        manufacturer: item.manufacturer,
        model: item.model,
        quantity: item.quantity,
      });
    });
    setData(grouped);
  }, []);

  return { data, loading: false };
}
