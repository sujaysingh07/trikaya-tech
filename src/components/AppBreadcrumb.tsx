'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
} from './ui/breadcrumb';

export default function AppBreadcrumb() {
    const pathname = usePathname();
    const segments = pathname.split('/').filter(Boolean);

    const breadcrumbs = segments.map((segment, index) => {
        const href = '/' + segments.slice(0, index + 1).join('/');

        let label: string;

        /**
         * 🔹 Remove:
         * - numeric IDs (123-)
         * - UUIDs (0aae7535-701a-4a1c-8389-02b37f10d3c7-)
         */
        // eslint-disable-next-line prefer-const
        label = segment
            // remove UUID or numeric prefix
            .replace(
                /^([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|^\d+)-?/i,
                ''
            )
            // convert slug to readable text
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase())
            .trim();

        return {
            href,
            label,
            isLast: index === segments.length - 1,
        };
    });

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                    <BreadcrumbItem key={item.href}>
                        {index > 0 && <span>{'>'}</span>}

                        {item.isLast ? (
                            <BreadcrumbPage >{item.label}</BreadcrumbPage>
                        ) : (
                                <BreadcrumbLink asChild className='text-primary-color font-normal'>
                                <Link href={item.href}>{item.label}</Link>
                            </BreadcrumbLink>
                        )}
                    </BreadcrumbItem>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    );
}
