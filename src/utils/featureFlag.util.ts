import { useHypertune } from "../generated/hypertune.react";

/**
 * Gets the current state of the booking form feature flag from Hypertune.
 *
 * @returns {boolean} True if the booking form is enabled, false otherwise.
 *                    Defaults to false if Hypertune is unavailable.
 */
export const getBookingFormEnabledFlag = () => {
  const hypertune = useHypertune();
  const hypertuneEnabled = hypertune.bookingFormEnabled({
    fallback: false,
  });

  const isLocalhostOverride =
    (import.meta.env.VITE_BOOKING_LOCALHOST === "true" &&
      window.location.hostname === "localhost") ||
    window.location.hostname.includes("192.168");

  return isLocalhostOverride || hypertuneEnabled;
};

/**
 * Gets the current state of the booking form early access feature flag from Hypertune.
 *
 * @returns {boolean} True if the booking form early access is enabled, false otherwise.
 *                    Defaults to false if Hypertune is unavailable.
 */
export const getBookingFormEarlyAccessFlag = () => {
  const hypertune = useHypertune();
  const hypertuneEnabled = hypertune.bookingFormEarlyAccess({
    fallback: false,
  });

  const isLocalhostOverride =
    (import.meta.env.VITE_BOOKING_EARLY_ACCESS_LOCALHOST === "true" &&
      window.location.hostname === "localhost") ||
    window.location.hostname.includes("192.168");

  // If Playwright is active skip early access flag
  const isPlaywright = navigator.webdriver === true;
  if (isPlaywright) return false;

  return isLocalhostOverride || hypertuneEnabled;
};
