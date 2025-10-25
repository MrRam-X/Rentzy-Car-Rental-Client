import React from "react";
import type { ServiceCardType } from "../../types";
import ServiceCard from "./ServiceCard";
import { useGlobalContext } from "../../../../context/GlobalContext";

type ServiceCardListProps = {
  servicesList: ServiceCardType[];
};

const ServiceCardList: React.FC<ServiceCardListProps> = ({ servicesList }) => {
  const { carServicesList } = useGlobalContext();
  return (
    <>
      {servicesList.map((service) => {
        const serviceId =
          carServicesList.find((item) => item.serviceTitle === service.title)
            ?._id || "";
        return (
          <ServiceCard key={service.id} {...service} serviceId={serviceId} />
        );
      })}
    </>
  );
};

export default ServiceCardList;
