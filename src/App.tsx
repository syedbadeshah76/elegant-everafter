import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const DesignsPage = lazy(() => import("./pages/DesignsPage.tsx"));
const AboutPage = lazy(() => import("./pages/AboutPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const BlogPage = lazy(() => import("./pages/BlogPage.tsx"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage.tsx"));
const TermsPage = lazy(() => import("./pages/TermsPage.tsx"));
const ProductPage = lazy(() => import("./pages/ProductPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/product/:code" element={<ProductPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
