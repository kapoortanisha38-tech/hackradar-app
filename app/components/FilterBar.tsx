type FilterBarProps = {
  selectedTag: string;
  setSelectedTag: (tag: string) => void;
};

const tags = [
  "All",
  "AI",
  "ML",
  "GenAI",
  "Web",
  "Cloud",
  "React",
  "Open Source",
];

export default function FilterBar({
  selectedTag,
  setSelectedTag,
}: FilterBarProps) {
  return (
    <section className="bg-[#0B0E14] px-8 pb-8">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`rounded-full px-5 py-2 transition ${
              selectedTag === tag
                ? "bg-cyan-500 text-black font-semibold"
                : "bg-[#11151D] text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
}