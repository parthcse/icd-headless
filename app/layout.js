import "./globals.css";

export const metadata = {
  title: "Icecube Digital",
  description:
    "Build, Grow, and Scale your eCommerce store with experts. Full-stack creative and digital services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/fonts.css" />
        <link rel="stylesheet" href="/css/owl.carousel.min.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="stylesheet" href="/css/output.css" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
