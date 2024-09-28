import React from 'react'
import ModuleCard from './ModuleCard';

const Module = () => {
    const modulesData = [
        {
          title: "Routing, Core Concepts, and UI Mastery",
          logo: "https://www.jsmastery.pro/assets/modules/module-2.png",
          lessons: [
            "Routing",
            "Next.js Core Architecture",
            "Authentication",
            "Authorization",
            "Multiple Layouts & Grouped Routes",
            "Using Context API in Next.js",
            "Dark/Light Theme",
            "Developing Responsive Home Page UI",
          ],
        },
        {
          title: "Advanced Topics in Next.js",
          logo: "https://www.jsmastery.pro/assets/modules/module-3.png",
          lessons: [
            "Static Site Generation",
            "Server-side Rendering",
            "API Routes",
            "Image Optimization",
            "Internationalization",
            "Deployment Strategies",
            "Performance Tuning",
            "Best Practices",
          ],
        },
        // Add more module objects here as needed
      ];
  return (
    <div className="mt-28">
      <div className="grid md:grid-cols-2 gap-10">
        {modulesData.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            logo={module.logo}
            lessons={module.lessons}
          />
        ))}
      </div>
    </div>
  )
}

export default Module
