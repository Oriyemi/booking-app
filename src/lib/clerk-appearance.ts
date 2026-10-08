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
    rootBox: "w-full",
cardBox: "w-full max-w-none rounded-3xl",
card: "w-full rounded-3xl border border-brand/10 p-6 shadow-none sm:p-8 lg:p-10",

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

    footerActionText: "text-brand/70",
    footerActionLink: "font-medium text-brand-light hover:text-brand",
  },
};