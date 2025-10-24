export type Testimonial = {
    quote: string;
    imgName: string;
    userName: string;
    userDesignation: string;
}

export type TestimonialProps = {
    testimonials: Testimonial[]
}

export type Expert = {
    name: string;
    designation: string;
    imgName: string;
}

export type ExpertsProps = {
    experts: Expert[]
}
