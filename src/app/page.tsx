'use client';

import {Github, Linkedin, Mail} from 'lucide-react';
import Image from 'next/image';
import {useEffect, useState} from 'react';

import {generateQuote} from '@/ai/flows/generate-quote';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';

const profileImage = 'https://firebasestorage.googleapis.com/v0/b/fir-studio-39a65.appspot.com/o/manas.jpeg?alt=media&token=491b65f7-118e-4eb2-b6a9-a48997d7ca0b';

const profileLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/manas-ranjan-nilorout/',
    icon: Linkedin,
  },
  {name: 'GitHub', url: 'https://github.com/mnlr', icon: Github},
  {name: 'Email', url: 'mailto:manas.ranjan.nilorout@example.com', icon: Mail},
];

const professionalSummary =
  'Node.js full-stack developer with 7 years of experience building dynamic web applications across healthcare, hotel management, and gaming. Proficient in Angular, Vue.js, DevOps tools, and multiple database systems. Passionate about modern JavaScript, ES6, Typescript and expanding knowledge in Go and DevOps.';

export default function Home() {
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      const generatedQuote = await generateQuote({});
      setQuote(generatedQuote?.quote ?? 'Welcome!');
    }
    fetchQuote();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4 flex space-x-2">
        <Button variant="outline">Resume</Button>
        <Button variant="outline">Blogs</Button>
        <Button variant="outline">Projects</Button>
      </div>
      <Avatar className="mb-4 h-32 w-32">
        <AvatarImage src={profileImage} alt="Manas Ranjan Nilorout" />
        <AvatarFallback>MN</AvatarFallback>
      </Avatar>

      <h1 className="text-2xl font-bold text-center mb-2">Manas Ranjan Nilorout</h1>

      {quote ? (
        <p className="text-lg text-center text-muted-foreground mb-6">{quote}</p>
      ) : (
        <Skeleton className="w-[200px] h-[24px] mb-6" />
      )}

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
          <CardDescription>{professionalSummary}</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="grid gap-2">
            {profileLinks.map((link) => (
              <li key={link.name}>
                <Button asChild variant="ghost" className="w-full justify-start">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <link.icon className="h-4 w-4" />
                    {link.name}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
