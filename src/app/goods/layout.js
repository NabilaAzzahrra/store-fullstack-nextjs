import Navigation from "@/components/navigation";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function GoodLayout({ children }) {
  return (
      <section>
        <Navigation/>
        {children}
        </section>
  );
}