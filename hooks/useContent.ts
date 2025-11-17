
import { useState, useEffect } from 'react';

// A simple cache object
const cache: { [key: string]: any } = {};

export function useContent<T,>(path: string): T | null {
  const [content, setContent] = useState<T | null>(cache[path] || null);

  useEffect(() => {
    if (cache[path]) {
      setContent(cache[path]);
      return;
    }

    let isMounted = true;
    
    const fetchContent = async () => {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${path}`);
        }
        const data = await response.json();
        if (isMounted) {
          cache[path] = data;
          setContent(data);
        }
      } catch (error) {
        console.error("Error fetching content:", error);
        if (isMounted) {
          setContent(null);
        }
      }
    };

    fetchContent();

    return () => {
      isMounted = false;
    };
  }, [path]);

  return content;
}
   