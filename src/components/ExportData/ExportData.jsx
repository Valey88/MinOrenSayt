import React from "react";
import * as XLSX from "xlsx";

const ExportData = () => {
  const exportDataToExcel = () => {
    // Логика для получения данных из базы данных
    const data = [{ id: 1, name: "John Doe", email: "johndoe@example.com" }];

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");
    XLSX.writeFile(wb, "user_list.xlsx");
  };

  return <button onClick={exportDataToExcel}>Export Data</button>;
};

export default ExportData;
