import openai from "./chatGPT";


const query =async (prompt : string, chatId: string, model: string) => {
    console.log("the API KEY IS",prompt, model)
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature : 0.9,
        top_p : 1,
        frequency_penalty : 0,
        presence_penalty : 0,
        max_tokens :1000
    })
    .then(res => res.data.choices[0].text)
    .catch(err =>`ChatGPT is unable to find the answer for that : ${err.message}`)
    return res;
}

export default  query;

// import { Configuration, OpenAIApi } from "openai";

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// const query =async (params:type) => {
//     const response =  openai.createCompletion({
//         model: "text-davinci-002",
//         prompt: "#JavaScript to Python:\nJavaScript: \ndogs = [\"bill\", \"joe\", \"carl\"]\ncar = []\ndogs.forEach((dog) >  temperature: 0",
//         max_tokens: 64,
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//       }).then((res) => {console.log(res.data.choices[0].text)});
// }