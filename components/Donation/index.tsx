import { Callout } from "@components/Callout";
import { DirectDetails } from "./DirectDetails";
import { DonationLink } from "./DonationLink";

export const Donation = () => (
  <Callout>
    <DirectDetails />

    <DonationLink />
  </Callout>
)