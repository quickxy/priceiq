import Link from "next/link";
import { products, priceDiff, competitorTrend, hasAlert } from "./data";

function usd(n: number): string {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

const HEADERS = [
  "Product",
  "Your price",
  "Competitor",
  "Their price",
  "Gap",
  "Trend",
  "Updated",
];

export default function DashboardPage() {
  const gaps = products.map((p) => Math.abs(priceDiff(p)));
  const avgGap = gaps.reduce((a, b) => a + b, 0) / gaps.length;
  const alertCount = products.filter(hasAlert).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-indigo-600">
            PriceIQ
          </Link>
          <span className="text-sm text-gray-500">Dashboard</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900">Price Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Competitive pricing across your tracked products. Demo data.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Products tracked</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">
              {products.length}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Avg. price gap</p>
            <p className="mt-1 text-3xl font-bold text-gray-900">
              {usd(avgGap)}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-5">
            <p className="text-sm text-gray-500">Active alerts</p>
            <p
              className={`mt-1 text-3xl font-bold ${
                alertCount > 0 ? "text-red-600" : "text-gray-900"
              }`}
            >
              {alertCount}
            </p>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {HEADERS.map((h) => (
                  <th
                    key={h}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((p) => {
                const diff = priceDiff(p);
                const t = competitorTrend(p);
                const alert = hasAlert(p);
                return (
                  <tr key={p.id} className={alert ? "bg-red-50" : undefined}>
                    <td className="px-6 py-4">
                      <p className="font-medium text-gray-900">{p.name}</p>
                      <p className="text-xs text-gray-400">{p.sku}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-900">
                      {usd(p.yourPrice)}
                    </td>
                    <td className="px-6 py-4 text-gray-500">{p.competitor}</td>
                    <td className="px-6 py-4 text-gray-900">
                      {usd(p.competitorPrice)}
                    </td>
                    <td
                      className={`px-6 py-4 font-medium ${
                        diff > 0
                          ? "text-red-600"
                          : diff < 0
                            ? "text-green-600"
                            : "text-gray-400"
                      }`}
                    >
                      {diff > 0
                        ? `+${usd(diff)}`
                        : diff < 0
                          ? `-${usd(Math.abs(diff))}`
                          : "—"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {t === "up" && (
                        <span className="text-blue-600">▲ rising</span>
                      )}
                      {t === "down" && (
                        <span className="text-red-600">▼ falling</span>
                      )}
                      {t === "flat" && (
                        <span className="text-gray-400">● flat</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {p.lastUpdated}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-gray-400">
          Demo data for illustration. Connect a pricing data source for live
          updates.
        </p>
      </main>
    </div>
  );
}
