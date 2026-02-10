import { Sidebar } from "@/components/sidebar";
import { ProjectList } from "@/components/project-list";
import { DetailPanel } from "@/components/detail-panel";
import { MobileFooter } from "@/components/mobile-footer";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-linear-bg">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0">
        <ProjectList />
        <MobileFooter />
      </div>
      <DetailPanel />
    </div>
  );
}
