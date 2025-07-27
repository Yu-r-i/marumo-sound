/**
 * src/pages/EquipmentPage.jsx
 * 
 * This page component renders the main equipment list.
 * It includes a title and the EquipmentList component to display the equipment categories.
 */

import EquipmentList from "../components/EquipmentList";

const EquipmentPage = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold my-6">Equipment List</h1>
      <EquipmentList />
    </main>
  );
};

export default EquipmentPage;
