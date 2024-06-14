import { main } from './SMain.css.ts';
import { ReactNode } from 'react';

export default function SMain({ children }: { children: ReactNode }) {
  return <main className={main}>{children}</main>;
}
