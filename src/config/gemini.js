const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function getRecommendation(userInput, products) {
  try {
    const productList = products.map((p) => `- ${p.name}`).join("\n");

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
                        Return ONLY a JSON array of product names.
                        User said: "${userInput}"
                        Product list:
                        ${productList}
                        `,
                },
              ],
            },
          ],
          generationConfig: {
            response_mime_type: "application/json",
          },
        }),
      }
    );

    const data = await response.json();
    const raw = data?.candidates?.[0]?.content?.parts?.[0]?.text || "[]";

    let arr = [];
    try {
      arr = JSON.parse(raw);
    } catch {
      arr = [];
    }

    return arr;
  } catch (err) {
    console.error("Gemini Error:", err);
    return [];
  }
}
