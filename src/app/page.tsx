'use client';

import {Github, Linkedin, Mail} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect, useState} from 'react';

import {generateQuote} from '@/ai/flows/generate-quote';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {Button} from '@/components/ui/button';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

const profileImage = 'https://i.imgur.com/0KhtQoI.png';

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
  'Skilled Node.js full-stack developer with 7 years of experience in healthcare, gaming, and data extraction. Proficient in Angular, Vue.js, Ansible, Gitlab CI/CD, MySQL, MongoDB, Redis, Typescript, and AI. Exploring Go and DevOps.';

const resumeURL = 'https://docs.google.com/document/d/172vRyMYj3bKzff67v1yzmK4kB6iL4WXWYXk30YuWSRE/edit?usp=sharing';

export default function Home() {
  const [quote, setQuote] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [sparkles, setSparkles] = useState<
    {id: number; x: number; y: number}[]
  >([]);

  useEffect(() => {
    async function fetchQuote() {
      const generatedQuote = await generateQuote({});
      setQuote(generatedQuote?.quote ?? 'Welcome!');
    }
    fetchQuote();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
      // Create sparkles
      createSparkle();
    };

    const createSparkle = () => {
      setSparkles(prevSparkles => {
        const newSparkle = {
          id: Date.now(),
          x: mousePosition.x + (Math.random() - 0.5) * 20, // Random offset
          y: mousePosition.y + (Math.random() - 0.5) * 20,
        };
        return [...prevSparkles, newSparkle];
      });
    };

    const removeSparkle = (id: number) => {
      setSparkles(prevSparkles => prevSparkles.filter(sparkle => sparkle.id !== id));
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="absolute top-4 right-4 flex space-x-2 rounded-md bg-secondary p-2 shadow-md">
        <Button asChild variant="outline">
          <Link href="/blogs">Blogs</Link>
        </Button>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Resume</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[850px]">
            <DialogHeader>
              <DialogTitle>Resume</DialogTitle>
              <DialogDescription>
                View Manas Ranjan Nilorout's Resume.
              </DialogDescription>
            </DialogHeader>
            <div className="h-[600px]">
              <iframe src={resumeURL} width="100%" height="100%" />
            </div>
            <DialogFooter>
              <Button type="submit" onClick={() => window.open(resumeURL, '_blank')}>
                Open in new tab
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Button variant="outline">Projects</Button>
      </div>
      <div className="sparkle-container">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="sparkle"
            style={{
              left: `${sparkle.x}px`,
              top: `${sparkle.y}px`,
              animationDelay: `${Math.random() * 0.2}s`,
            }}
            onAnimationEnd={() =>
              setSparkles(prevSparkles =>
                prevSparkles.filter(s => s.id !== sparkle.id)
              )
            }
          />
        ))}
      </div>
      <Avatar className="mb-4 h-32 w-32">
        <AvatarImage src={profileImage} alt="Manas Ranjan Nilorout" />
        <AvatarFallback>MN</AvatarFallback>
      </Avatar>

      <h1 className="text-3xl font-bold text-center mb-2 text-primary-foreground">Manas Ranjan Nilorout</h1>

      {quote ? (
        <div className="bg-secondary rounded-md p-2 mb-6">
        <p className="text-lg text-center text-muted-foreground">{quote}</p>
        </div>
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

