import Store from "@/components/Store";

export default function StorePage({ params }: { params: { storeName: string }}) { 
  return <Store storeName={params.storeName} />
}
