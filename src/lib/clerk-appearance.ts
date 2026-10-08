export const clerkAppearance = {
  layout: {
    logoImageUrl: "/oja-logo.png",
    logoPlacement: "inside",
    socialButtonsVariant: "blockButton",
    shimmer: true,
  },
  variables: {
    colorPrimary: "var(--color-brand)",
    colorBackground: "#ffffff",
    colorInputBackground: "#ffffff",
    colorText: "var(--color-brand-dark)",
    colorTextSecondary: "rgb(0 0 0 / 0.6)",
    colorDanger: "#dc2626",
    borderRadius: "1rem",
    fontFamily: "inherit",
  },
  elements: {
    rootBox: { width: "100%" },
    cardBox: {
      width: "100%",
      maxWidth: "none",
      background: "#ffffff",
      border: "1px solid rgba(31, 107, 58, 0.1)",
      borderRadius: "1.5rem",
      boxShadow: "none",
      overflow: "hidden",
    },
    card: {
      width: "100%",
      background: "#ffffff",
      border: "none",
      borderRadius: 0,
      boxShadow: "none",
      padding: "2rem 1.5rem 1rem",
      "@media (min-width: 1024px)": {
        padding: "2.5rem 2.5rem 1rem",
      },
    },

    logoBox: { height: "4rem", justifyContent: "center" },
    logoImage: { height: "4rem", width: "auto", objectFit: "contain" },
    headerTitle: "text-2xl font-bold text-brand",
    headerSubtitle: "text-brand/70",

    socialButtonsBlockButton:
      "rounded-2xl border border-brand/20 py-3 transition hover:bg-white",
    socialButtonsBlockButtonText: "font-medium text-brand-dark",

    dividerLine: "bg-brand/15",
    dividerText: "text-brand/60",

    formFieldLabel: "font-medium text-brand-dark",
    formFieldInput:
      "rounded-xl border border-brand/20 py-3 focus:border-brand focus:ring-2 focus:ring-brand/20",
    formFieldInputShowPasswordButton: "text-brand/60 hover:text-brand",
    formFieldErrorText: "text-sm text-red-600",
    otpCodeFieldInput: "rounded-xl border border-brand/20 focus:border-brand",

    formButtonPrimary:
      "rounded-2xl bg-brand py-3 text-sm font-semibold normal-case text-white shadow-none transition hover:bg-brand-light",
    formResendCodeLink: "text-brand-light hover:text-brand",
    identityPreviewEditButton: "text-brand-light hover:text-brand",

    footer: {
      background: "transparent",
      border: "none",
      boxShadow: "none",
      paddingBottom: "1.5rem",
    },
    footerAction: { justifyContent: "center", padding: "0", margin: "0" },
    footerActionText: "text-brand/70",
    footerActionLink: "font-medium text-brand-light hover:text-brand",
  },
};