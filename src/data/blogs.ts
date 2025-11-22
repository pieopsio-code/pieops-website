export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  category?: string;
  date?: string;
  readTime?: string;
  content?: string[];
  contentMarkdown?: string;
};

type BlogMetadata = Omit<BlogPost, 'content' | 'contentMarkdown'>;

const metadataModules = import.meta.glob('../../files/blogs/**/metadata.json', {
  eager: true,
});

const markdownModules = import.meta.glob('../../files/blogs/**/*.md', {
  eager: true,
  as: 'raw',
});

const markdownByDir = Object.entries(markdownModules).reduce<Record<string, string>>(
  (acc, [path, module]) => {
    const dir = path.replace(/[^/]+$/, '');
    acc[dir] = module as string;
    return acc;
  },
  {},
);

const dynamicPosts: BlogPost[] = Object.entries(metadataModules).map(([path, mod]) => {
  const dir = path.replace(/metadata\.json$/, '');
  const meta = (mod as { default: BlogMetadata }).default ?? (mod as BlogMetadata);
  return {
    ...meta,
    contentMarkdown: markdownByDir[dir] ?? '',
  };
});

const curatedPosts: BlogPost[] = [
  {
    slug: 'migrating-to-cloud-native-in-90-days',
    title: 'Migrating to Cloud Native in 90 Days',
    description:
      'A proven playbook we use with fintech clients to modernize legacy platforms without downtime.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=80',
    category: 'Cloud Native',
    date: 'Oct 28, 2024',
    readTime: '6 min read',
    content: [
      'Digital-first institutions want the elasticity and velocity the cloud promises but rarely have the appetite for multi-quarter migrations. We break the work into three 30-day tranches focused on readiness, landing-zone buildout, and incremental cutover.',
      'Each wave has clear exit criteria, an enablement plan for internal teams, and golden paths that remove guesswork. The result is a low-risk migration that de-risks compliance while delivering quick wins.',
    ],
  },
  {
    slug: 'designing-observability-that-scales',
    title: 'Designing Observability That Scales',
    description:
      'What to measure, how to visualize, and the tooling stack PieOps recommends for resilient systems.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&q=80',
    category: 'Observability',
    date: 'Sep 17, 2024',
    readTime: '8 min read',
    content: [
      'Observability debt compounds fast as teams ship services. We outline the four data pillars—logs, metrics, traces, and events—and map them to personas so operators, developers, and product teams see the signals they need.',
      'We also share reference dashboards and alert design patterns that prevent noisy pages while keeping SLIs in check.',
    ],
  },
  {
    slug: 'ai-assistants-for-devsecops-teams',
    title: 'AI Assistants for DevSecOps Teams',
    description:
      'We benchmarked leading copilots across real remediation workflows—here is what we learned.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=500&q=80',
    category: 'AI & Automation',
    date: 'Aug 02, 2024',
    readTime: '5 min read',
    content: [
      'Copilots are finally useful for on-call engineers, but only when grounded in real telemetry and runbooks. We tested popular assistants against real incidents and measured time-to-resolution.',
      'The article details where AI shines, when to fall back to humans, and how to integrate copilots responsibly into regulated environments.',
    ],
  },
  {
    slug: 'platform-engineering-reference-architecture',
    title: 'Platform Engineering Reference Architecture',
    description:
      'Opinionated blueprint for delivering golden paths, self-service infra, and policy guardrails.',
    image:
      'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&q=80',
    category: 'Platform Engineering',
    date: 'Jul 12, 2024',
    readTime: '7 min read',
    content: [
      'Successful platform teams balance developer joy with governance. We outline a layered architecture that codifies environments, workflows, and compliance so product teams get paved roads.',
      'Expect diagrams, terraform snippets, and KPIs that keep platform investments aligned to business value.',
    ],
  },
];

export const blogPosts: BlogPost[] = [...dynamicPosts, ...curatedPosts];

