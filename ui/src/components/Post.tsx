import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Building a REST API with Node.js & Express",
    date: "April 28, 2026",
    tag: "Backend",
    excerpt: "A deep dive into designing scalable REST APIs with proper error handling, middleware, and authentication.",
    readTime: "8 min read",
    sections: [
      {
        heading: "Setting Up the Project",
        content: "Start by initializing a new Node.js project and installing Express along with the necessary middleware packages. We'll use a clean folder structure to keep things maintainable.",
        code: {
          lang: "bash",
          snippet: `npm init -y
npm install express dotenv cors helmet morgan
npm install -D nodemon`,
        },
      },
      {
        heading: "Creating the Express Server",
        content: "The entry point wires up middleware and routes. We use helmet for security headers, cors for cross-origin requests, and morgan for request logging.",
        code: {
          lang: "javascript",
          snippet: `import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { userRouter } from './routes/users.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
        },
      },
      {
        heading: "Error Handling Middleware",
        content: "Centralized error handling keeps your route handlers clean. Any error thrown in a route gets forwarded here via next(err).",
        code: {
          lang: "javascript",
          snippet: `export const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};`,
        },
      },
    ],
  },
  {
    id: 2,
    title: "Mastering CSS Grid Layouts",
    date: "April 15, 2026",
    tag: "CSS",

    excerpt: "CSS Grid unlocks powerful two-dimensional layouts. Here's everything you need to know with practical examples.",
    readTime: "6 min read",
    sections: [
      {
        heading: "The Grid Container",
        content: "Grid starts with a container element. Use grid-template-columns and grid-template-rows to define the track structure. The fr unit distributes available space proportionally.",
        code: {
          lang: "css",
          snippet: `.layout {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
  gap: 1.5rem;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main   { grid-area: main; }`,
        },
      },
      {
        heading: "Auto-Responsive Grids",
        content: "With auto-fill and minmax, you can build grids that respond without media queries. Items wrap automatically once they can't fit the minimum size.",
        code: {
          lang: "css",
          snippet: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
}`,
        },
      },
    ],
  },
  {
    id: 3,
    title: "React useEffect: The Complete Guide",
    date: "March 30, 2026",
    tag: "React",

    excerpt: "Understand the dependency array, cleanup functions, and common pitfalls when using useEffect in React apps.",
    readTime: "10 min read",
    sections: [
      {
        heading: "Basic Usage & Dependencies",
        content: "useEffect runs after every render by default. Pass a dependency array as the second argument to control when it re-runs. An empty array means it runs once on mount.",
        code: {
          lang: "jsx",
          snippet: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]); // Re-runs only when userId changes

  if (loading) return <Spinner />;
  return <div>{user?.name}</div>;
}`,
        },
      },
      {
        heading: "Cleanup Functions",
        content: "Return a function from useEffect to run cleanup before the next effect or on unmount. Essential for subscriptions, timers, and event listeners.",
        code: {
          lang: "jsx",
          snippet: `useEffect(() => {
  const controller = new AbortController();

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(setData)
    .catch(err => {
      if (err.name !== 'AbortError') console.error(err);
    });

  return () => controller.abort(); // Cleanup on unmount
}, []);`,
        },
      },
    ],
  },
  {
    id: 4,
    title: "TypeScript Generics Explained",
    date: "March 10, 2026",
    tag: "TypeScript",
    excerpt: "Generics are the key to writing reusable, type-safe code. Let's break them down with real-world examples.",
    readTime: "7 min read",
    sections: [
      {
        heading: "Your First Generic Function",
        content: "A generic function works with any type while preserving type information. The type parameter T acts as a placeholder that TypeScript fills in at call site.",
        code: {
          lang: "typescript",
          snippet: `function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);     // num: number
const str = identity("hello");         // str: string (inferred)

// Generic with constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: 'Alex', age: 28 };
const name = getProperty(user, 'name'); // string`,
        },
      },
      {
        heading: "Generic React Components",
        content: "Generics shine in React when you want a reusable component that works with different data shapes.",
        code: {
          lang: "tsx",
          snippet: `interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={keyExtractor(item)}>{renderItem(item, i)}</li>
      ))}
    </ul>
  );
}`,
        },
      },
    ],
  },
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

    const kws = keywords[lang] || keywords.javascript;
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
  const [copied, setCopied] = useState(false);
  const lines = tokenize(code.snippet, code.lang);

  const handleCopy = () => {
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

const PostCard = ({ post, onClick }) => (
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
      <span className={`text-xs font-mono px-2.5 py-1 rounded-full border border-gray-300`}>
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

const PostDetail = ({ post, onBack }) => (
  <motion.div
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 40 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="max-w-2xl mx-auto"
  >
    <button
      onClick={onBack}
      className="flex items-center gap-2 cursor-pointer text-sm text-white/40 hover:text-white/80 transition-colors mb-10 font-mono group"
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
        <span className="text-xs text-white/50 font-mono">{post.date}</span>
        <span className="text-xs text-white/40 font-mono">· {post.readTime}</span>
      </div>

      <h1 className="text-3xl font-bold text-white/95 leading-tight font-main mb-6">{post.title}</h1>
      <p className="text-white/50 font-main tracking-wide leading-relaxed text-base mb-12">{post.excerpt}</p>

      <div className="w-full h-px bg-white/8 mb-12" />
    </motion.div>

    <div className="space-y-12">
      {post.sections.map((section, i) => (
        <motion.section
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
        >
          <h2 className="text-xl font-semibold text-white/85 mb-3 flex items-center gap-3 font-main">
            <span className=" rounded-md  font-extrabold  flex items-center justify-center text-md  font-mono shrink-0">
              {i + 1}.
            </span>
            {section.heading}
          </h2>
          <p className="text-white/50 leading-relaxed text-md font-normal tracking-wide mb-2 font-main">{section.content}</p>
          <CodeBlock code={section.code} />
        </motion.section>
      ))}
    </div>
  </motion.div>
);

export default function PostsPage() {
  const [selected, setSelected] = useState(null);

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
                <p className="text-xs font-mono text-indigo-400 mb-2 tracking-widest uppercase">Writings</p>
                <h1 className="text-4xl font-bold text-white/90 mb-3 font-main tracking-wide">Posts</h1>
                <p className="text-white/40 text-sm font-semibold">
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
        <h1 className="text-center text-gray-300 font-spec font-semibold text-4xl tracking-widest"> Thanks for walking on it... </h1>
       </div>

    </div>
  );
}