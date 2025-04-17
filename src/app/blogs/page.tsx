'use client';

import Link from 'next/link';
import {ExternalLink} from 'lucide-react';
import {Button} from "@/components/ui/button";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {useState} from "react";

const blogs = [
  {
    title: 'Snowflake—Generate an RSA key and use it for Authentication',
    description:
      'Learn how to generate an RSA key and use it for authentication in Snowflake. Boost security, reduce access risks, and protect crucial data.',
    date: 'Mar 7, 2024',
    readTime: '3 min read',
    url: 'https://medium.com/@manasnilarout/snowflake-generate-an-rsa-key-and-use-it-for-authentication-d56268930476',
  },
  {
    title: 'Unleashing the Power of Llama2 Models on Mac M Series',
    description:
      "In this blog post, I'll guide you through the setup and management necessary for running Llama2 models on a local Mac M Series machine...",
    date: 'Feb 26, 2024',
    readTime: '3 min read',
    url: 'https://medium.com/@manasnilarout/unleashing-the-power-of-llama2-models-on-mac-m-series-e91f79a1c105',
  },
];

const resumeURL = 'https://docs.google.com/document/d/172vRyMYj3bKzff67v1yzmK4kB6iL4WXWYXk30YuWSRE/edit?usp=sharing';

export default function Blogs() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
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
      <h1 className="text-2xl font-bold text-center mb-6 text-primary-foreground">Blogs</h1>
      <ul className="w-full max-w-2xl">
        {blogs.map((blog, index) => (
          <li key={index} className="mb-8 p-4 rounded-md bg-secondary">
            <div className="text-lg font-semibold text-primary-foreground">{blog.title}</div>
            <p className="text-sm text-muted-foreground">{blog.description}</p>
            <div className="flex items-center justify-between mt-2">
              <div className="text-xs text-muted-foreground">
                Published on {blog.date} · {blog.readTime}
              </div>
              <Link href={blog.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1">
                <span className="text-xs text-muted-foreground">Read on Medium</span>
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
