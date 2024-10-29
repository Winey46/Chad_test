import Shopify from "@/components/Shopify";
import { Suspense } from "react";

export default function ShopifyPage() {
  return (
    <Suspense>
      <Shopify />
    </Suspense>
  );
}
