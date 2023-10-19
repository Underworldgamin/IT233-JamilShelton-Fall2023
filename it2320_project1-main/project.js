
function salesByPerson() {
   // Define an array to store the sales data
   const salesData = [
      { name: "East (Matt)", sales: [45.00, 50.00, 47.00] },
      { name: "West (Mike)", sales: [95.00, 73.00, 40.00] },
      { name: "Westshore (Mark)", sales: [10.00, 32.00, 24.00] },
      { name: "Metro (Milt)", sales: [86.00, 74.00, 80.00] }
   ];

   // Initialize variables to store the total sales and result text
   let totalSales = 0;
   let resultText = "Q1 Sales by Person/Campus:\n";

   // Loop through the salesData array to calculate and accumulate total sales
   for (let i = 0; i < salesData.length; i++) {
      let person = salesData[i];
      let personTotal = person.sales.reduce((acc, sale) => acc + sale, 0);
      totalSales += personTotal;
      resultText += person.name + ": $" + personTotal.toFixed(2) + "\n";
   }

   // Display the total Q1 sales and sales by person/campus in an alert box
   resultText += "\nTotal Q1 Sales: $" + totalSales.toFixed(2);
   alert(resultText);
};


   function commissionsByMonth() {
      // Define an array to store the sales data
      const salesData = [
         { name: "East (Matt)", sales: [45.00, 50.00, 47.00] },
         { name: "West (Mike)", sales: [95.00, 73.00, 40.00] },
         { name: "Westshore (Mark)", sales: [10.00, 32.00, 24.00] },
         { name: "Metro (Milt)", sales: [86.00, 74.00, 80.00] }
      ];
   
      // Initialize a variable to store the result text
      let resultText = "Commissions for Q1 by Month:\n\n";
   
      // Loop through the salesData array to calculate commissions by month for each salesperson
      for (let i = 0; i < salesData.length; i++) {
         let person = salesData[i];
         let commissions = [0, 0, 0]; // Initialize an array to store commissions for each month
   
         for (let j = 0; j < person.sales.length; j++) {
            // Calculate 13% commission for each month
            let commission = person.sales[j] * 0.13;
            commissions[j] = commission;
         }
   
         resultText += person.name + ":\n";
         resultText += "January: $" + commissions[0].toFixed(2) + "\n";
         resultText += "February: $" + commissions[1].toFixed(2) + "\n";
         resultText += "March: $" + commissions[2].toFixed(2) + "\n\n";
      }
   
      // Display the commissions by month for each salesperson in an alert box
      alert(resultText);
      };









      function bestAndWorst() {
         // Define an array to store the sales data
         const salesData = [
            { name: "East (Matt)", sales: [45.00, 50.00, 47.00] },
            { name: "West (Mike)", sales: [95.00, 73.00, 40.00] },
            { name: "Westshore (Mark)", sales: [10.00, 32.00, 24.00] },
            { name: "Metro (Milt)", sales: [86.00, 74.00, 80.00] }
         ];

         // Initialize variables to store the best and worst performers
         let bestSalesperson = null;
         let worstSalesperson = null;
         let highestTotalSales = -1;  // Initialize with a low value
         let lowestTotalSales = Number.MAX_VALUE;  // Initialize with a high value
      
         // Loop through the salesData array to find the best and worst performers
         for (let i = 0; i < salesData.length; i++) {
            let person = salesData[i];
            let personTotal = person.sales.reduce((acc, sale) => acc + sale, 0);
      
            if (personTotal > highestTotalSales) {
               highestTotalSales = personTotal;
               bestSalesperson = person.name;
            }
      
            if (personTotal < lowestTotalSales) {
               lowestTotalSales = personTotal;
               worstSalesperson = person.name;
            }
         }
      
         // Display the names of the best and worst salespeople in an alert box
         const resultText = `Best Salesperson: ${bestSalesperson}\nWorst Salesperson: ${worstSalesperson}`;
         alert(resultText);
      };




   
   


      