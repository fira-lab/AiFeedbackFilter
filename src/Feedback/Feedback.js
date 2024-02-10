import React, { useState } from "react";
import Chart from "react-apexcharts";

function Barchart() {
  const [feedbackData, setFeedbackData] = useState([
    {
      name: "positive",
      color: "#00ff00",
      value: 6578,
    },
    {
      name: "Neutral",
      color: "#ff0000",
      value: 6787,
    },
    {
      name: "Negative",
      color: "#0000ff",
      value: 3245,
    },
    {
      name: "Order accuracy",
      color: "#ff00ff",
      value: 9876,
    },
    {
      name: "Late delivery",
      color: "#ffff00",
      value: 2324,
    },
    {
      name: "Dissatisfaction",
      color: "#00ffff",
      value: 5123,
    },
    {
      name: "Delivery person interaction",
      color: "#ff8000",
      value: 8955,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [barClicked, setBarClicked] = useState(false);

  const seriesData = feedbackData.map((item) => item.value);
  const colors = feedbackData.map((item) => item.color);
  const categories = feedbackData.map((item) => item.name);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setBarClicked(true);
  };

  const handleDetailButtonClick = () => {
    setBarClicked(!barClicked);
  };

  return (
    <React.Fragment>
      <div className="container-fluid mb-5">
        <h3 className="text-center mt-3 mb-3">Bar Chart in ReactJS</h3>

        <Chart
          type="bar"
          width={1380}
          height={700}
          series={[
            {
              name: "User Feedbacks Filter",
              data: seriesData,
              colors: colors,
            },
          ]}
          options={{
            title: {
              text: "Ai Feedback Filter",
              style: { fontSize: 30 },
            },
            subtitle: {
              text: "This is filters ",
              style: { fontSize: 18 },
            },
            xaxis: {
              tickPlacement: "on",
              categories: categories,
              title: {
                text: "Social Media User",
                style: { color: "#f90000", fontSize: 30 },
              },
            },
            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "User In (K)",
                style: { color: "#f90000", fontSize: 15 },
              },
            },
            plotOptions: {
              bar: {
                distributed: true,
                dataLabels: {
                  position: "top",
                },
              },
            },
            events: {
              dataPointSelection: (event, chartContext, config) => {
                const category = categories[config.dataPointIndex];
                handleCategoryClick(category);
              },
            },
          }}
        ></Chart>
        <button
          style={{
            color: "white",
            backgroundColor: "brown",
            marginLeft: "1100px",
            fontSize: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleDetailButtonClick}
        >
          Detail
        </button>

        {selectedCategory && (
          <div>
            <h4>Selected Category: {selectedCategory}</h4>
            {barClicked ? (
               <table>
               <thead>
                 <tr>
                   <th>Profile Picture</th>
                   <th>Full Name</th>
                   <th>Phone Number</th>
                   <th>Email</th>
                   <th>Password</th>
                   <th>Feedback</th>
                 </tr>
               </thead>
               <tbody>
                 {feedbackData
                   .filter((feedback) => feedback.name === selectedCategory)
                   .map((feedback) => (
                     <tr key={feedback.name}>
                       <td>{feedback.profilePicture}</td>
                       <td>{feedback.fullName}</td>
                       <td>{feedback.phoneNumber}</td>
                       <td>{feedback.email}</td>
                       <td>{feedback.password}</td>
                       <td>{feedback.feedback}</td>
                     </tr>
                   ))}
               </tbody>
             </table>
           ) : (
             <p>Click on the "Detail" button to view the table.</p>
           )}
         </div>
       )}
     </div>
    </React.Fragment>
  );
}

export default Barchart;