/**
 * src/components/EquipmentCard.jsx
 * 
 * This component renders a card displaying equipment details.
 * It takes in three props: manufacturer, model, and quantity.
 */

import React from "react";

const EquipmentCard = ({ manufacturer, model, quantity }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      <h3 className="text-lg font-semibold">
        {manufacturer} {model}
      </h3>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
    </div>
  );
};

export default EquipmentCard;
