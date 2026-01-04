export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML or Markdown string
  coverImage: string;
  author: Author;
  date: string;
  readTime: string;
  tags: string[];
  category: 'Tech' | 'Lifestyle' | 'Design' | 'Travel' | 'Food';
}