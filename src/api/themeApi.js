const API_URL = "http://localhost:5000/themes";

export const fetchThemes = async () => {
  try {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch themes");
    }

    const themes = await response.json();
    return themes;
  } catch (error) {
    console.error("Error fetching themes:", error);
    throw error;
  }
};
