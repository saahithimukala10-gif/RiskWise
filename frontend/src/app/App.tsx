import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/app/components/ThemeProvider";
import { Navbar } from "@/app/components/Navbar";
import { HomePage } from "@/app/pages/HomePage";
import { DashboardPage } from "@/app/pages/DashboardPage";
import { AboutPage } from "@/app/pages/AboutPage";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="riskwise-theme"
    >
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-[#0F1419] dark:via-[#1A202C] dark:to-[#2C1810]">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/dashboard"
              element={<DashboardPage />}
            />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}