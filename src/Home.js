import React, { useState } from 'react';

const Home = () => {
  const [cropType, setCropType] = useState('');
  const [soilType, setSoilType] = useState('');
  const [weather, setWeather] = useState('');
  const [prediction, setPrediction] = useState('');
  const [suggestion, setSuggestion] = useState('');

  const getPrediction = () => {
    let pred = '';
    let bestCrop = '';
    let explanation = '';

    if (cropType && soilType && weather) {
      if (cropType === 'wheat') {
        if (soilType === 'loamy' && weather < 30) {
          pred = "Ideal conditions for wheat growth.";
        } else {
          pred = "Conditions are not ideal for wheat.";
        }
      } else if (cropType === 'rice') {
        if (soilType === 'clay' && weather > 25) {
          pred = "Good conditions for rice cultivation.";
        } else {
          pred = "Consider alternative conditions.";
        }
      } else if (cropType === 'corn') {
        if (soilType === 'sandy' && weather > 20 && weather <= 30) {
          pred = "Great conditions for corn.";
        } else {
          pred = "Corn might not grow well in these conditions.";
        }
      } else if (cropType === 'soybean') {
        if (soilType === 'loamy' && weather > 25) {
          pred = "Soybean will thrive in these conditions.";
        } else {
          pred = "Soybean might not be ideal in these conditions.";
        }
      } else if (cropType === 'barley') {
        if (soilType === 'loamy' && weather < 20) {
          pred = "Excellent conditions for barley.";
        } else {
          pred = "Barley may not grow well in these conditions.";
        }
      } else if (cropType === 'sugarcane') {
        if (soilType === 'clay' && weather > 25) {
          pred = "Optimal conditions for sugarcane growth.";
        } else {
          pred = "Sugarcane may not thrive under these conditions.";
        }
      }

      // Best Crop Suggestion Logic
      if (weather < 20) {
        bestCrop = "Barley";
        explanation = "Barley is well-suited for cooler climates, especially when the temperature is below 20°C.";
      } else if (weather >= 20 && weather <= 25) {
        bestCrop = "Wheat";
        explanation = "Wheat grows best in moderate temperatures, particularly in loamy soils with temperatures between 20-25°C.";
      } else if (weather > 25 && weather <= 30) {
        bestCrop = "Rice or Corn";
        explanation = "Rice and Corn are ideal for warmer temperatures, especially in clay or sandy soils respectively.";
      } else if (weather > 30) {
        bestCrop = "Sugarcane or Soybean";
        explanation = "Sugarcane and Soybean thrive in higher temperatures, particularly in clay or loamy soils.";
      }

      setPrediction(pred);
      setSuggestion(`Recommended Crop: ${bestCrop}\n\nReason: ${explanation}`);
    } else {
      setPrediction("Please provide all inputs.");
      setSuggestion("");
    }
  };

  return (
    <section>
      <h2>AI Predictions for Your Crops</h2>
      <form>
        <label>Select Crop:</label>
        <select value={cropType} onChange={(e) => setCropType(e.target.value)}>
          <option value="wheat">Wheat</option>
          <option value="rice">Rice</option>
          <option value="corn">Corn</option>
          <option value="soybean">Soybean</option>
          <option value="barley">Barley</option>
          <option value="sugarcane">Sugarcane</option>
        </select>

        <label>Soil Type:</label>
        <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
          <option value="clay">Clay</option>
          <option value="sandy">Sandy</option>
          <option value="loamy">Loamy</option>
        </select>

        <label>Expected Weather (°C):</label>
        <input type="number" value={weather} onChange={(e) => setWeather(e.target.value)} />

        <button type="button" onClick={getPrediction}>Get Prediction</button>
      </form>

      <div id="prediction-result">{prediction}</div>
      <div id="suggestion-block">{suggestion}</div>
    </section>
  );
};

export default Home;
