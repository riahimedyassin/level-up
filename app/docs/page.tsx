import { DocsContent } from "@/components/docs-content";
import { TableOfContents } from "@/components/table-of-content";

export default function DocsPage() {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "getting-started", title: "Getting Started" },
    { id: "features", title: "Key Features" },
    { id: "installation", title: "Installation" },
  ];

  return (
    <div className="flex">
      <div className="flex-1 px-8 py-8 max-w-4xl">
        <DocsContent>
          <h1 id="introduction">Documentation</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Welcome to the comprehensive documentation for my work. Here you'll
            find guides, tutorials, and references to help you get started.
          </p>

          <h2 id="getting-started">Getting Started</h2>
          <p>
            This documentation site is built to help you understand and work
            with my projects. Navigate through the sidebar to explore different
            topics and guides.
          </p>
          <p>
            Each section contains detailed information, code examples, and best
            practices to help you make the most of the tools and resources
            available.
          </p>

          <h2 id="features">Key Features</h2>
          <ul>
            <li>
              <strong>Comprehensive Guides</strong> - Step-by-step tutorials for
              common tasks
            </li>
            <li>
              <strong>API Reference</strong> - Detailed documentation of all
              available APIs
            </li>
            <li>
              <strong>Code Examples</strong> - Real-world examples you can copy
              and use
            </li>
            <li>
              <strong>Best Practices</strong> - Learn the recommended approaches
            </li>
          </ul>

          <h2 id="installation">Installation</h2>
          <p>To get started with any of the projects, follow these steps:</p>
          <pre>
            <code>{`npm install my-package
# or
yarn add my-package
# or
pnpm add my-package`}</code>
          </pre>

          <p>
            After installation, you can import and use the package in your
            project:
          </p>
          <pre>
            <code>{`import { MyComponent } from 'my-package'

export default function App() {
  return <MyComponent />
}`}</code>
          </pre>
        </DocsContent>
      </div>
      <TableOfContents sections={sections} />
    </div>
  );
}
