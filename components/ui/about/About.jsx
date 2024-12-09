import KayanBread from "@/components/common/kayanBread/KayanBread"
import aboutImage from "@/public/images/about-home.svg"

import Image from "next/image"
const About = () => {
  return (
    <section className='py-[80px]'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
        <div className="w-[50%]">
            <KayanBread title="من نحن"/>
            <div>
                <h1 className="text-[32px] font-medium my-4 text-[#2C2C2E]">كل ما يخص السفر والسياحة والحجوزات</h1>
                <p className="text-[#69696A] leading-8 max-w-[80%] ">شركة  كيان تأسست عام 2020 متخصصة في تقديم حلول شاملة في مجالات السفر والسياحة والخدمات الحكومية. تميزت الشركة منذ انطلاقها بتقديم خدمات مبتكرة لتلبية احتياجات العملاء، مع بناء علاقات قوية مع المؤسسات الحكومية والخاصة في السعودية، الإمارات، الأردن، مصر، وسلطنة عمان.</p>
            </div>
        </div>
        <div className="w-[50%] flex items-start justify-end">
        <Image
                src={aboutImage}
                alt="about Image"
                style={{ objectFit: "cover", width: "403px", height: "448px" }}
                />
        </div>
        </div>
      </div>
    </section>
  )
}

export default About