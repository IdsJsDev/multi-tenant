import { LoadingDots } from "@/components/LoadingDots";

export default function LoginLoading() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center gap-3 text-gray-400 text-sm">
        <LoadingDots />
        <p className="text-xs mt-4 text-black">
          Synthetic delay to demonstrate loading state
        </p>
      </div>
    </main>
  );
}
