# Create Stack

[![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)](https://github.com/yourusername/create-stack)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)

Create Stack is an interactive CLI tool designed to simplify the initial setup of new software projects. Instead of manually configuring folders and basic dependencies, this tool allows you to generate a fully structured environment for various tech stacks with a single terminal command.

## Features

* **Efficient Project Scaffolding**: Generate a complete and organized project structure instantly.
* **Automated Dependency Management**: Automatically detects and executes the appropriate package manager for your chosen framework.
* **Integrated Git Setup**: Includes an option to initialize a new Git repository during the creation process.
* **Extensive Stack Support**: Provides templates for 25+ modern and production-ready technologies.
* **Lightweight Performance**: Built on Node.js to ensure the tool remains fast and low on system resources.

## Installation

### Global Installation

Installing the package globally is recommended so you can access the tool from any directory.

```bash
npm install -g create-stack
# or
pnpm add -g create-stack
```

### Using npx (No Installation Required)

```bash
npx create-stack
```

### Local Development

To modify templates or contribute to the project locally, follow these steps:

```bash
git clone https://github.com/yourusername/create-stack.git
cd create-stack
pnpm install
pnpm link
```

## Usage

### Generating a Project

You can invoke the tool directly or use npx for a one-time execution.

```bash
create-stack
# or
npx create-stack
```

The tool will prompt you for the following information:
1. Select the desired tech stack.
2. Provide a name for your project.
3. Decide whether to initialize a Git repository.
4. Decide whether to run the dependency installation immediately.

### Expected Output

```text
Starting setup for project my-new-app...

- Creating project folder...
  Project folder created successfully.
- Copying template files...
  Template files transferred.
- Initializing Git...
  Git repository initialized.
- Installing dependencies via pnpm...
  Dependencies installed successfully.

Setup complete. You are ready to start coding.
```

## Supported Tech Stacks

### Frontend & Fullstack Web (7 Stacks)

* **Next.js** - Fullstack React framework with SSR/SSG and API routes
* **React + Vite** - Modern SPA setup with fast bundling
* **Vue.js + Vite** - Progressive Vue framework with optimized tooling
* **Astro** - Content-focused framework with zero JavaScript by default
* **SvelteKit** - Ultra-high performance with best-in-class DX
* **Remix** - Data-focused React framework with excellent error handling
* **Nuxt 3** - Vue fullstack with auto-routing and hybrid rendering

### Backend & API (7 Stacks)

* **Express.js** - Lightweight, flexible Node.js framework
* **NestJS** - Enterprise-ready TypeScript framework with DI and modules
* **FastAPI** - High-performance Python API with automatic documentation
* **Django** - Robust Python framework with batteries included
* **Go Fiber** - Ultra-fast Go framework with minimal overhead
* **Elysia.js** - Type-safe TypeScript APIs for Bun runtime
* **Laravel** - Feature-rich PHP framework with elegant syntax

### Mobile & Desktop (4 Stacks)

* **Flutter** - Cross-platform native mobile development with Dart
* **React Native (Expo)** - JavaScript cross-platform with managed hosting
* **Tauri** - Lightweight desktop apps with Rust and web frontend
* **Electron** - Cross-platform desktop applications

### Backend as a Service (1 Stack)

* **Supabase** - PostgreSQL backend with auth, realtime, and storage

### Database & Infrastructure (3 Stacks)

* **Prisma + PostgreSQL** - Type-safe database layer with migrations
* **Docker Compose** - Full-stack containerization setup
* **Additional Database Options** - MongoDB, MySQL, and more

## Adding New Stacks

To add a new tech stack to Create Stack:

### Step 1: Create Template Directory

```bash
mkdir src/templates/[stack-name]
```

### Step 2: Prepare Template Files

Include the following essential files in your template:

* **Package Configuration** (package.json, go.mod, composer.json, etc)
* **Entry Point** (main application file)
* **.gitignore** (language-specific ignore rules)
* **.env.example** (environment variable template)
* **README.md** (setup instructions)
* **Folder Structure** (src/, pages/, config/, etc as needed)

### Step 3: Register in Configuration

Update `src/config.js` and add your stack:

```javascript
{
  category: "Backend",
  title: "Your Framework Name",
  value: "your-framework",
  pkg: "npm",
  description: "Brief description of what this framework does.",
  bestFor: "Primary use cases and scenarios.",
  language: "Programming Language",
  difficulty: "Easy/Medium/Hard",
  popularity: "⭐⭐⭐⭐",
  tags: ["tag1", "tag2"]
}
```

### Step 4: Test Locally

```bash
pnpm link
create-stack
# Test your new stack
```

## Configuration

Stack configuration is centralized in `src/config.js`. Each stack entry includes:

| Field | Description |
|-------|-------------|
| category | Type of stack (Frontend, Backend, Mobile, BaaS, etc) |
| title | Display name shown in CLI |
| value | Internal identifier for file operations |
| pkg | Package manager (npm, pnpm, pip, composer, go, cargo, pub) |
| description | One-line description |
| bestFor | Primary use cases |
| language | Programming language |
| difficulty | Learning curve (Easy/Medium/Hard) |
| popularity | Star rating assessment |
| trending | Boolean for trending status |
| tags | Array of filter tags |

## How It Works

### 1. Selection Phase

The CLI displays categorized stacks with descriptions. Navigate with arrow keys and press Enter to select.

### 2. Configuration Phase

You are prompted for:
- Project name (becomes folder name)
- Git initialization preference
- Dependency installation preference

### 3. Generation Phase

The tool:
1. Creates project folder
2. Copies template files
3. Initializes Git repository (optional)
4. Detects and runs appropriate package manager (optional)

### 4. Ready to Code

Your project is immediately functional with:
- All dependencies installed (if selected)
- Git repository initialized (if selected)
- Proper folder structure in place
- Entry point file ready to edit

## Package Manager Support

Create Stack automatically detects and uses the correct package manager:

| Stack Type | Supported Managers | Priority |
|---|---|---|
| JavaScript/TypeScript | npm, pnpm, yarn | pnpm > npm > yarn |
| Python | pip, poetry | pip > poetry |
| Go | go mod | go mod |
| Rust | cargo | cargo |
| PHP | composer | composer |
| Dart/Flutter | pub | pub |
| Infrastructure | docker-compose | docker-compose |

If preferred manager is unavailable, automatically falls back to next available option.

## Testing

This project uses Vitest for comprehensive testing. Run the test suite:

```bash
pnpm test
```

Tests cover:
- Unit tests for individual utilities
- Integration tests for template generation
- Package manager detection logic
- File operation correctness

## Project Structure

```
create-stack/
├── bin/
│   └── cli.js                    # Entry point
├── src/
│   ├── config.js                 # Stack definitions
│   ├── index.js                  # Main execution
│   ├── prompts.js                # Interactive CLI
│   ├── generator.js              # Scaffolding logic
│   ├── utils/
│   │   ├── packageManager.js      # Package manager detection
│   │   ├── fileOps.js            # File operations
│   │   └── logger.js             # Formatted output
│   └── templates/
│       ├── nextjs/               # Next.js template
│       ├── react-vite/           # React + Vite template
│       ├── go-fiber/             # Go Fiber template
│       ├── laravel/              # Laravel template
│       └── [25+ more stacks]
├── __tests__/
│   ├── unit/
│   └── integration/
├── package.json
└── README.md
```

## Contributing

Contributions are welcome and encouraged. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes with clear messages (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Guidelines

- Follow existing code style and patterns
- Test your changes thoroughly
- Update documentation as needed
- Ensure all templates follow best practices
- Include clear commit messages

## Troubleshooting

### Package Manager Not Found

Ensure your preferred package manager is installed and in system PATH. Create Stack will automatically use an available alternative.

```bash
# Check if package manager is available
npm --version
pnpm --version
python --version
```

### Permission Errors

Ensure you have write permissions in the directory:

```bash
# Linux/macOS
chmod u+w .

# Windows
icacls . /grant:r "%username%:(OI)(CI)F"
```

### Dependencies Installation Fails

Install manually after project creation:

```bash
cd your-project
npm install  # or appropriate package manager
```

### Outdated Templates

Update to latest version:

```bash
npm install -g create-stack@latest
```

## Performance

Create Stack is optimized for speed:

- CLI prompts render instantly
- File copying is efficient
- Parallel dependency installation
- Minimal template disk footprint
- Typical generation: 30-60 seconds

## Roadmap

Planned features for upcoming releases:

- Custom template support (user-defined templates)
- Plugin system for extending functionality
- Git integration (automatic initial commits, GitHub repo creation)
- CI/CD pipeline templates (GitHub Actions, GitLab CI)
- Docker container configuration templates
- Database setup assistance
- Monorepo scaffold support (Turborepo, Nx)
- Web-based UI alternative to CLI
- Template version management
- Analytics and usage insights

## License

This project is licensed under the ISC License. See the LICENSE file for details.

## Acknowledgments

This tool leverages excellent open-source libraries:

* **Prompts** - Interactive command-line prompts
* **Fs-extra** - File system utilities with promises
* **Ora** - Elegant terminal spinners
* **Chalk** - Terminal string styling

## Support

For issues, feature requests, or questions:

- Open an issue on GitHub
- Check existing documentation
- Review the troubleshooting section
- Visit the project wiki

## Changelog

### Version 2.0.0
- Added 15 new tech stacks (25 total support)
- Improved CLI categorization
- Enhanced package manager detection
- Better error messages
- Comprehensive documentation
- Template quality improvements

### Version 1.1.0
- Initial stable release
- 10 core tech stacks
- Git integration
- Basic package manager detection
- Interactive CLI prompts

---

**Last Updated:** 2024
**Maintained by:** [Your Name/Organization]
**GitHub:** https://github.com/kandarlubis/create-stack