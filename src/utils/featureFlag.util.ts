export type FeatureFlagType = {
  booking_form: boolean;
  early_access: boolean;
};

export const fetchFeatureFlag = async () => {
  try {
    const res = await fetch("/api/featureFlag", {
      method: "GET",
    });

    return res.ok ? res.json() : null;
  } catch {
    return null;
  }
};
