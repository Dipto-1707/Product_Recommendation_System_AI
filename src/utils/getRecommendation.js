import { groq } from "../config/groq";

export async function getRecommendation(userInput, products) {
  try {
    const names = products.map((p) => p.name).join(", ");

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `
                    User preference: ${userInput}
                    Products available: ${names}

                    STRICT INSTRUCTIONS:
                    - Return ONLY a JSON array of product names.
                    - Do NOT add explanations.
                    - No sentences. No extra text.
                    - The response MUST look exactly like this: ["Product A", "Product B"]
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
