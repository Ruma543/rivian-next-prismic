import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Details`.
 */
export type DetailsProps = SliceComponentProps<Content.DetailsSlice>;

/**
 * Component for "Details" Slices.
 */
const Details = ({ slice }: DetailsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for details (variation: {slice.variation}) Slices
    </section>
  );
};

export default Details;
