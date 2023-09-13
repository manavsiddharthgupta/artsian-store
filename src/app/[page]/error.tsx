"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-[#6b6762] h-[calc(100vh-100px)] flex justify-center items-center">
      <div className="w-fit h-fit text-center">
        <h2 className="text-xl font-semibold text-center">
          Oops something went wrong!
        </h2>
        <button
          className="bg-[#6b6762] mt-4 px-3 py-1 rounded-md text-white"
          onClick={() => router.back()}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
