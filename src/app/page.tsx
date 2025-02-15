import DashboardHome from "@/components/Dashboard/Home"; // Renamed import
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sneha's House",
  description: "Make Your Day Special With Sneha's House",
};

export default function Home() {
  return (
  
      <DashboardHome />
    
  );
}
