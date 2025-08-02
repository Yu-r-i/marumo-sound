/**
 * src/components/EquipmentCard.jsx
 * 
 * This component renders a card displaying equipment details.
 * It takes in three props: manufacturer, model, and quantity.
 */

import React from "react";
import "../styles.css";

const EquipmentCard = ({ manufacturer, model, quantity }) => {
  return (
    <div className="equipment-card">
      <div className="equipment-row">
        <span className="item manufacturer">{manufacturer}</span>
        <span className="item model">{model}</span>
        <span className="item quantity">{quantity}台</span>
      </div>
    </div>
  );
};

export default EquipmentCard;
