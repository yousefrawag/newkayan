import KayanBread from "@/components/common/kayanBread/KayanBread";
import Link from "next/link";
import Image from "next/image";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { AuthFetchServices } from '@/services/FetchAllContent'
const ServicesHome = () => {
  const {loading ,  Services} = AuthFetchServices()
  if(loading){
    return <h2>loading...</h2>
  }
  return (
    <section className="py-[80px] bg-[#D6ECF7] overflow-hidden ">
      <div className="container mx-auto">
        <div className="flex items-center lg:w-[50%]  px-4  justify-center w-[100%]  mx-auto">
          <KayanBread title="اكتشف خدماتنا المميزة" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 px-4 pt-12 gap-4 justify-between">
         {
          Services.map((item) => {
            return (
              <div className={cardStyle} key={item?.id}>
              <div className="w-full group">
                <Image
                  src={item?.img}
                  alt="feat"
                  width={200}
                  height={100}
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "190px" }}
                  className="rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              <div className="py-4 text-center">
                <h2 className=" text-[#2C2C2E] font-semibold mb-2"> {item?.title}</h2>
                {
                  item?.servicesSlugs.slice(0 ,2)?.map((slug) =>{
                    return (
                      <div className={contentStyle} key={slug}>
                      <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                      <p className="text-[#69696A] text-[12px]">{slug}</p>
                      </div> 
                    )
                  })
                }
              
               
              </div>
              <div>
                          <Link href={`/services/${item?.id}`} className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60">
                  <span relative="relative z-10">اعرف المزيد</span>
      </Link>
              </div>
            </div>
            )
          })
         }
    
         
        
        
        </div>
      </div>
    </section>
  );
};

const cardStyle = "p-4 h-auto bg-white rounded shadow-lg flex flex-col items-center";
const contentStyle = "flex items-center gap-2 py-2"

export default ServicesHome;
