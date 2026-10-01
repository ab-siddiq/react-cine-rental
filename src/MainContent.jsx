import Sidebar from "./Sidebar";

export default function MainContent() {
  return (
    <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
      <Sidebar />
    </div>
  );
}
