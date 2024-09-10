const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyBcLJ1auPNsg8aIYBlLDeSai73fBRj8Y_I");
const model =  genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
export default model;
// text to text