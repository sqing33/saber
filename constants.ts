import { BlogPost } from './types';

// Pastel/Soft colors for tags
export const CATEGORY_COLORS: Record<string, string> = {
  Tech: 'bg-slate-100 text-slate-700',
  Lifestyle: 'bg-stone-100 text-stone-700',
  Design: 'bg-orange-50 text-orange-800',
  Travel: 'bg-emerald-50 text-emerald-800',
  Food: 'bg-rose-50 text-rose-800',
};

const LOREM_IPSUM = `
  <p class="mb-8 text-lg leading-loose font-light text-gray-700">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  </p>
  <h3 class="text-2xl font-bold mt-12 mb-6 text-ink">The Beauty of Simplicity</h3>
  <p class="mb-8 text-lg leading-loose font-light text-gray-700">
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
    Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.
  </p>
  <div class="my-12 pl-6 border-l-2 border-gray-200">
    <blockquote class="text-xl italic text-gray-600 leading-relaxed">
      "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep."
    </blockquote>
  </div>
  <p class="mb-8 text-lg leading-loose font-light text-gray-700">
    Integer in volutpat libero. Animi, id est laborum et dolorum fuga. 
    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.
  </p>
  <ul class="space-y-4 mb-12 pl-4">
    <li class="flex items-center text-lg text-gray-700"><span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-4"></span>First key takeaway point.</li>
    <li class="flex items-center text-lg text-gray-700"><span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-4"></span>Second interesting fact.</li>
    <li class="flex items-center text-lg text-gray-700"><span class="w-1.5 h-1.5 rounded-full bg-gray-400 mr-4"></span>Third actionable advice.</li>
  </ul>
`;

export const MOCK_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of React Server Components',
    excerpt: 'Deep dive into how RSCs are changing the landscape of frontend dev.',
    content: LOREM_IPSUM,
    coverImage: 'https://picsum.photos/seed/tech1/800/600',
    author: {
      name: 'Sarah Drasner',
      avatar: 'https://picsum.photos/seed/avatar1/100/100',
      bio: 'Code Wizard'
    },
    date: 'Oct 24',
    readTime: '5 min',
    tags: ['React', 'Web', 'Speed'],
    category: 'Tech'
  },
  {
    id: '2',
    title: 'Minimalist Design: Less is More',
    excerpt: 'Exploring minimalism in digital design. Keep it clean.',
    content: LOREM_IPSUM,
    coverImage: 'https://picsum.photos/seed/design2/800/600',
    author: {
      name: 'Brian Chesky',
      avatar: 'https://picsum.photos/seed/avatar2/100/100',
      bio: 'Design Guru'
    },
    date: 'Nov 12',
    readTime: '3 min',
    tags: ['UI', 'Art', 'Clean'],
    category: 'Design'
  },
  {
    id: '3',
    title: 'A Culinary Journey Through Kyoto',
    excerpt: 'Street food to Kaiseki. A visual diary of tastes.',
    content: LOREM_IPSUM,
    coverImage: 'https://picsum.photos/seed/food3/800/600',
    author: {
      name: 'Anthony B.',
      avatar: 'https://picsum.photos/seed/avatar3/100/100',
      bio: 'Chef'
    },
    date: 'Dec 05',
    readTime: '8 min',
    tags: ['Japan', 'Food', 'Yum'],
    category: 'Travel'
  },
  {
    id: '4',
    title: 'Building Sustainable Habits',
    excerpt: 'Level up your life with consistent daily quests.',
    content: LOREM_IPSUM,
    coverImage: 'https://picsum.photos/seed/life4/800/600',
    author: {
      name: 'James Clear',
      avatar: 'https://picsum.photos/seed/avatar4/100/100',
      bio: 'Habit Master'
    },
    date: 'Jan 15',
    readTime: '6 min',
    tags: ['Health', 'LevelUp'],
    category: 'Lifestyle'
  },
  {
    id: '5',
    title: 'The Art of Sourdough',
    excerpt: 'Baking the perfect bread requires patience.',
    content: LOREM_IPSUM,
    coverImage: 'https://picsum.photos/seed/bread5/800/600',
    author: {
      name: 'Julia Child',
      avatar: 'https://picsum.photos/seed/avatar5/100/100',
      bio: 'French Chef'
    },
    date: 'Feb 20',
    readTime: '12 min',
    tags: ['Baking', 'Food'],
    category: 'Food'
  },
  {
    id: '6',
    title: 'Hidden Gems of Patagonia',
    excerpt: 'Exploring the wild map boundaries of the world.',
    content: LOREM_IPSUM,
    coverImage: 'https://picsum.photos/seed/hike6/800/600',
    author: {
      name: 'Cheryl S.',
      avatar: 'https://picsum.photos/seed/avatar6/100/100',
      bio: 'Explorer'
    },
    date: 'Mar 10',
    readTime: '7 min',
    tags: ['Nature', 'Hike'],
    category: 'Travel'
  }
];