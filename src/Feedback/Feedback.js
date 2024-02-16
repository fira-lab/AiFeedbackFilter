import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import './feedback.css';
import {DataTable} from 'react-data-table-component';
import { LineAxisOutlined } from "@mui/icons-material";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 

function Barchart() {
  
  const [feedbackData, setFeedbackData] = useState([
    {
      name: "positive",
      color: "#00ff00",
      value: 6578,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
    {
      name: "Neutral",
      color: "#ff0000",
      value: 6787,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
    {
      name: "Negative",
      color: "#0000ff",
      value: 3245,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
    {
      name: "Order accuracy",
      color: "#ff00ff",
      value: 9876,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
    {
      name: "Late delivery",
      color: "#ffff00",
      value: 2324,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
    {
      name: "Dissatisfaction",
      color: "#00ffff",
      value: 5123,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
    {
      name: "Delivery person interaction",
      color: "#ff8000",
      value: 8955,
      profilePicture: "",
      fullName: "",
      phoneNumber: "",
      email: "",
      password: "",
      feedback: "",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const seriesData = feedbackData.map((item) => item.value);
  const colors = feedbackData.map((item) => item.color);
  const categories = feedbackData.map((item) => item.name);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDetailButtonClick = () => {
    setSelectedCategory(null);
  };


  const [column , setColumn] = useState([])
  const [records, setRecords] = useState([])

  useEffect(() => {
    // replace 'http://localhost:5000/reviews' with your actual endpoint
    axios.get('http://localhost:5000/reviews')
      .then(response => {
        setRecords(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

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
       <table className="table">
          <thead>
            <tr>
              
              {['id', 'name', 'email', 'feedback'].map((c, i) => (
                <th key={i}>{c}</th>   
              ))}
            </tr>
          </thead>
          <tbody>
            {
              records.map((record,i) =>(
                <tr key={i}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.email}</td>
                  <td>{record.feedback}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}

export default Barchart;