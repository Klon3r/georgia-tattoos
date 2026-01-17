import { useHypertune } from "../generated/hypertune.react";

/**
 * Gets the current state of the booking form feature flag from Hypertune.
 *
 * @returns {boolean} True if the booking form is enabled, false otherwise.
 *                    Defaults to false if Hypertune is unavailable.
 */
export const getBookingFormEnabledFlag = () => {
  const hypertune = useHypertune();
  return hypertune.bookingFormEnabled({
    fallback: false,
  });
};
