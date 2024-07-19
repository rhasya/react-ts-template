type MainProps = React.HTMLAttributes<HTMLElement>;

export function Main({ children }: MainProps) {
  return <main className="container mx-auto">{children}</main>;
}
