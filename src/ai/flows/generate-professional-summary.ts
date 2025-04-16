'use server';
/**
 * @fileOverview An AI agent for generating a professional summary.
 *
 * - generateProfessionalSummary - A function that handles the generation of a professional summary.
 * - GenerateProfessionalSummaryInput - The input type for the generateProfessionalSummary function.
 * - GenerateProfessionalSummaryOutput - The return type for the generateProfessionalSummary function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateProfessionalSummaryInputSchema = z.object({
  jobTitle: z.string().describe('The job title of the individual.'),
  experience: z
    .string()
    .describe('A detailed description of the individual\'s experience.'),
});
export type GenerateProfessionalSummaryInput = z.infer<
  typeof GenerateProfessionalSummaryInputSchema
>;

const GenerateProfessionalSummaryOutputSchema = z.object({
  summary: z.string().describe('The generated professional summary.'),
});
export type GenerateProfessionalSummaryOutput = z.infer<
  typeof GenerateProfessionalSummaryOutputSchema
>;

export async function generateProfessionalSummary(
  input: GenerateProfessionalSummaryInput
): Promise<GenerateProfessionalSummaryOutput> {
  return generateProfessionalSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfessionalSummaryPrompt',
  input: {
    schema: z.object({
      jobTitle: z.string().describe('The job title of the individual.'),
      experience:
        z.string().describe('A detailed description of the individual\'s experience.'),
    }),
  },
  output: {
    schema: z.object({
      summary: z.string().describe('The generated professional summary.'),
    }),
  },
  prompt: `You are a professional resume writer. Please generate a professional summary for an individual with the following job title and experience:\n\nJob Title: {{{jobTitle}}}\nExperience: {{{experience}}}\n\nProfessional Summary:`,
});

const generateProfessionalSummaryFlow = ai.defineFlow<
  typeof GenerateProfessionalSummaryInputSchema,
  typeof GenerateProfessionalSummaryOutputSchema
>(
  {
    name: 'generateProfessionalSummaryFlow',
    inputSchema: GenerateProfessionalSummaryInputSchema,
    outputSchema: GenerateProfessionalSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
