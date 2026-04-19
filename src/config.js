module.exports = {
  stacks: [
    { category: 'Frontend', title: 'Next.js', value: 'next', pkg: 'pnpm', description: 'Fullstack React framework dengan SSR/SSG.', bestFor: 'SaaS, e-commerce, production web.' },
    { category: 'Frontend', title: 'React + Vite', value: 'react', pkg: 'pnpm', description: 'Single Page Application (SPA) standar industri.', bestFor: 'Dashboard, web interaktif.' },
    { category: 'Frontend', title: 'Vue.js + Vite', value: 'vue', pkg: 'pnpm', description: 'Framework progresif yang ringan dan cepat.', bestFor: 'Admin panel, medium SPA.' },
    { category: 'Frontend', title: 'Astro', value: 'astro', pkg: 'pnpm', description: 'Static site generator dengan zero-JS default.', bestFor: 'Blog, content-heavy sites.' },
    { category: 'Frontend', title: 'SvelteKit', value: 'sveltekit', pkg: 'pnpm', description: 'Modern web app framework tanpa virtual DOM.', bestFor: 'Aplikasi web super cepat.' },
    
    { category: 'Backend', title: 'Express.js', value: 'express', pkg: 'pnpm', description: 'Web framework Node.js minimalis dan fleksibel.', bestFor: 'REST API, microservices.' },
    { category: 'Backend', title: 'NestJS', value: 'nestjs', pkg: 'pnpm', description: 'Framework Node.js enterprise berbasis TypeScript.', bestFor: 'Scalable API, tim besar.' },
    { category: 'Backend', title: 'FastAPI', value: 'fastapi', pkg: 'pip', description: 'Web framework Python modern dan super cepat.', bestFor: 'Machine learning API, data processing.' },
    { category: 'Backend', title: 'Django', value: 'django', pkg: 'pip', description: 'Framework Python dengan fitur lengkap bawaan.', bestFor: 'Sistem admin kompleks, full-featured app.' },
    { category: 'Backend', title: 'Go Fiber', value: 'fiber', pkg: 'go', description: 'Web framework Go yang terinspirasi Express.', bestFor: 'High-performance API, backend ringan.' },
    { category: 'Backend', title: 'Elysia.js', value: 'elysia', pkg: 'bun', description: 'Framework TypeScript super cepat.', bestFor: 'Edge computing, ultra-fast API.' },
    { category: 'Backend', title: 'Laravel', value: 'laravel', pkg: 'composer', description: 'Framework PHP elegan untuk web artisan.', bestFor: 'Web app modern, MVC architecture.' },
    
    { category: 'Mobile', title: 'Flutter', value: 'flutter', pkg: 'flutter', description: 'UI toolkit Google untuk aplikasi native.', bestFor: 'Cross-platform iOS & Android app.' },
    { category: 'Mobile', title: 'Expo (React Native)', value: 'expo', pkg: 'pnpm', description: 'Framework universal untuk React Native.', bestFor: 'Mobile app dengan ekosistem JavaScript.' },
    
    { category: 'BaaS', title: 'Supabase', value: 'supabase', pkg: 'none', description: 'Alternatif open-source Firebase berbasis PostgreSQL.', bestFor: 'MVP cepat, realtime database.' }
  ]
};