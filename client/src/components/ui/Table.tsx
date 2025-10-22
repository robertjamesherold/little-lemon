type TableProps = {
  headers: string[];
  data: (string | number)[][];
};

export function Table({ headers, data }: TableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
      <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-200">
        <thead className="bg-gray-100 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100">
          <tr>
            {headers.map((h) => (
              <th key={h} className="px-4 py-2 font-medium border-b border-gray-200 dark:border-gray-700">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={i % 2 ? "bg-gray-50 dark:bg-gray-900/40" : ""}
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}