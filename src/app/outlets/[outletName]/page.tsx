import { redirect } from "next/navigation";
import path from "path";

interface Props {
  params: { outletName: string };
}

export default async function Home({ params }: Props) {
  redirect(path.join("outlets", params.outletName, "overview"));
}
