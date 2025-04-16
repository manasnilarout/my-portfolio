'use server';
/**
 * @fileOverview A personalized greeting AI agent.
 *
 * - personalizeGreeting - A function that handles the personalized greeting process.
 * - PersonalizeGreetingInput - The input type for the personalizeGreeting function.
 * - PersonalizeGreetingOutput - The return type for the personalizeGreeting function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const PersonalizeGreetingInputSchema = z.object({
  location: z.string().optional().describe('The location of the visitor.'),
  browsingHistory: z.string().optional().describe('The browsing history of the visitor.'),
});
export type PersonalizeGreetingInput = z.infer<typeof PersonalizeGreetingInputSchema>;

const PersonalizeGreetingOutputSchema = z.object({
  greeting: z.string().describe('The personalized greeting for the visitor.'),
});
export type PersonalizeGreetingOutput = z.infer<typeof PersonalizeGreetingOutputSchema>;

export async function personalizeGreeting(input: PersonalizeGreetingInput): Promise<PersonalizeGreetingOutput> {
  return personalizeGreetingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeGreetingPrompt',
  input: {
    schema: z.object({
      location: z.string().optional().describe('The location of the visitor.'),
      browsingHistory: z.string().optional().describe('The browsing history of the visitor.'),
    }),
  },
  output: {
    schema: z.object({
      greeting: z.string().describe('The personalized greeting for the visitor.'),
    }),
  },
  prompt: `You are an AI assistant that personalizes greetings for visitors to a website.

  The goal is to make the visitor feel welcomed and engaged.

  Consider the following information about the visitor:

  Location: {{location}}
  Browsing History: {{browsingHistory}}

  Generate a personalized greeting that is appropriate for this visitor.
  The greeting should be no more than 2 sentences long.
  `,
});

const personalizeGreetingFlow = ai.defineFlow<
  typeof PersonalizeGreetingInputSchema,
  typeof PersonalizeGreetingOutputSchema
>({
  name: 'personalizeGreetingFlow',
  inputSchema: PersonalizeGreetingInputSchema,
  outputSchema: PersonalizeGreetingOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
