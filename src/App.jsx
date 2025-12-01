/*
Task 1: 
Create a Product Recommendation System Using an AI API 

Objective: 
Test how well they can integrate an AI-powered recommendation system with basic coding skills.

Requirement: 
Build a small React frontend that displays a list of products. 

Integrate an AI-powered recommendation system using a simple external API 
(e.g., OpenAI's GPT for product recommendations or a simple pre-built recommendation API). 

The user should be able to input preferences (e.g., "I want a phone under $500"), 
and the AI should respond with recommended products from the list. 

*/
import { useState } from "react";
import "./App.css";
import ProductList, { products } from "./components/ProductList";
import PreferenceInput from "./components/PreferenceInput";
import RecommendationBox from "./components/RecommendationBox";
import { getRecommendation } from "./utils/getRecommendation";
// import { getRecommendation } from "./config/gemini";

export default function App() {
  const [response, setResponse] = useState([]);

  const handleUserInput = async (input) => {
    const aiResponse = await getRecommendation(input, products);
    const productsFromOurList = products.filter((p) => aiResponse.includes(p.name));
    setResponse(productsFromOurList);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      <h1 className="relative text-3xl font-bold text-center">
        AI Product Recommendation
        <span className=" absolute top-2 right-2 text-sm font-light">Sudipta Roy</span>
      </h1>

      <ProductList />
      <PreferenceInput onSubmit={handleUserInput} />
      <RecommendationBox items={response} />
    </div>
  );
}
