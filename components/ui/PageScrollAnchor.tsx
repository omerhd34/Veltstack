interface PageScrollAnchorProps {
  id: string;
}

export function PageScrollAnchor({ id }: PageScrollAnchorProps) {
  return <div id={id} aria-hidden className="h-0 scroll-mt-18" />;
}
