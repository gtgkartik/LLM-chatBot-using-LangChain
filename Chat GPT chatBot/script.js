import { Configuration, OpenAIApi } from "openai"

const openai = new OpenAIApi(new Configuration({
    apiKey: "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",
    organization :"org-ExAKbp1Udp7CHEeA7uT1qgGm" 
}))

const completion = await openai.createChatCompletion({
    model : "gpt-3.5-turbo",
    messages : [{role:"user", content:"what is google"}]
})

console.log("hello")
console.log(completion.data.choices[0].message)