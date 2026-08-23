"use client";

interface AsyncStylesheetProps {
  href: string;
}

export default function AsyncStylesheet({ href }: AsyncStylesheetProps) {
  return (
    <link
      rel="stylesheet"
      href={href}
      media="print"
      onLoad={(event) => {
        (event.currentTarget as HTMLLinkElement).media = "all";
      }}
    />
  );
}
