
// import OpenAI from "openai";
// import { config } from "dotenv";
// import express from 'express';
// import cors from 'cors';

// config();
// const apiKey = process.env.API_KEY;

// const openai = new OpenAI({
//   apiKey,
// });

// const app = express();
// app.use(express.json());

// // הוספת middleware ל-CORS
// app.use(cors());

// app.post('/generateGreeting', async (req, res) => {
//   const { event, questions, options } = req.body;

//   let prompt = `Please write a ${options.greetingType || 'greeting'} for a ${event} that is ${options.greetingMood || 'appropriate'}. `;
//   if (event === 'birthday' && questions.age) {
//     prompt += `for someone who is ${questions.age} years old. `;
//   }
//   prompt += "Make sure it is suitable for the occasion.";

//   try {
//     const completion = await openai.chat.completions.create({
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant designed to output a greeting message.",
//         },
//         { role: "user", content: prompt },
//       ],
//       model: "gpt-3.5-turbo-0125",
//     });
//     const greeting = completion.choices[0].message.content;
//     res.json({ greeting });
//   } catch (error) {
//     console.error("Error generating greeting:", error);
//     res.status(500).send("Error generating greeting");
//   }
// });

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
import OpenAI from "openai";
import { config } from "dotenv";
import express from 'express';
import cors from 'cors';

config();
const apiKey = process.env.API_KEY;

const openai = new OpenAI({
  apiKey,
});

const app = express();
app.use(express.json());

// הוספת middleware ל-CORS
app.use(cors());

app.post('/generateGreeting', async (req, res) => {
  const { event, questions, options } = req.body;

  let prompt = `Please write a ${options.greetingType || 'greeting'} for a ${event} that is ${options.greetingMood || 'appropriate'}. `;
  if (event === 'birthday' && questions.age) {
    prompt += `for someone who is ${questions.age} years old. `;
  }
  prompt += "Make sure it is suitable for the occasion and write it in English.";

  try {
    const responses = await Promise.all(
      Array.from({ length: 3 }, () =>
        openai.chat.completions.create({
          messages: [
            {
              role: "system",
              content: "You are a helpful assistant designed to output a greeting message.",
            },
            { role: "user", content: prompt },
          ],
          model: "gpt-3.5-turbo-0125",
        })
      )
    );

    const greetings = responses.map(response => response.choices[0].message.content);
    res.json({ greetings });
  } catch (error) {
    console.error("Error generating greeting:", error);
    res.status(500).send("Error generating greeting");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});












