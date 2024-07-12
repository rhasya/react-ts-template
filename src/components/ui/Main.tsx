type MainProps = React.PropsWithChildren<React.ComponentProps<'main'>>;

export function Main({ children }: MainProps) {
  return <main className="container mx-auto">{children}</main>;
}
