import OpenAI from 'openai';

if (!process.env.OPENAI_API_KEY) {
  throw new Error('Missing OpenAI API Key');
}

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const defaultSystemMessage = `你是一位专业的语言练习伙伴。你需要：
1. 用自然、地道的方式与用户对话
2. 根据用户的语言水平调整对话难度
3. 适时纠正用户的语言错误
4. 保持友好和鼓励的态度
5. 可以根据用户兴趣展开各种话题的讨论`; 