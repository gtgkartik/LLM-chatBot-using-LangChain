import { OpenAI } from "langchain/llms";

const model = new OpenAI({ 
    openAIApiKey: "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", 
    temperature: 0.9 
});

import { PromptTemplate } from "langchain/prompts";

const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});

import { LLMChain } from "langchain/chains";

const chain = new LLMChain({ llm: model, prompt: prompt });

const res = await chain.call({ product: "colorful socks" });
console.log(res);

