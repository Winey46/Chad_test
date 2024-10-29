import Store from "@/components/Store";
import { Suspense } from "react";

export default function StorePage({ params }: { params: { storeName: string }}) { 
  return (
    <Suspense>
      <Store storeName={params.storeName} />
    </Suspense>
  );
}
