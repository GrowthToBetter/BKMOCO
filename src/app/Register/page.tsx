"use client";
import { useState } from "react";


export default function Register(){
    const [formData, setFormData] = useState({
        Gmail: "",
        Password: "",
      });
      const [error, setError] = useState<string | null>(null);
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const requiredFields = ["Gmail", "Password"];
    
        const missingFields = requiredFields.filter(
          (field) => !formData[field as keyof typeof formData]
        );
    
        if (missingFields.length > 0) {
          setError(
            `Please fill in the following fields: ${missingFields.join(", ")}`
          );
          return; 
        }
    
        setError(null);
    
        try {
          const response = await fetch("api/akun", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...formData,
            }),
          });
    
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
    
          const data = await response.json();
    
    
          setFormData({
            Gmail: "",
            Password: "",
          });
        } catch (error) {
          console.error("Error:", error);
          alert("Error adding Gmail.");
        }
      };
    return(<>
    <h1>tes</h1>
    </>);
}