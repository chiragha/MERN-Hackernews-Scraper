function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <div className="mt-14 flex items-center justify-center gap-3">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-lg border border-zinc-700 px-4 py-2 text-zinc-300 disabled:opacity-50"
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`rounded-lg px-4 py-2 ${
            currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "border border-zinc-700 text-zinc-300"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-lg border border-zinc-700 px-4 py-2 text-zinc-300 disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;