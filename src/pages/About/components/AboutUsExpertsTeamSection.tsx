import React from "react";
import type { ExpertsProps } from "../../../types/commonTypes";
import Carousel from "../../../components/common/Carousel";
import ExpertsCard from "./ExpertsCard";

type AboutUsExpertsTeamSectionProps = ExpertsProps;

const AboutUsExpertsTeamSection: React.FC<AboutUsExpertsTeamSectionProps> = ({
  experts,
}) => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-gold tracking-[0.3em] uppercase text-sm mb-2">
            OUR TEAM
          </p>
          <h2 className="text-4xl font-bold text-brand-dark">
            Our Experts <span className="text-brand-gold">Team</span>
          </h2>
        </div>
        <Carousel list={experts}>
          <>
            {experts.map((expert, idx) => {
              return (
                <ExpertsCard key={`${idx}-${expert.name}`} expert={expert} />
              )
            })}
          </>
        </Carousel>
      </div>
    </section>
  );
};

export default AboutUsExpertsTeamSection;
