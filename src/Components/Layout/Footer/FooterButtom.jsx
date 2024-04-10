import masterCard from "../../../../public/footer-images/logos_mastercard.png"
import visa from "../../../../public/footer-images/logos_visa.png"
import gPay from "../../../../public/footer-images/logos_google-pay.png"
import paypal from "../../../../public/footer-images/logos_paypal.png"


export default function FooterButtom() {
  return (
    <div className=" mt-[80px] mb-6 flex gap-[100px] ">
      <div className="font-sans text-sm text-gray-500">© Tealuxe, 2023</div>
      <div className="flex items-center gap-4">
        <img src={masterCard} alt="mastercard" className="w-[26px] h-[20px]"/>
        <img src={visa} alt="visa" className="w-[31px] h-[10px]"/>
        <img src={gPay} alt="gPay" className="w-[29px] h-[12px]"/>
        <img src={paypal} alt="paypal" className="w-[10px] h-[12px]"/>
      </div>
    </div>
  );
}
