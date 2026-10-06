export const clerkAppearance = {
  variables: {
    colorPrimary: "var(--color-brand)",
    colorBackground: "#ffffff",
    colorText: "var(--color-brand)",
    colorTextSecondary: "rgb(0 0 0 / 0.6)",
    borderRadius: "1rem",
  },
  elements: {
    rootBox: "w-full",
    card: "shadow-lg shadow-brand/10 border border-brand/10 rounded-3xl",
    headerTitle: "text-brand font-bold",
    headerSubtitle: "text-brand/70",
    formButtonPrimary:
      "bg-brand hover:bg-brand-light text-white normal-case text-sm font-semibold rounded-2xl py-3",
    socialButtonsBlockButton: "rounded-2xl border-brand/20 hover:bg-cream",
    formFieldInput: "rounded-xl border-brand/20 focus:border-brand",
    footerActionLink: "text-brand-light hover:text-brand",
  },
};