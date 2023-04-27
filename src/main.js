const OPENAI_API_KEY = process.env("OPENAI_API_KEY");

if (!OPENAI_API_KEY) {
    throw new Error('Environment variable OPENAI_API_KEY is required');
}

const SYSTEM_MESSAGE = "I will send you json with attributes but empty values. Sometimes, instead of an empty value, you'll find a hint of what I want to replace the hint. You have to return the same json but with the attributess and values, Make sure the info is as random as possible, don't use typical placeholders. Reply only with the json, no other text.";

async function callGpt(object) {
    const url = "https://api.openai.com/v1/chat/completions";

    const requestBody = {
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: SYSTEM_MESSAGE },
            { role: "user", content: object },
        ],
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
        throw new Error(`Failed to call OpenAI API: ${response.statusText}`);
    }

    return response.json();
}
function fake(num, jsonObj) {
    // Make an API request to ChatGPT and pass in the JSON object properties
    return axios.get(`https://api.chatgpt.com/fake?companyName=${jsonObj.companyName}&address=${jsonObj.address}&postCode=${jsonObj.postCode}&city=${jsonObj.city}&companyDescription=${jsonObj.companyDescription}`)
        .then(response => response.data);
}

module.exports = {
    fake
};