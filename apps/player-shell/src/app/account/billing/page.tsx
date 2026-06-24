async function getBillingData() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  // throw new Error('Unable to fetch subscription data')
}

export default async function BillingPage() {
  const data = await getBillingData();

  return (
    <main className="max-w-2xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6">Billing</h1>
      <p className="text-gray-500">Plan</p>
    </main>
  );
}
