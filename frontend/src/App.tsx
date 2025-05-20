
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./hooks/useCart";
import LoginPage from './pages/LoginPage'; 
import RegisterPage from './pages/RegisterPage';
import ElectronicsPage from './pages/Electronics';
import Fashion from './pages/Fashion';
import HomeandLiving from "./pages/HomeAndLiving";
import Beauty from './pages/Beauty';
import ToysAndKids from './pages/ToysAndKids';
import Sports from './pages/Sports';
import Groceries from './pages/Groceries';
import Health from './pages/Health';
import Books from './pages/Books';
import Automotive from './pages/Automotive';
import ShopNow from './pages/ShopNow';
import SearchResults from './pages/SearchResults';
import FlashSale from './pages/FlashSale'
import Electronics from "./pages/Electronics";
import ExploreCategories  from "./pages/ExploreCategories";
import AboutPage from "./pages/AboutPage";
import HelpCenter from "./pages/HelpCenter";
import HowToBuy from "./pages/HowToBuy";
import ShippingAndDelivery from '@/pages/ShippingAndDelivery';
import ReturnsAndRefunds from "./pages/ReturnsAndRefunds";
import ContactUs from '@/pages/ContactUs';
import Careers from '@/pages/Careers';
import TermsAndConditions from '@/pages/TermsAndConditions';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import SellerCenter from '@/pages/SellerCenter';
import FloatingHelp from '@/pages/FloatingHelp';
import CustomerServicePage from "./pages/CustomerServicePage";  
import TestFloatingHelp from '@/pages/TestFloatingHelp';
import ChatBox from "@/components/ChatBox";
import ForgotPassword from "./pages/ForgotPassword";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/categories/electronics" element={<Electronics />} />
            <Route path="/categories/fashion" element={<Fashion />} />
            <Route path="/categories/home" element={<HomeandLiving />} />
            <Route path="/categories/beauty" element={<Beauty />} />
            <Route path="/categories/toys" element={<ToysAndKids />} />
            <Route path="/categories/sports" element={<Sports />} />
            <Route path="/categories/groceries" element={<Groceries />} />
            <Route path="/categories/health" element={<Health />} />
            <Route path="/categories/books" element={<Books />} />
            <Route path="/categories/automotive" element={<Automotive />} />
            <Route path="/shop-now" element={<ShopNow />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/flash-sale" element={<FlashSale />} />
            <Route path="/categories" element={<ExploreCategories />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/how-to-buy" element={<HowToBuy />} />
            <Route path="/returns" element={<ReturnsAndRefunds />} />
            <Route path="/shipping" element={<ShippingAndDelivery />} />  
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/seller-center" element={<SellerCenter />} />
            <Route path="/floating-help" element={<FloatingHelp />} />
            <Route path="/customer-service" element={<CustomerServicePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/test-help" element={<TestFloatingHelp />} />
           <Route path="/chat" element={<ChatBox />} />
           <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
