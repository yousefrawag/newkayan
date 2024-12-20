import Navbar from "@/components/ui/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/ui/footer/Footer";
import {BsWhatsapp} from "react-icons/bs"
import Upbutton from "@/components/common/buttonup/Upbutton";
export const metadata = {
  title: "Kayyan",
  description: "تقدم شركه كيان حلول ممتازه فى خدمات التأيرات والسياحه والرحلات وإنشاء الشركات",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir='rtl'>
      <body className="font-body"
      >
        <Navbar/>
        <main>
        {children}
        </main>
        <a
  href="https://api.whatsapp.com/send?phone=966115201546"

  className="whats_button"
  target="_blank"
  rel="noopener noreferrer"
>
  <BsWhatsapp />
</a>
<Upbutton />
        <Footer/>
      </body>
    </html>
  );
}
