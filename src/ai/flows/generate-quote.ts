'use server';

/**
 * @fileOverview An AI agent for generating a quote about software engineering.
 *
 * - generateQuote - A function that handles the generation of a quote.
 * - GenerateQuoteInput - The input type for the generateQuote function.
 * - GenerateQuoteOutput - The return type for the generateQuote function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateQuoteInputSchema = z.object({});
export type GenerateQuoteInput = z.infer<typeof GenerateQuoteInputSchema>;

const GenerateQuoteOutputSchema = z.object({
  quote: z.string().describe('The generated quote about software engineering.'),
});
export type GenerateQuoteOutput = z.infer<typeof GenerateQuoteOutputSchema>;

export async function generateQuote(
  input: GenerateQuoteInput
): Promise<GenerateQuoteOutput> {
  return generateQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateQuotePrompt',
  input: {
    schema: z.object({}),
  },
  output: {
    schema: z.object({
      quote: z.string().describe('The generated quote about software engineering.'),
    }),
  },
  prompt: `You are an AI assistant that provides quotes about software engineering.
  The quote should be no more than 2 sentences long.
  Generate a quote about software engineering.`,
});

const generateQuoteFlow = ai.defineFlow<
  typeof GenerateQuoteInputSchema,
  typeof GenerateQuoteOutputSchema
>({
  name: 'generateQuoteFlow',
  inputSchema: GenerateQuoteInputSchema,
  outputSchema: GenerateQuoteOutputSchema,
}, async () => {
  const {output} = await prompt({});
  return output!;
});
