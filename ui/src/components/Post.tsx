import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PostSection = {
  heading: string;
  content: string;
  code?: {
    lang: string;
    snippet: string;
  };
};

type Post = {
  id: number;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  readTime: string;
  sections: PostSection[];
};

const posts: Post[] = [
 {
  id: 2,
  title: "Sharing Modules & Services in Turborepo (pnpm Workspace)",
  date: "May 5, 2026",
  tag: "Turborepo",
  excerpt: "Learn how to create reusable packages in Turborepo and share services across web and backend apps using pnpm workspaces.",
  readTime: "11 min read",
  sections: [
    {
      heading: "Understanding the Monorepo Structure",
      content: "In a Turborepo, the 'apps' folder contains your applications (frontend, backend), while 'packages' holds shared code like utilities, services, and database logic.",
      code: {
        lang: "bash",
        snippet: `apps/
  web/
  api/
packages/
  ui/
  db/
  services/
pnpm-workspace.yaml`,
      },
    },
    {
      heading: "Why Use Shared Packages?",
      content: "Shared packages prevent code duplication and keep logic centralized. For example, authentication logic, API clients, or utility functions can be reused across both frontend and backend.",
    },
    {
      heading: "Creating a Common Service Package",
      content: "Create a new package inside the 'packages' folder. This will hold your shared service logic.",
      code: {
        lang: "bash",
        snippet: `cd packages
mkdir services
cd services
pnpm init -y`,
      },
    },
     {
      heading: "Folder structure for reference",
      content: "This is the sample folder structure  so that you can follow up with me.",
      code: {
        lang: "bash",
                snippet: `packages/services/
        │
        ├── auth.js 
        ├── index.js
        ├── package.json
        └── tsconfig.json (optional)`,
      },
    },
    {
      heading: "Setting Up package.json for Exports",
      content: "Define a proper package name and exports so other apps can import it cleanly.",
      code: {
        lang: "json",
        snippet: `{
  "name": "@repo/services",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "exports": {
    ".": "./index.js",
    "./auth": "./auth.js"
  }
}`,
      },
    },
    {
      heading: "Creating a Common Service (Example: Auth Service)",
      content: "Let’s create a reusable authentication service that can be used in both frontend and backend.",
      code: {
        lang: "javascript",
        snippet: `// packages/services/auth.js

export const loginUser = async (email, password) => {
  // mock example
  if (!email || !password) {
    throw new Error("Missing credentials");
  }

  return {
    id: "user_123",
    email,
    token: "jwt_token_example",
  };
};

export const logoutUser = () => {
  return { success: true };
};`,
      },
    },
    {
      heading: "Exporting Services from Index File",
      content: "Create a central export file so consumers can import everything from one place.",
      code: {
        lang: "javascript",
        snippet: `// packages/services/index.js

     export * from './auth.js';`,
      },
    },
    {
      heading: "Adding these packages to your apps/web/package.json or apps/api/package.json",
      content: "Ensure your package is included in pnpm workspace configuration.",
      code: {
        lang: "yaml",
        snippet: `{
  "name": "web",
  "version": "1.0.0",
  "main": "index.js",
  "types": "index.d.ts",
  "depenedencies": {
        "@repo/services": "workspace: *"    // Name should be same as the name of your package in package.json
    }
}`,
      },
    },
    {
      heading: "Now, update dependencies globally",
      content: "To use these import services or packges, now update the dependencies globally, run pnpm install from the root of the repo",
      code: {
        lang: "bash",
        snippet: `
         pnpm install
         `,
      },
    },
    
    {
      heading: "Backend Usage Example",
      content: "Now you can import and use the shared service in your backend routes.",
      code: {
        lang: "javascript",
        snippet: `import { loginUser } from '@repo/services';

app.post('/login', async (req, res) => {
  try {
    const user = await loginUser(req.body.email, req.body.password);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});`,
      },
    },
    {
      heading: "Frontend Usage Example",
      content: "Import the same service and use it inside your UI logic.",
      code: {
        lang: "javascript",
        snippet: `import { loginUser } from '@repo/services';

const handleLogin = async () => {
  const user = await loginUser("test@mail.com", "123456");
  console.log(user);
};`,
      },
    },
    {
      heading: "TypeScript Support (Optional but Recommended)",
      content: "If you're using TypeScript, define types inside your package for better DX.",
      code: {
        lang: "typescript",
        snippet: `// packages/services/auth.ts

export interface User {
  id: string;
  email: string;
  token: string;
}

export const loginUser = async (email: string, password: string): Promise<User> => {
  return {
    id: "user_123",
    email,
    token: "jwt_token_example",
  };
};`,
      },
    },
    {
      heading: "Common Issues and Fixes",
      content: "Here are some common problems when sharing packages in Turborepo.",
      code: {
        lang: "bash",
        snippet: `# Issue 1: Module not found
# Fix: Ensure package name matches and is installed

# Issue 2: Changes not reflecting
# Fix: Restart dev server or use turbo watch

# Issue 3: ESM/CJS conflict
# Fix: Add "type": "module" in package.json

# Issue 4: Types not working
# Fix: Ensure "types" field is defined`,
      },
    },
    {
      heading: "Best Practices",
      content: "Keep shared packages small and focused. Avoid putting app-specific logic inside them. Treat packages like independent libraries with clear boundaries.",
    },
    {
      heading: "Final Thoughts",
      content: "Sharing services through the packages folder is one of the most powerful patterns in Turborepo. It improves maintainability, reduces duplication, and helps scale your applications cleanly across frontend and backend.",
    },
  ],
},

    


{
  id: 3,
  title: "Multi-Stage vs Normal Dockerfile (Complete Guide)",
  date: "May 5, 2026",
  tag: "Docker",
  excerpt: "Understand the difference between normal and multi-stage Dockerfiles, why multi-stage builds matter, and how to use them for cleaner, smaller production images.",
  readTime: "9 min read",
  sections: [
    {
      heading: "What is a Dockerfile?",
      content: "A Dockerfile is a set of instructions used to build a Docker image. It defines how your application is packaged, including dependencies, environment, and runtime setup.",
    },
    {
      heading: "Normal Dockerfile (Single Stage)",
      content: "A normal Dockerfile builds everything in a single stage. This means dependencies, build tools, and final app all exist in the same image.",
      code: {
        lang: "docker",
        snippet: `# Single-stage Dockerfile

FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]`,
      },
    },
    {
      heading: "Problem with Normal Dockerfile",
      content: "Single-stage builds include unnecessary files like dev dependencies, source code, and build tools. This leads to larger image sizes and potential security risks.",
      code: {
        lang: "bash",
        snippet: `# Issues:
- Large image size
- Slower deployments
- More attack surface
- Includes dev dependencies`,
      },
    },
    {
      heading: "What is Multi-Stage Dockerfile?",
      content: "Multi-stage builds allow you to use multiple FROM statements. You can separate build and runtime environments, copying only necessary artifacts to the final image.",
    },
    {
      heading: "Multi-Stage Dockerfile Example",
      content: "Here’s how you can optimize your Dockerfile using multi-stage builds.",
      code: {
        lang: "docker",
        snippet: `# Stage 1: Build stage
FROM node:22:alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY package.json ./

RUN npm install --only=production

EXPOSE 3000

CMD ["node", "dist/index.js"]`,
      },
    },
    {
      heading: "How Multi-Stage Works",
      content: "The first stage builds the app (with all dependencies). The second stage copies only the compiled output (like dist folder), keeping the final image clean and lightweight.",
    },
    {
      heading: "Key Benefits of Multi-Stage Builds",
      content: "Multi-stage Dockerfiles significantly improve production readiness.",
      code: {
        lang: "bash",
        snippet: `# Benefits:
- Smaller image size
- Faster deployments
- Improved security
- Cleaner separation of concerns
- No dev dependencies in production`,
      },
    },
    {
      heading: "Real Comparison (Size Difference)",
      content: "Let’s compare image sizes between single-stage and multi-stage builds.",
      code: {
        lang: "bash",
        snippet: `# Single-stage image
~800MB

# Multi-stage image
~150MB`,
      },
    },
    {
      heading: "Best Practices",
      content: "Follow these practices when writing Dockerfiles for production.",
      code: {
        lang: "bash",
        snippet: `# Use alpine images when possible
# Separate build and runtime
# Avoid copying unnecessary files
# Use .dockerignore
# Install only production dependencies`,
      },
    },
    {
      heading: "Common Mistakes",
      content: "Even with multi-stage builds, some common mistakes can reduce effectiveness.",
      code: {
        lang: "bash",
        snippet: `# Mistake 1: Copying node_modules from builder
# Mistake 2: Not using alpine images
# Mistake 3: Leaving build tools in final image
# Mistake 4: Not using --only=production`,
      },
    },
    {
      heading: "When to Use Which?",
      content: "Single-stage Dockerfiles are fine for quick prototypes or local development. Multi-stage builds should always be used for production-grade applications.",
    },
    {
      heading: "Final Thoughts",
      content: "Multi-stage Dockerfiles are a must-have for modern applications. They help you ship smaller, faster, and more secure containers. Once you start using them, going back to single-stage builds feels inefficient and outdated.",
    },
  ],
}
  
];

const tokenize = (code:any, lang:any) => {
  const keywords = {
    javascript: ["import", "export", "from", "const", "let", "var", "function", "return", "if", "else", "async", "await", "new", "class", "extends", "default", "throw", "typeof", "instanceof", "true", "false", "null", "undefined", "process", "console"],
    typescript: ["import", "export", "from", "const", "let", "var", "function", "return", "if", "else", "async", "await", "new", "class", "extends", "default", "throw", "typeof", "instanceof", "true", "false", "null", "undefined", "interface", "type", "keyof", "extends", "string", "number", "boolean"],
    jsx: ["import", "export", "from", "const", "let", "var", "function", "return", "if", "else", "async", "await", "new", "class", "true", "false", "null", "undefined"],
    tsx: ["import", "export", "from", "const", "let", "var", "function", "return", "if", "else", "async", "await", "new", "class", "true", "false", "null", "undefined", "interface", "type"],
    css: ["display", "grid", "grid-template-columns", "grid-template-rows", "grid-template-areas", "grid-area", "gap", "min-height", "repeat", "auto-fill", "minmax"],
    bash: [],
  };

  const lines = code.split("\n");
  return lines.map((line:any, li:any) => {
    if (lang === "bash") {
      if (line.startsWith("npm") || line.startsWith("#")) {
        return (
          <div key={li}>
            <span style={{ color: "#4ec9b0" }}>{line}</span>
          </div>
        );
      }
      return <div key={li}><span style={{ color: "#d4d4d4" }}>{line}</span></div>;
    }

    if (lang === "css") {
      if (line.trim().startsWith(".") || line.trim().startsWith("#")) {
        return <div key={li}><span style={{ color: "#d7ba7d" }}>{line}</span></div>;
      }
      if (line.includes(":") && !line.includes("{")) {
        const [prop, ...rest] = line.split(":");
        return (
          <div key={li}>
            <span style={{ color: "#9cdcfe" }}>{prop}</span>
            <span style={{ color: "#d4d4d4" }}>:</span>
            <span style={{ color: "#ce9178" }}>{rest.join(":")}</span>
          </div>
        );
      }
      return <div key={li}><span style={{ color: "#d4d4d4" }}>{line}</span></div>;
    }

    const kws = keywords[lang as keyof typeof keywords] || keywords.javascript;
    const parts = [];
    let remaining = line;
    let key = 0;

    while (remaining.length > 0) {
      const commentIdx = remaining.indexOf("//");
      if (commentIdx !== -1) {
        const before = remaining.slice(0, commentIdx);
        if (before) parts.push(<span key={key++} style={{ color: "#d4d4d4" }}>{before}</span>);
        parts.push(<span key={key++} style={{ color: "#6a9955" }}>{remaining.slice(commentIdx)}</span>);
        break;
      }

      const strMatch = remaining.match(/^([^`'"]*?)(`[^`]*`|'[^']*'|"[^"]*")/);
      if (strMatch) {
        if (strMatch[1]) parts.push(<span key={key++} style={{ color: "#d4d4d4" }}>{strMatch[1]}</span>);
        parts.push(<span key={key++} style={{ color: "#ce9178" }}>{strMatch[2]}</span>);
        remaining = remaining.slice(strMatch[0].length);
        continue;
      }

      const kwMatch = kws
        .map((kw:any) => {
          const re = new RegExp(`\\b(${kw})\\b`);
          const m = remaining.match(re);
          return m ? { kw, idx: m.index, len: kw.length } : null;
        })
        .filter(Boolean)
        .sort((a:any, b:any) => a.idx - b.idx)[0];

      if (kwMatch) {
        if (kwMatch.idx > 0) parts.push(<span key={key++} style={{ color: "#d4d4d4" }}>{remaining.slice(0, kwMatch.idx)}</span>);
        parts.push(<span key={key++} style={{ color: "#569cd6" }}>{kwMatch.kw}</span>);
        remaining = remaining.slice(kwMatch.idx + kwMatch.len);
        continue;
      }

      parts.push(<span key={key++} style={{ color: "#d4d4d4" }}>{remaining}</span>);
      break;
    }

    return <div key={li}>{parts.length ? parts : <span>&nbsp;</span>}</div>;
  });
};

const CodeBlock = ({ code }: any) => {
   if (!code) return null; // 👈 important guard

  const [copied, setCopied] = useState(false);
  const lines = tokenize(code.snippet || "", code.lang || "javascript");

  const handleCopy = () => {
    if (!code.snippet) return;
    navigator.clipboard.writeText(code.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="my-5 rounded-xl overflow-hidden border border-white/10"
      style={{ background: "#1e1e1e" }}
    >
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10" style={{ background: "#2d2d2d" }}>
        <div className="flex items-center gap-2">
          <span className="ml-3 text-xs text-white/40 font-mono">{code.lang}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-md transition-all duration-200"
          style={{
            background: copied ? "rgba(78,201,176,0.15)" : "rgba(255,255,255,0.07)",
            color: copied ? "#4ec9b0" : "rgba(255,255,255,0.5)",
            border: `1px solid ${copied ? "rgba(78,201,176,0.3)" : "rgba(255,255,255,0.1)"}`,
          }}
        >
          {copied ? (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5" /></svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" /></svg>
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="font-mono text-sm leading-relaxed" style={{ margin: 0 }}>
          {lines}
        </pre>
      </div>
    </motion.div>
  );
};

const PostCard = ({ post, onClick }: any) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    onClick={onClick}
    className="group relative cursor-pointer bg-black rounded-2xl p-6 border border-white/8 transition-colors duration-300"
    
  >
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    />
    <div className="flex items-start justify-between gap-4 mb-4">
      <span className={`text-xs font-mono px-2.5 py-1 theme-text-secondary  rounded-full border border-gray-300`}>
        {post.tag}
      </span>
      <span className="text-xs text-white/30 font-mono">{post.date}</span>
    </div>
    <h2 className="text-lg font-semibold font-main text-white/90 mb-2 group-hover:text-white transition-colors leading-snug">
      {post.title}
    </h2>
    <p className="text-sm text-white/45 leading-relaxed mb-5 font-medium">{post.excerpt}</p>
    <div className="flex items-center justify-between">
      <span className="text-xs text-white/25 font-mono">{post.readTime}</span>
      <motion.span
        className="text-xs text-indigo-400 font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.2 }}
      >
        Read post
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.span>
    </div>
  </motion.article>
);

const PostDetail = ({ post, onBack }: any) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 40 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="max-w-2xl mx-auto"
  >
    <button
      onClick={onBack}
      className="flex items-center gap-2 theme-text-secondary cursor-pointer text-sm text-white/40 hover:text-white/80 transition-colors mb-10 font-mono group"
    >
      <motion.span whileHover={{ x: -3 }} transition={{ type: "spring", stiffness: 300 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </motion.span>
      Back to posts
    </button>

    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
      <div className="flex items-center gap-3 mb-5">
        <span className={`text-xs font-mono px-2.5 py-1 rounded-md border ${post.tagColor}`}>
          {post.tag}
        </span>
        <span className="text-xs text-white/50 theme-text-secondary font-mono">{post.date}</span>
        <span className="text-xs text-white/40 font-mono theme-text-secondary">· {post.readTime}</span>
      </div>

      <h1 className="text-3xl font-bold text-white/95 leading-tight font-main mb-6 theme-text-primary">{post.title}</h1>
      <p className="text-white/50 font-main tracking-wide leading-relaxed text-base mb-12 theme-text-secondary">{post.excerpt}</p>

      <div className="w-full h-px bg-white/8 mb-12 theme-bg-secondary" />
    </motion.div>

    <div className="space-y-12">
      {post.sections.map((section:any, i:any) => (
        <motion.section
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-white/85 mb-3 theme-text-primary flex items-center gap-3 font-main">
            <span className=" rounded-md theme-text-primary  font-extrabold  flex items-center justify-center text-md  font-mono shrink-0">
              {i + 1}.
            </span>
            {section.heading}
          </h2>
          <p className="text-white/50 leading-relaxed text-md font-normal tracking-wide mb-2 theme-text-secondary font-main">{section.content}</p>
         {section.code && <CodeBlock code={section.code} />}
        </motion.section>
      ))}
    </div>
  </motion.div>
);

export default function PostsPage() {
  const [selected, setSelected] = useState<Post | null>(null);

  return (
    <div
      className="px-6 py-8 "
    >
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-14"
              >
                <p className="text-xs font-mono text-indigo-400 theme-text-primary mb-2 tracking-widest uppercase">Writings</p>
                <h1 className="text-4xl font-bold text-white/90 mb-3 font-main theme-text-primary tracking-wide">Posts</h1>
                <p className="text-white/40 text-sm font-semibold theme-text-secondary">
                  Thoughts on code, design, and building things on the web.
                </p>
              </motion.div>

              <div className="grid gap-4">
                {posts.map((post, i) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.4 }}
                  >
                    <PostCard post={post} onClick={() => setSelected(post)} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <PostDetail post={selected} onBack={() => setSelected(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

       <div className="thanks pt-6">
        <h1 className="text-center text-gray-300 font-spec font-semibold theme-text-primary text-4xl tracking-widest"> Thanks for walking on it... </h1>
       </div>

    </div>
  );
}