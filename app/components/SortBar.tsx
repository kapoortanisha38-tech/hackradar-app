type SortBarProps = {
  sortOrder: string;
  setSortOrder: (value: string) => void;
};

export default function SortBar({
  sortOrder,
  setSortOrder,
}: SortBarProps) {
  return (
    <section className="bg-[#0B0E14] px-8 pb-8">
      <div className="mx-auto max-w-6xl">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-xl border border-gray-700 bg-[#11151D] px-4 py-3 text-white outline-none focus:border-cyan-500"
        >
          <option value="none">Sort by</option>

          <option value="match">🤖 AI Match</option>

          <option value="deadline">📅 Deadline</option>

          <option value="prize">💰 Prize Money</option>

          <option value="team">👥 Team Size</option>
        </select>
      </div>
    </section>
  );
}