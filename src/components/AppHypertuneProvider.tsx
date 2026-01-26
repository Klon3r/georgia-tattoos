import { HypertuneProvider } from "../generated/hypertune.react";

export default function AppHypertuneProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HypertuneProvider
      createSourceOptions={{
        token: import.meta.env.VITE_HYPERTUNE_TOKEN!,
        remoteLogging: { mode: "off" },
        localLogger: () => {},
      }}
      rootArgs={{
        context: {
          environment:
            process.env.NODE_ENV === "development"
              ? "development"
              : "production",
          user: {
            id: "e23cc9a8-0287-40aa-8500-6802df91e56a",
            name: "Example User",
            email: "user@example.com",
          },
        },
      }}
    >
      {children}
    </HypertuneProvider>
  );
}
