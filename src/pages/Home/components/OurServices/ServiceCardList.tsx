import React from "react";
import type { ServiceCardType } from "../../types";
import ServiceCard from "./ServiceCard";

type ServiceCardListProps = {
    servicesList: ServiceCardType[]
}

const ServiceCardList: React.FC<ServiceCardListProps> = ({servicesList}) => {
  return (
    <>
      {servicesList.map((service) => {
        return (
          <ServiceCard key={service.id} {...service}/>
        );
      })}
    </>
  );
};

export default ServiceCardList;
