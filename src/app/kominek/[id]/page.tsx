import { notFound } from 'next/navigation';
import { getFireplaceById } from '@/data/fireplaces';
import KominekClient from './KominekClient';

interface Props {
  params: {
    id: string;
  };
}

export default async function KominekPage({ params }: Props) {
  const { id } = await params;
  const fireplace = getFireplaceById(id);

  if (!fireplace) {
    notFound();
  }

  return <KominekClient fireplace={fireplace} />;
}
