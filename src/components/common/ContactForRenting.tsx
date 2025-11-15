import React from "react";
import bgContactForRenting from "../../assets/images/ContactForRenting.jpg"
import CustomLinkButton from "./Buttons/CustomLinkButton";

type ContactForRentingProps = {
  showComingSoonToaster: (featureName: string) => void;
}

const ContactForRenting: React.FC<ContactForRentingProps> = ({
  showComingSoonToaster
}) => {
  return (
    <section
      id="cta-renting"
      className="w-full bg-fixed bg-cover bg-center relative sm:h-[500px] py-24 sm:py-32"
      style={{ backgroundImage: `url(${bgContactForRenting})`}}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-gold font-semibold tracking-[0.2em] uppercase text-sm mb-2">
            RENT YOUR CAR
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Interested in Renting?
          </h2>
          <p className="text-gray-300 mb-10">
            Don't hesitate and send us a message.
          </p>

          {/* Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* WhatsApp Button */}
            <CustomLinkButton
              onClick={() => showComingSoonToaster("WhatsApp Rent Chat")}
              borderClassName="border-2 border-brand-gold rounded-full"
              colorClassName="bg-brand-gold text-black"
              paddingClassName="py-4 px-8"
              hoverClassName="hover:bg-white hover:text-black hover:border-white hover:-translate-y-1"
              transitionClassName="transition-all duration-300 ease-in-out"
              linkTitle="Rent Now"
              iconFirst={true}
              iconElementName="WHATSAPP"
            />

            {/* Rent Now Button */}
            <CustomLinkButton
              onClick={() => showComingSoonToaster("Rent Now")}
              borderClassName="border-2 border-white rounded-full"
              colorClassName="text-white"
              paddingClassName="py-4 px-8"
              hoverClassName="hover:bg-brand-gold hover:text-black hover:border-brand-gold hover:-translate-y-1"
              transitionClassName="transition-all duration-300 ease-in-out"
              linkTitle="Rent Now"
              iconElementName="TOP_RIGHT_ARROW"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForRenting;
