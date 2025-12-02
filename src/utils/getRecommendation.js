import { groq } from "../config/groq";

export async function getRecommendation(userInput, products) {
  try {
    const productJson = JSON.stringify(products);


    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `
            User preference: ${userInput}

            Products available:
            ${JSON.stringify(products)}

          STRICT INSTRUCTIONS:
        - Recommend ONLY from the given list.
        - Consider price, category, and user intent.
        - Output only a JSON array of product names.
        - Example: ["Product A", "Product B"]
        `,

        },
      ],
    });

    let text = completion.choices[0].message.content || "[]";

    const match = text.match(/\[([\s\S]*?)\]/);
    if (!match) return [];

    const jsonClean = match[0];

    return JSON.parse(jsonClean);
  } catch (err) {
    console.error("Recommendation Error:", err);
    return [];
  }
}
