import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const ImgurContext = createContext();

export const useImgur = () => useContext(ImgurContext);

export const ImgurProvider = ({ children }) => {
  const apiKey = "8f6d8eb03eab07d"
  // "ain mas a sua apikey ta publica no repositorio, vo usar ela hihi 🤓☝️
  // é gratis pra criar apikey no imgur o bobão, quer estourar o rate limit pra ser um bobão completo vai lá pô
  const maxUploadsPerDay = 5;
  const localStorageKey = "imgurUploadCount";
  
  const [imageUploadCount, setImageUploadCount] = useState(0);
  const [remainingUploadsToday, setRemainingUploadsToday] = useState(maxUploadsPerDay);

  useEffect(() => {
    // Check and reset the daily upload count in local storage
    const storedCount = localStorage.getItem(localStorageKey);
    if (storedCount) {
      const storedDate = new Date(parseInt(storedCount.split(":")[0]));
      const currentDate = new Date();
      
      // Reset the count if it's a new day
      if (currentDate.getDate() !== storedDate.getDate()) {
        localStorage.setItem(localStorageKey, `${currentDate.getTime()}:${0}`);
        setImageUploadCount(0);
      } else {
        setImageUploadCount(parseInt(storedCount.split(":")[1]));
      }
    }
  }, []);

  useEffect(() => {
    setRemainingUploadsToday(maxUploadsPerDay - imageUploadCount);
  }, [imageUploadCount]);

  const uploadImage = async (file) => {
    try {
      // Check if the user has exceeded the daily upload limit
      if (imageUploadCount >= maxUploadsPerDay) {
        throw new Error("Daily upload limit exceeded.");
      }

      // Upload the image to Imgur
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post("https://api.imgur.com/3/image", formData, {
        headers: {
          Authorization: `Client-ID ${apiKey}`,
        },
      });

      const { data } = response.data;

      // Increment the image upload count
      const newCount = imageUploadCount + 1;
      setImageUploadCount(newCount);

      // Save the updated count in local storage
      const currentDate = new Date();
      localStorage.setItem(localStorageKey, `${currentDate.getTime()}:${newCount}`);

      // Return the uploaded image URL
      return data.link;
    } catch (error) {
      console.error("Error uploading image to Imgur:", error);
      throw error;
    }
  };

  return (
    <ImgurContext.Provider
      value={{
        uploadImage,
        remainingUploadsToday,
      }}
    >
      {children}
    </ImgurContext.Provider>
  );
};
