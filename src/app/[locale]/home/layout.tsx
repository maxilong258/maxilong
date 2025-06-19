import SideBar from "@/components/SideBar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <SideBar />
        <div>{children}</div>
      </div>
    </>
  );
}
