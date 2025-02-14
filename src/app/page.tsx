import ECommerce from "@/components/Dashboard/Home";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";


export const metadata: Metadata = {
  title:
    "Sneha's House",
  description: "Make Your Day Special With Sneha's House",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
    </>
  );
}
