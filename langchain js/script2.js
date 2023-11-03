import { OpenAI } from "langchain/llms";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({ 
    openAIApiKey: "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", 
    temperature: 0.9 
});

const memory = new BufferMemory();
const chain = new ConversationChain({ llm: model, memory: memory });
const res1 = await chain.call({ input: "Hi! I'm Jim." });
console.log(res1);

const res2 = await chain.call({ input: "What's my name?" });
console.log(res2);