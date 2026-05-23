"use client";

import React from "react";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory
}: CategoryFilterProps) {
  return (
    <section className="relative mx-auto max-w-[80rem] px-6 md:px-8 mb-12">
      <div className="flex flex-wrap justify-center gap-2 border border-[var(--border-subtle)] bg-[var(--bg-card)] rounded-xl p-1.5 max-w-4xl mx-auto">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 cursor-pointer select-none ${
                isActive
                  ? "bg-[var(--accent-primary)] text-[var(--bg-base)] shadow-[0_0_15px_var(--accent-glow)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text-secondary)] hover:bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}
