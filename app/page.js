import { redirect } from "next/navigation";

export default function RootPage() {
  redirect("/ar"); // redirect to Arabic as main language
  return null;
}