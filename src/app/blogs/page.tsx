'use client';

import Link from 'next/link';
import {ExternalLink} from 'lucide-react';

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

export default function Blogs() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <h1 className="text-2xl font-bold text-center mb-6 text-primary-foreground">Blogs</h1>
      <ul className="w-full max-w-2xl">
        {blogs.map((blog, index) => (
          <li key={index} className="mb-8">
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


    