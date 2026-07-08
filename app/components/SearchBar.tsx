type SearchBarProps = {
  searchText: string;
  setSearchText: (value: string) => void;
};

export default function SearchBar({
  searchText,
  setSearchText,
}: SearchBarProps) {
  return (
    <section className="bg-[#0B0E14] px-8 py-12">
      <div className="mx-auto max-w-6xl">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search hackathons..."
          className="w-full rounded-xl border border-gray-700 bg-[#11151D] px-5 py-4 text-white outline-none focus:border-cyan-500"
        />
      </div>
    </section>
  );
}