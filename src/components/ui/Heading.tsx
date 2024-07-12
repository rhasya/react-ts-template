import clsx from 'clsx';

type H1Props = React.PropsWithChildren<React.ComponentProps<'h1'>>;

export function H1({ className, children }: H1Props) {
  return <h1 className={clsx(className, 'text-2xl font-bold')}>{children}</h1>;
}
