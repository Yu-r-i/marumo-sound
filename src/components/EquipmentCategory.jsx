/**
 * src/components/EquipmentCategory.jsx
 * 
 * This component renders a category of equipment.
 * It takes in a title and an array of items, where each item is an object containing manufacturer, model, and quantity.
 */

import React from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentCategory = ({ title, items }) => {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <EquipmentCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default EquipmentCategory;
