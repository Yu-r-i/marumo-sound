/**
 * src/hooks/useEquipmentData.js
 * 
 * This custom hook fetches and processes equipment data from a CSV file.
 * It returns the data grouped by category and a loading state.
 */

import { useEffect, useState } from "react";
import Papa from "papaparse";
import rawCsv from "../data/equipment.csv?raw";

export function useEquipmentData() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Papa.parse(rawCsv, {
      header: true,
      complete: (results) => {
        const grouped = {};
        results.data.forEach(item => {
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
        setLoading(false);
      }
    });
  }, []);

  return { data, loading };
}
