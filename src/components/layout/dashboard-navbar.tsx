import ThemeToggle from "../common/theme-toggle";
import ProfileDropdown from "./profile-dropdown";

export default function DashboardNavbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b px-6">
      <h1 className="font-semibold">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button>
          Notifications
        </button>

        <ProfileDropdown />
      </div>
    </header>
  );
}