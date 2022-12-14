import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import Eyebanner from "../../Assest/Eyebanner.jpg";
// import mbbanner from "../../Assest/Mbbanner.jpg";

function Banner() {
  return (
    <div>
      <div>
        <img
          className="w-full h-full bg-cover  md:block hidden pt-10 md:pt-16 lg:pt-20   "
          src={Eyebanner}
          alt="banner "
        />
      </div>
      {/* <div className="block md:hidden  ">
        <div className="pt-10   ">
          <img
            className="  w-full h-full  md:pt-12 md:hidden block"
            src={mbbanner}
            alt="banner "
          />
        </div>
      </div> */}

      <div className="absolute">
        <WhatsAppWidget
          phoneNo="919884639400"
          position="left"
          widgetWidth="300px"
          widgetWidthMobile="260px"
          autoOpen={true}
          autoOpenTimer={5000}
          messageBox={true}
          // messageBoxTxt="Hi Team, is there any related service available ?"
          iconSize="60"
          iconColor="white"
          iconBgColor="#25D366"
          headerIcon="https://athulyahomecare.com/lp/images/care.png"
          headerIconColor="pink"
          headerTxtColor="White"
          headerBgColor="#095E53"
          headerTitle="Athulya Homecare"
          headerCaption="Online"
          bodyBgColor=""
          chatPersonName="Support"
          chatMessage={
            <>
              Hi there 👋 <br />
              <br /> How can I help you?
            </>
          }
          footerBgColor=""
          btnBgColor="#14C656"
          btnTxtColor="white"
          btnTxt={
            <>
              <ion-icon name="send-sharp"></ion-icon>
              Start Chat
            </>
          }
        />
      </div>
      <div></div>
    </div>
  );
}

export default Banner;
