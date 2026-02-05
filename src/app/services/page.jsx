import ServicesDetails from "@/components/ServicesDetails";

export const metadata = {
  title: "Services | Kumar Devansh",
  description: "Services I offer as a Full Stack Developer",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ServicesDetails />
    </main>
  );
}
