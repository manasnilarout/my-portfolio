'use client';

import Link from 'next/link';
import {ExternalLink, Calendar, Clock, BookOpen} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const blogs = [
  {
    id: 'snowflake-rsa-auth-2024',
    title: 'Snowflake—Generate an RSA key and use it for Authentication',
    description:
      'Learn how to generate an RSA key and use it for authentication in Snowflake. Boost security, reduce access risks, and protect crucial data.',
    date: 'Mar 7, 2024',
    readTime: '3 min read',
    url: 'https://medium.com/@manasnilarout/snowflake-generate-an-rsa-key-and-use-it-for-authentication-d56268930476',
    category: 'Security',
  },
  {
    id: 'llama2-mac-setup-2024',
    title: 'Unleashing the Power of Llama2 Models on Mac M Series',
    description:
      "In this blog post, I'll guide you through the setup and management necessary for running Llama2 models on a local Mac M Series machine...",
    date: 'Feb 26, 2024',
    readTime: '3 min read',
    url: 'https://medium.com/@manasnilarout/unleashing-the-power-of-llama2-models-on-mac-m-series-e91f79a1c105',
    category: 'AI & ML',
  },
];

const resumeURL = 'https://docs.google.com/document/d/172vRyMYj3bKzff67v1yzmK4kB6iL4WXWYXk30YuWSRE/edit?usp=sharing';

export default function Blogs() {
  const [open, setOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [sparkles, setSparkles] = useState<Array<{id: string; x: number; y: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({x: e.clientX, y: e.clientY});
      createSparkle();
    };

    const createSparkle = () => {
      setSparkles(prevSparkles => {
        const newSparkle = {
          id: `sparkle-${Date.now()}-${Math.random()}`,
          x: mousePosition.x + (Math.random() - 0.5) * 20,
          y: mousePosition.y + (Math.random() - 0.5) * 20,
        };
        return [...prevSparkles, newSparkle];
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition.x, mousePosition.y]);

  return (
    <div className="min-h-screen w-full">
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold text-primary">Blogs</h1>
      </div>
      
      <div className="absolute top-4 right-4 flex space-x-2 rounded-md bg-secondary p-2 shadow-md">
        <Button asChild variant="outline">
          <Link href="/">Home</Link>
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

      {/* Mobile Navigation - Only shown on mobile */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-background z-50">
        <div className="flex justify-around p-4 bg-secondary shadow-md">
          <Button asChild variant="outline">
            <Link href="/">Home</Link>
          </Button>
          <Button variant="outline" onClick={() => setOpen(true)}>Resume</Button>
          <Button variant="outline">Projects</Button>
        </div>
      </nav>

      {/* Sparkles */}
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

      {/* Blog Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 pb-20 md:pb-8 pt-20">
        <div className="grid gap-6 max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <Card 
              key={blog.id} 
              className="group hover:shadow-lg transition-all duration-300 hover:border-primary/20 bg-secondary overflow-hidden"
            >
              <CardHeader className="space-y-1 pb-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {blog.category}
                  </span>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {blog.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {blog.readTime}
                    </div>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors pt-2">
                  {blog.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{blog.description}</p>
                <div className="flex items-center justify-between">
                  <Link 
                    href={blog.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Read on Medium</span>
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
