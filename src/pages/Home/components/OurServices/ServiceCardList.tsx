import React from "react";
import type { ServiceCardType, ServiceListProps } from "../../types";
import ServiceCard from "./ServiceCard";

type ServiceCardListProps = ServiceListProps & {
  servicesList: ServiceCardType[];
};

const ServiceCardList: React.FC<ServiceCardListProps> = ({
  servicesList,
  carServicesList,
}) => {
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
