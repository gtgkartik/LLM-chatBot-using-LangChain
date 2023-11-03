import { TextLoader } from "langchain/document_loaders";

const loader = new TextLoader("./file.txt");

const docs = await loader.load();

console.log(docs)
